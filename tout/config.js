/* STONE PWA — registre des univers · COQUE TOUT OUVERT.
   GÉNÉRÉ par site-build.mjs depuis config.beta.js — ne pas éditer.
   Identique à la coque publique, tous les univers ouverts.
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
    key: "money",
    label: "Money",
    tagline: "Du revenu à l’épargne",
    /* Base de la pyramide STONE : le revenu, socle large posé sur son assise. */
    glyph: "<svg width='1.15em' height='1.15em' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.6' stroke-linejoin='round' stroke-linecap='round' style='vertical-align:-0.15em'><path d='M4.75 17.5 H19.25 L21 21 H3 Z'/><path d='M6.4 19.3 H17.6'/></svg>",
    accent: "#e0c18a",
    url: "https://script.google.com/macros/s/AKfycbxPNnyqKv1IiSclCvDSQKPYx2ZUEm4guXz-2FXXn_wYWskXN5VA-rCrJ66KkvvIlu34bg/exec",
    msgPrefix: "STONE_MONEY_PWA",
    /* Fermé au lancement — décision de Stan (04/09/2026). */
    enabled: true,
    preview: {
      shot: "/guides/capture-money.png",
      lead: "Savoir où part ton argent, et ce qu’il t’en reste vraiment.",
      points: [
        "Un seul chiffre qui dit la vérité sur ton mois",
        "La dette distinguée de la dépense",
        "Ce que tu mets de côté, visible avant la fin du mois"
      ],
      guide: "/guides/money.html"
    }
  },
  {
    key: "invest",
    label: "Invest",
    tagline: "De l’épargne au capital",
    /* Tranche médiane de la pyramide STONE : les placements, traversés d'une courbe qui monte. */
    glyph: "<svg width='1.15em' height='1.15em' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.6' stroke-linejoin='round' stroke-linecap='round' style='vertical-align:-0.15em'><path d='M7.75 11.5 H16.25 L18.5 16 H5.5 Z'/><path d='M8.8 14.3 L11.3 12.9 L13.1 13.6 L15.4 12.4'/><circle cx='15.4' cy='12.4' r='0.85' fill='currentColor' stroke='none'/></svg>",
    accent: "#c9a567",
    url: "https://script.google.com/macros/s/AKfycbwZ4LbcsS7jHv38XReH0l_l70JOKp6biJr1vskYDJBxvrFfdQ_kHGp_v61reoP-TToEJQ/exec",
    msgPrefix: "STONE_STARTER_PWA",
    enabled: true,
    preview: {
      shot: "/guides/capture-invest.png",
      lead: "Suivre tes actions BRVM et ta performance réelle.",
      points: [
        "Ce que tu as investi, ce que ça vaut aujourd’hui",
        "La répartition de ton portefeuille, titre par titre",
        "Ta courbe comparée aux indices BRVM"
      ],
      guide: "/guides/invest.html"
    }
  },
  {
    key: "estate",
    label: "Estate",
    tagline: "Du capital à la pierre",
    /* Pointe de la pyramide STONE : le toit, avec sa porte en clef de voûte. */
    glyph: "<svg width='1.15em' height='1.15em' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.6' stroke-linejoin='round' stroke-linecap='round' style='vertical-align:-0.15em'><path d='M12 3 L15.5 10 H8.5 Z'/><path d='M10.9 10 V7.9 H13.1 V10'/></svg>",
    accent: "#a88347",
    url: "https://script.google.com/macros/s/AKfycbzKg44_NL6kzqDJByrnoTCnHLVnrvyv4ozO-qIt72rs8Muk2yS1a_lrRIT4IYq54ZNDiQ/exec",
    msgPrefix: "STONE_ESTATE_PWA",
    /* Fermé au lancement — décision de Stan (04/09/2026). */
    enabled: true,
    preview: {
      shot: "/guides/capture-estate.png",
      lead: "Le registre de ce que tu possèdes, poste par poste.",
      points: [
        "Ce que le bien t’a réellement coûté, frais compris",
        "Tes papiers rassemblés, datés, au même endroit",
        "La valeur que tu déclares, avec sa date et son auteur"
      ],
      guide: "/guides/estate.html"
    }
  }
];
