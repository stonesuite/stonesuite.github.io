/* STONE PWA — registre des univers · COQUE PERSONNELLE publiée.
   Aucune URL personnelle dans ce fichier public : chaque univers est marqué
   « à configurer » et l'adresse du moteur se renseigne une seule fois dans
   les Réglages de la coque (stockage local de l'appareil uniquement). */
window.STONE_PWA_INSTANCE = "perso";
window.STONE_PWA_UNIVERSES = [
  {
    key: "ledge",
    label: "Ledge",
    tagline: "Marché, faits et sources",
    glyph: "◆",
    accent: "#1fc7a5",
    url: "",
    msgPrefix: "STONE_LEDGE_PWA",
    enabled: true
  },
  {
    key: "invest",
    label: "Invest",
    tagline: "Patrimoine",
    glyph: "◈",
    accent: "#c9a567",
    url: "",
    query: { app: "invest" },
    msgPrefix: "STONE_INVEST_PWA",
    enabled: true
  },
  {
    key: "money",
    label: "Money",
    tagline: "Du revenu au patrimoine",
    glyph: "◇",
    accent: "#e0c18a",
    url: "",
    query: { app: "money" },
    msgPrefix: "STONE_MONEY_PWA",
    enabled: true
  },
  {
    key: "trade",
    label: "Trade",
    tagline: "Préparation des ordres",
    glyph: "◧",
    accent: "#5b8def",
    url: "",
    msgPrefix: "STONE_TRADE_PWA",
    enabled: false
  }
];
