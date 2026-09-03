/* STONE PWA — service worker de coque.
   Frontière de confidentialité : ne met JAMAIS en cache une réponse des
   moteurs Apps Script ni d'aucune autre origine. Seule la coque statique
   (index, manifeste, icônes, écran hors-ligne) est servie depuis le cache. */
const SHELL_PREFIX = 'stone-pwa-shell-';
const SHELL_VERSION = 'v13';
const SHELL_CACHE = `${SHELL_PREFIX}${SHELL_VERSION}`;
const SHELL_FILES = [
  './',
  './index.html',
  './config.js',
  './offline.html',
  './manifest.webmanifest',
  './icons/stone-192.png',
  './icons/stone-512.png',
  './icons/stone-maskable-512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(SHELL_CACHE).then((cache) => cache.addAll(SHELL_FILES)));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys
        .filter((key) => key.startsWith(SHELL_PREFIX) && key !== SHELL_CACHE)
        .map((key) => caches.delete(key)),
    )).then(() => self.clients.claim()),
  );
});

self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  if (request.method !== 'GET' || url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).catch(() => caches.match('./offline.html')));
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
