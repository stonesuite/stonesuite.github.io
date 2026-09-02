/* STONE PWA — registre des univers · COQUE BÊTA (amis).
   Ne contient AUCUNE adresse personnelle : Invest pointe sur le Starter
   multi-utilisateur, Money sur son canal multi-utilisateur (chaque personne
   crée et possède son propre classeur) et Estate sur son déploiement dédié.
   Décision Stan 02/09/2026 : la suite publique = Invest, Money, Estate —
   Ledge est retiré de la bêta (usage privé) et Trade abandonné. */
window.STONE_PWA_INSTANCE = "beta";
window.STONE_PWA_UNIVERSES = [
  {
    key: "money",
    label: "Money",
    tagline: "Du revenu au patrimoine",
    /* Base de la pyramide STONE : le revenu, socle large posé sur son assise. */
    glyph: "<svg width='1.15em' height='1.15em' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.6' stroke-linejoin='round' stroke-linecap='round' style='vertical-align:-0.15em'><path d='M4.75 17.5 H19.25 L21 21 H3 Z'/><path d='M6.4 19.3 H17.6'/></svg>",
    accent: "#e0c18a",
    url: "https://script.google.com/macros/s/AKfycbxPNnyqKv1IiSclCvDSQKPYx2ZUEm4guXz-2FXXn_wYWskXN5VA-rCrJ66KkvvIlu34bg/exec",
    msgPrefix: "STONE_MONEY_PWA",
    enabled: true
  },
  {
    key: "invest",
    label: "Invest",
    tagline: "Mon premier portefeuille",
    /* Tranche médiane de la pyramide STONE : les placements, traversés d'une courbe qui monte. */
    glyph: "<svg width='1.15em' height='1.15em' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.6' stroke-linejoin='round' stroke-linecap='round' style='vertical-align:-0.15em'><path d='M7.75 11.5 H16.25 L18.5 16 H5.5 Z'/><path d='M8.8 14.3 L11.3 12.9 L13.1 13.6 L15.4 12.4'/><circle cx='15.4' cy='12.4' r='0.85' fill='currentColor' stroke='none'/></svg>",
    accent: "#c9a567",
    url: "https://script.google.com/macros/s/AKfycbwZ4LbcsS7jHv38XReH0l_l70JOKp6biJr1vskYDJBxvrFfdQ_kHGp_v61reoP-TToEJQ/exec",
    msgPrefix: "STONE_STARTER_PWA",
    enabled: true
  },
  {
    key: "estate",
    label: "Estate",
    tagline: "Immobilier et foncier",
    /* Pointe de la pyramide STONE : le toit, avec sa porte en clef de voûte. */
    glyph: "<svg width='1.15em' height='1.15em' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.6' stroke-linejoin='round' stroke-linecap='round' style='vertical-align:-0.15em'><path d='M12 3 L15.5 10 H8.5 Z'/><path d='M10.9 10 V7.9 H13.1 V10'/></svg>",
    accent: "#a88347",
    url: "https://script.google.com/macros/s/AKfycbzKg44_NL6kzqDJByrnoTCnHLVnrvyv4ozO-qIt72rs8Muk2yS1a_lrRIT4IYq54ZNDiQ/exec",
    msgPrefix: "STONE_ESTATE_PWA",
    enabled: true
  }
];
