/* STONE PWA · registre des univers · COQUE PERSONNELLE publiée.

   Ce fichier est PUBLIC. La regle n'est donc pas « aucune adresse », elle est
   « aucune adresse qui ouvre quelque chose sans authentification ».

   Invest est un deploiement Apps Script qui exige une connexion Google : son
   adresse est deja publique dans les autres coques et ne donne acces a rien
   sans le compte. Elle est donc renseignee ici, et la coque personnelle
   s'ouvre sans reglage.

   Ledge repond SANS authentification. Publier son adresse la rendrait
   accessible a tous : elle reste vide et se renseigne une seule fois dans les
   Reglages, ou elle ne quitte pas l'appareil. Meme regle pour tout moteur futur
   qui ne demanderait pas de connexion. */
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
  /* Invest perso (24/09/2026) : déploiement dédié au conseiller de portefeuille réservé à Stan (@79).
     Préfixe STONE_STARTER_PWA : c'est celui qu'émet l'application ; STONE_INVEST_PWA empêchait Invest de s'ouvrir ici depuis le 06/09. */
  {
    key: "invest",
    label: "Invest",
    tagline: "Patrimoine",
    glyph: "<svg width='1.15em' height='1.15em' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.6' stroke-linejoin='round' stroke-linecap='round' style='vertical-align:-0.15em'><path d='M7.75 11.5 H16.25 L18.5 16 H5.5 Z'/><path d='M8.8 14.3 L11.3 12.9 L13.1 13.6 L15.4 12.4'/><circle cx='15.4' cy='12.4' r='0.85' fill='currentColor' stroke='none'/></svg>",
    accent: "#c9a567",
    url: "https://script.google.com/macros/s/AKfycbx6Ie6opfCUF22DxLVqosl4r7fjUbZFX1Fcl9YBkM4Lfe-gbGrJ3a6I91COIUh2Fvts-w/exec",
    query: { app: "invest" },
    msgPrefix: "STONE_STARTER_PWA",
    enabled: true
  },
  /* Estate et Money retirés de la coque personnelle le 08/11/2026, à la demande de Stan :
     « je n'en ai pas besoin pour le moment ». Ils reviendront en rajoutant leur entrée ici.
     La source des amis (config.beta.js) les garde, mais site-build.mjs ne les publie plus. */
  {
    key: "trade",
    label: "Trade",
    tagline: "Préparation des ordres",
    glyph: "◧",
    accent: "#5b8def",
    /* Salle des gérants (09/11/2026) : projet Apps Script autonome « STONE Trade - Salle »,
       accès « Moi uniquement » (connexion Google exigée), comme Invest perso. */
    url: "https://script.google.com/macros/s/AKfycbwy-NTw8C1fxh7VBUPrFM0fBMhTRNgFAwFFNhxpB8X-h5u_9m_30eJr-wfk_wJdDzzruA/exec",
    msgPrefix: "STONE_TRADE_PWA",
    enabled: true
  }
];
