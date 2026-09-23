/* STONE PWA — service worker de coque.
   Frontière de confidentialité : ne met JAMAIS en cache une réponse des
   moteurs Apps Script ni d'aucune autre origine. Seule la coque statique
   (index, manifeste, icônes, écran hors-ligne) est servie depuis le cache. */
const SHELL_PREFIX = 'stone-pwa-shell-';
const SHELL_VERSION = 'v27';
/* Empreinte de contenu (19/09/2026) : `site-build.mjs` remplace 'source' par un hachage des fichiers de la coque
   de CETTE variante. Un fichier de la coque qui change modifie donc sw.js, donc le navigateur installe la
   nouvelle version et le cache change de nom : plus besoin de penser à monter SHELL_VERSION à la main
   (l'oubli qui laissait un téléphone sur une coque périmée). En développement la valeur reste 'source'. */
const SHELL_BUILD = '57fadecf7f63';

/* Un cache PAR VARIANTE (19/09/2026, audit Q36). Les quatre coques (`/`, `/tout/`, `/perso/`, `/invest/`)
   vivent sur la même origine et partageaient le nom `stone-pwa-shell-v25` : la première qui montait de
   version supprimait, à son activation, le cache des trois autres (page hors ligne comprise) tant qu'elles
   n'avaient pas vu leur propre mise à jour. Le nom est désormais dérivé de la portée d'enregistrement, et
   chaque variante ne purge que ses propres versions. */
function scopeTag(scope) {
  let chemin = '/';
  try { chemin = new URL(scope).pathname; } catch (e) { /* portée illisible : racine */ }
  const tag = chemin.replace(/^\/+|\/+$/g, '').replace(/[^A-Za-z0-9]+/g, '-').toLowerCase();
  return tag || 'racine';
}
const SHELL_SCOPE = (self.registration && self.registration.scope) || new URL('./', self.location.href).href;
const VARIANT_PREFIX = `${SHELL_PREFIX}${scopeTag(SHELL_SCOPE)}-`;
const SHELL_CACHE = `${VARIANT_PREFIX}${SHELL_VERSION}-${SHELL_BUILD}`;
/* Les versions de CETTE variante, et rien d'autre (21/09/2026, univers `/invest-next/`) : le préfixe
   `stone-pwa-shell-invest-` est aussi le début de `stone-pwa-shell-invest-next-…`. Un simple `startsWith`
   aurait fait purger le cache de `/invest-next/` par `/invest/` à chaque mise à jour. Le nom complet doit
   donc être « préfixe + vNN + empreinte », pas seulement commencer par le préfixe. */
const OWN_CACHE_RE = new RegExp('^' + VARIANT_PREFIX.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + 'v\\d+-[a-z0-9]+$');
/* Ancien nom commun à toutes les variantes (jusqu'à v25) : chaque variante n'y retire que SES fichiers,
   et le dernier à partir supprime le cache vide. Aucune variante ne vide celui d'une autre. */
const LEGACY_SHARED_CACHE = /^stone-pwa-shell-v\d+$/;
const SHELL_FILES = [
  './',
  './index.html',
  './config.js',
  './offline.html',
  './manifest.webmanifest',
  './icons/stone-192.png',
  './icons/stone-512.png',
  './icons/stone-maskable-192.png',
  './icons/stone-maskable-512.png',
];
const OWN_URLS = SHELL_FILES.map((file) => new URL(file, self.location.href).href);


function releaseLegacy(key) {
  return caches.open(key).then((cache) => cache.keys().then((requests) => Promise.all(
    requests.filter((req) => OWN_URLS.includes(req.url)).map((req) => cache.delete(req)),
  )).then(() => cache.keys())).then((left) => (left.length ? null : caches.delete(key)));
}

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(SHELL_CACHE).then((cache) => cache.addAll(SHELL_FILES)));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.map((key) => {
      if (OWN_CACHE_RE.test(key) && key !== SHELL_CACHE) return caches.delete(key);
      if (LEGACY_SHARED_CACHE.test(key)) return releaseLegacy(key);
      return null;
    }))).then(() => self.clients.claim()),
  );
});

self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  if (request.method !== 'GET' || url.origin !== self.location.origin) return;

  /* Navigation : réseau d'abord. Hors réseau (21/09/2026, préparation Play Store), la COQUE précachée est
     servie : l'application installée s'ouvre, dit elle-même « Connexion indisponible » et se relance dès que
     le réseau revient. `offline.html` ne reste que le dernier repli, si le précache de l'index manquait.
     Toujours aucune donnée financière : la coque ne contient rien, ce sont les moteurs qui exigent le réseau. */
  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).catch(() => caches.match('./index.html')
      .then((coque) => coque || caches.match('./offline.html'))));
    return;
  }

  const scopePath = new URL('./', self.location.href).pathname;
  const relative = './' + url.pathname.slice(scopePath.length);
  if (!SHELL_FILES.includes(relative) && !SHELL_FILES.includes(relative + '/')) return;

  // config.js porte les adresses des moteurs : réseau d'abord, sinon un
  // changement d'URL ne se propagerait jamais aux coques déjà installées.
  if (relative === './config.js') {
    event.respondWith(
      fetch(request).then((response) => {
        const copy = response.clone();
        caches.open(SHELL_CACHE).then((cache) => cache.put(request, copy));
        return response;
      }).catch(() => caches.match(request)),
    );
    return;
  }

  event.respondWith(caches.match(request).then((cached) => cached || fetch(request)));
});
