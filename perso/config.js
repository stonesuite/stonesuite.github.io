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
    glyph: "<svg width='1.15em' height='1.15em' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.6' stroke-linejoin='round' stroke-linecap='round' style='vertical-align:-0.15em'><path d='M7.75 11.5 H16.25 L18.5 16 H5.5 Z'/><path d='M8.8 14.3 L11.3 12.9 L13.1 13.6 L15.4 12.4'/><circle cx='15.4' cy='12.4' r='0.85' fill='currentColor' stroke='none'/></svg>",
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
    glyph: "<svg width='1.15em' height='1.15em' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.6' stroke-linejoin='round' stroke-linecap='round' style='vertical-align:-0.15em'><path d='M4.75 17.5 H19.25 L21 21 H3 Z'/><path d='M6.4 19.3 H17.6'/></svg>",
    accent: "#e0c18a",
    url: "",
    query: { app: "money" },
    msgPrefix: "STONE_MONEY_PWA",
    enabled: true
  },
  {
    key: "estate",
    label: "Estate",
    tagline: "Immobilier et foncier",
    glyph: "<svg width='1.15em' height='1.15em' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.6' stroke-linejoin='round' stroke-linecap='round' style='vertical-align:-0.15em'><path d='M12 3 L15.5 10 H8.5 Z'/><path d='M10.9 10 V7.9 H13.1 V10'/></svg>",
    accent: "#c9a567",
    url: "",
    msgPrefix: "STONE_ESTATE_PWA",
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
