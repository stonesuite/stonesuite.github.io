/* STONE PWA — registre des univers · COQUE TOUT OUVERT.
   GÉNÉRÉ par site-build.mjs depuis config.beta.js — ne pas éditer.
   Les univers en attente (money, estate) ne sont pas publiés ; tout le reste est ouvert.
   Ne contient AUCUNE adresse personnelle : Invest pointe sur le Starter
   multi-utilisateur, Money sur son canal multi-utilisateur (chaque personne
   crée et possède son propre classeur) et Estate sur son déploiement dédié.
   Décision Stan 02/09/2026 : la suite publique = Invest, Money, Estate —
   Ledge est retiré de la bêta (usage privé) et Trade abandonné. */
window.STONE_PWA_INSTANCE = "beta";

/* ══ OUVERTURE DES UNIVERS ══════════════════════════════════════════════
   Un seul interrupteur par univers, plus bas : `enabled`.

     a VRAI  l'univers s'ouvre normalement
     a FAUX  l'univers affiche son ecran « Bientot », avec un apercu de ce
             qu'il donnera — et rien d'autre ne change

   Un univers ferme n'est ni charge, ni interroge pour l'inventaire : aucune
   connexion n'est tentee vers lui. Le passer a `true` suffit a l'ouvrir, sans
   aucune autre modification.
   ══════════════════════════════════════════════════════════════════════ */
window.STONE_PWA_UNIVERSES = [
  {
    "key": "invest",
    "label": "Invest",
    "tagline": "De l’épargne au capital",
    "glyph": "<svg width='1.15em' height='1.15em' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.6' stroke-linejoin='round' stroke-linecap='round' style='vertical-align:-0.15em'><path d='M7.75 11.5 H16.25 L18.5 16 H5.5 Z'/><path d='M8.8 14.3 L11.3 12.9 L13.1 13.6 L15.4 12.4'/><circle cx='15.4' cy='12.4' r='0.85' fill='currentColor' stroke='none'/></svg>",
    "accent": "#c9a567",
    "url": "https://script.google.com/macros/s/AKfycbzDRyB_5J65k1xOF9M_OuCUBNoIhCyRsClauSxfoiZliD4LLjcXKJZj09Tzk5erdOBESA/exec",
    "msgPrefix": "STONE_STARTER_PWA",
    "enabled": true,
    "preview": {
      "shot": "/guides/capture-invest.png",
      "lead": "Suivre tes actions BRVM et ta performance réelle.",
      "points": [
        "Ce que tu as investi, ce que ça vaut aujourd’hui",
        "La répartition de ton portefeuille, titre par titre",
        "Ta courbe comparée aux indices BRVM"
      ],
      "guide": "/guides/invest.html"
    }
  }
];
