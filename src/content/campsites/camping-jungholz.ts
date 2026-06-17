import type { CampsiteConfig } from "../types";

const IMG = "/campsites/camping-jungholz";

const campingJungholz: CampsiteConfig = {
  name: "Camping Jungholz",
  shortName: "Jungholz",
  slug: "camping-jungholz",
  ort: "Jungholz",
  region: "Tirol",
  brandKind: "Camping",
  regionLong: "Jungholz · Tannheimer Tal · Tirol im Allgäu",

  heroVariant: "center",

  claim: "Ein Stück Tirol im Allgäu — auf 1054 m",
  claimEmphasis: "Tirol im Allgäu",
  emailDetail: "eure Lage als Stück Tirol mitten im Allgäu auf 1054 m",
  intro:
    "Ein kleiner Bergort ohne Durchgangsverkehr auf 1054 m, persönlich geführt von Eva Pilgram und Otto Mayer — mit ebenen Stellplätzen, eigenem Zeltplatz samt Feuerstelle und Wanderwegen, die direkt am Platz beginnen.",

  statement: {
    text: "Urlaub ohne Konventionen, Kleiderordnung und Tagesplan — einfach Tür auf, mitten in der Natur.",
    emphasis: "einfach Tür auf",
  },

  pillars: [
    {
      title: "Persönlich geführt",
      text: "Eva Pilgram und Otto Mayer führen den Platz mit viel Herzlichkeit — hier kennt man sich noch.",
      image: { src: `${IMG}/gastgeber.webp`, alt: "Eva Pilgram und Otto Mayer, die Gastgeber von Camping Jungholz" },
    },
    {
      title: "Wandern ab der Tür",
      text: "Die örtlichen Wanderwege starten direkt am Platz — vom Spaziergang bis zur Tour auf den Sorgschrofen.",
      image: { src: `${IMG}/wandern-hoehenweg.webp`, alt: "Wanderin auf einem Bergweg über dem Tannheimer Tal bei Jungholz" },
    },
    {
      title: "1. Alpenkräuterdorf",
      text: "Jungholz ist das 1. Allgäuer Alpenkräuterdorf Tirols — mit Kräuterwanderungen und eigenem Kräutergarten.",
      image: { src: `${IMG}/kraeuterwiese.webp`, alt: "Blühende Alpenkräuterwiese mit Berg im Hintergrund bei Jungholz" },
    },
  ],

  usps: [
    "140 Stellplätze mit Strom",
    "Zeltplatz mit Feuerstelle",
    "Brötchenservice",
    "Kostenloses WLAN",
    "Hunde willkommen",
    "Persönlich geführt",
  ],

  trust: {
    heading: "Warum Jungholz anders ist",
    headingEmphasis: "anders",
    intro:
      "Ein Gemeindegebiet von nur sieben Quadratkilometern, rund 300 Einwohner, kein Durchgangsverkehr — und ein Platz, den Eva und Otto seit Jahren mit viel Herzlichkeit führen.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/hero-panorama.webp`, alt: "Blick über das grüne Tal von Jungholz mit den umliegenden Bergen" },
  },

  breather: {
    image: { src: `${IMG}/breather-tor.webp`, alt: "Holztor am Höhenweg mit Blick auf die Berge bei Jungholz" },
    line: "Mitten in der Bergwelt zwischen Allgäu und Tannheimer Tal.",
  },

  camping: {
    heading: "Camping in Jungholz",
    intro:
      "140 ebene Stellplätze mit Strom, beheizte Sanitäranlagen ohne Münzautomaten und ein eigener Zeltplatz mit Feuerstelle — alles persönlich gepflegt.",
    features: [
      {
        title: "Stellplätze mit Strom",
        text: "140 ebene Plätze mit Stromversorgung und meist eigenem Grauwasseranschluss — für Wohnwagen und Wohnmobil.",
        image: { src: `${IMG}/stellplatz-wohnwagen.webp`, alt: "Wohnwagen auf einem Stellplatz von Camping Jungholz" },
      },
      {
        title: "Ruhig gelegen",
        text: "Jungholz hat keinen Durchgangsverkehr — bei uns hörst du abends vor allem die Stille und die Berge ringsum.",
        image: { src: `${IMG}/platz-lage.webp`, alt: "Moderne Wohnwagen auf dem grünen Sommercampingplatz von Camping Jungholz mit Bergwald im Hintergrund" },
      },
      {
        title: "Kunst & Camping",
        text: "Über den Platz verteilt triffst du auf Skulpturen — bei uns gehören Kunst und Camping einfach zusammen.",
        image: { src: `${IMG}/kunst-camping.webp`, alt: "Skulptur auf dem Gelände von Camping Jungholz" },
      },
      {
        title: "Kleine Partyhütte",
        text: "Für gesellige Abende gibt es eine kleine Hütte — drinnen wird es bei jedem Wetter heimelig und gemütlich.",
        image: { src: `${IMG}/huette-stube.webp`, alt: "Gemütliche holzvertäfelte Stube mit Sitzbank in Jungholz" },
      },
      {
        title: "Herzlich willkommen",
        text: "Ein herzliches Griaß di, Brötchen vom heimischen Bäcker und freies WLAN — Allgäuer Gastlichkeit eben.",
        image: { src: `${IMG}/willkommen-griassdi.webp`, alt: "Verwittertes Griaß-di-Schild am Eingang von Camping Jungholz" },
      },
      {
        title: "Mitten im Grünen",
        text: "Von oben siehst du es: der Platz liegt eingebettet in Wiesen und Wald am Ortsrand von Jungholz.",
        image: { src: `${IMG}/platz-luft.webp`, alt: "Luftaufnahme von Camping Jungholz inmitten von Wiesen und Wald" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Rund um Jungholz",
    intro:
      "Wandern, biken, baden oder einkehren — Jungholz und das Tannheimer Tal liegen direkt vor dem Vorzelt.",
    items: [
      {
        title: "Wandern & Spazieren",
        text: "Ob gemütlicher Panorama-Höhenweg oder Gipfeltour — rund um Jungholz ist für jede Kondition etwas dabei.",
        image: { src: `${IMG}/wanderweg-wald.webp`, alt: "Wanderer auf einem Waldpfad zwischen Fichten mit Blick auf eine helle Bergwiese bei Jungholz" },
      },
      {
        title: "Berggipfel",
        text: "Reuterwanne, Wertacher Hörnle oder der Hausberg Sorgschrofen auf 1638 m belohnen mit weiter Aussicht.",
        image: { src: `${IMG}/gipfelkreuz.webp`, alt: "Gipfelkreuz mit Aussicht über das Allgäu bei Jungholz" },
      },
      {
        title: "Seen & Baden",
        text: "Das beheizte Felsenbad ist schnell erreicht, und die vielen Seen der Gegend laden zum Schwimmen ein.",
        image: { src: `${IMG}/bergsee.webp`, alt: "Bergsee in der Umgebung von Jungholz im Tannheimer Tal" },
      },
      {
        title: "Kräuterwanderungen",
        text: "Als Alpenkräuterdorf bietet Jungholz Kräuterwanderungen, einen Kräutergarten und einen Kräutermarkt.",
        image: { src: `${IMG}/enzian.webp`, alt: "Blauer Enzian auf einer Bergwiese bei Jungholz" },
      },
      {
        title: "Almen & Einkehr",
        text: "Viele Almen rundum sind bewirtschaftet — perfekt für eine zünftige Brotzeit unterwegs am Berg.",
        image: { src: `${IMG}/almvieh.webp`, alt: "Junge Allgäuer Kälber auf einer Alm bei Jungholz" },
      },
      {
        title: "Ausflüge",
        text: "Königsschlösser, Highline 179, Breitachklamm oder Baumwipfelpfad — Ausflugsziele gibt es reichlich.",
        image: { src: `${IMG}/baumwipfelpfad.webp`, alt: "Baumwipfelpfad in der Ausflugsregion rund um Jungholz" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg nach Jungholz",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Von Norden auf der A7 Richtung Füssen bis Ausfahrt Oy-Mittelberg, dann über die Deutsche Alpenstraße Richtung Wertach/Oberjoch — nach rund 11 km links nach Jungholz.",
      },
      {
        title: "Mit der Bahn",
        text: "Bahnhöfe gibt es im Allgäu, etwa in Pfronten oder Nesselwang; die letzten Kilometer nach Jungholz mit Bus oder Taxi.",
      },
      {
        title: "An- & Abreise",
        text: "Anreise in der Regel ab 14 Uhr, Abreise bis 11 Uhr — frühere Anreise oder spätere Abreise gegen halbe Gebühr auf Anfrage.",
      },
    ],
  },

  galerie: {
    heading: "Impressionen aus Jungholz",
    headingEmphasis: "Jungholz",
    intro:
      "Berge, Kräuterwiesen und stille Plätze — ein paar Eindrücke rund um den Platz und sein Tal.",
    tag: "Tirol im Allgäu",
    moreCount: 24,
    images: [
      { src: `${IMG}/aussichtsbank.webp`, alt: "Schattige Bank unter einem Baum mit Blick über das Tal bei Jungholz" },
      { src: `${IMG}/schmetterling-wiese.webp`, alt: "Schmetterling auf einer blühenden Bergwiese bei Jungholz" },
      { src: `${IMG}/jungholz-art-o.webp`, alt: "Skulptur am Buchstabenweg jungholz art über dem Dorf" },
      { src: `${IMG}/baum-wiese.webp`, alt: "Einzelner Baum auf grüner Bergwiese mit Gipfelblick bei Jungholz" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz in Jungholz",
    headingEmphasis: "in Jungholz",
    intro:
      "Wähle Zeitraum und Personen — Eva und Otto melden sich persönlich mit deiner Verfügbarkeit zurück.",
    pricesArePlaceholder: false,
    priceNote:
      "Richtpreise Sommer 2026 für 2 Personen · Stellplatz/Zelt zzgl. Strom (€ 1,70 einmalig + € 0,95/kWh) und Kurtaxe € 3,50 pro Person · Doppelzimmer inkl. Nebenkosten, zzgl. Kurtaxe · bitte bestätigen.",
    highlight: {
      title: "Königlich campen",
      text: "Ab sechs Nächten als Königscard-Stellplatz buchbar — die regionale All-inclusive-Card.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz (Wohnwagen/Wohnmobil)", perNight: 23, perExtraGuest: 7.5 },
      { id: "zelt", label: "Zeltplatz", perNight: 21, perExtraGuest: 7.5 },
      { id: "doppelzimmer", label: "Doppelzimmer", perNight: 50 },
    ],
  },

  kontakt: {
    coords: { lat: 47.57638, lng: 10.432557 },
    tel: "+43 5676 8182",
    telHref: "tel:+4356768182",
    mail: "info@camping-jungholz.at",
    adresse: "Jungholz 103 · 6691 Jungholz · Österreich",
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Zeltplatz", href: "#camping" },
      ],
    },
    { label: "Aktiv", href: "#aktivitaeten" },
    { label: "Galerie", href: "#galerie" },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
  ],
};

export default campingJungholz;
