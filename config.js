/* STONE PWA — registre des univers · COQUE BÊTA (amis).
   Ne contient AUCUNE adresse personnelle : Invest pointe sur le Starter
   multi-utilisateur, Money sur son canal multi-utilisateur (chaque personne
   crée et possède son propre classeur) et Estate sur son déploiement dédié.
   Décision Stan 02/09/2026 : la suite publique = Invest, Money, Estate —
   Ledge est retiré de la bêta (usage privé) et Trade abandonné. */
window.STONE_PWA_INSTANCE = "beta";
window.STONE_PWA_UNIVERSES = [
  {
    key: "invest",
    label: "Invest",
    tagline: "Mon premier portefeuille",
    glyph: "◈",
    accent: "#c9a567",
    url: "https://script.google.com/macros/s/AKfycbwZ4LbcsS7jHv38XReH0l_l70JOKp6biJr1vskYDJBxvrFfdQ_kHGp_v61reoP-TToEJQ/exec",
    msgPrefix: "STONE_STARTER_PWA",
    enabled: true
  },
  {
    key: "money",
    label: "Money",
    tagline: "Du revenu au patrimoine",
    glyph: "◇",
    accent: "#e0c18a",
    url: "https://script.google.com/macros/s/AKfycbxPNnyqKv1IiSclCvDSQKPYx2ZUEm4guXz-2FXXn_wYWskXN5VA-rCrJ66KkvvIlu34bg/exec",
    msgPrefix: "STONE_MONEY_PWA",
    enabled: true
  },
  {
    key: "estate",
    label: "Estate",
    tagline: "Immobilier et foncier",
    glyph: "▱",
    accent: "#c9a567",
    url: "https://script.google.com/macros/s/AKfycbzKg44_NL6kzqDJByrnoTCnHLVnrvyv4ozO-qIt72rs8Muk2yS1a_lrRIT4IYq54ZNDiQ/exec",
    msgPrefix: "STONE_ESTATE_PWA",
    enabled: true
  }
];
