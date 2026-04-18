import type { LucideIcon } from "lucide-react";
import {
  Compass,
  ScanLine,
  MapPinned,
  Languages,
  Footprints,
  Route,
  Trophy,
} from "lucide-react";

export const app = {
  name: "Muras",
  tagline: "Nomad's Path",
  fullName: "Muras: Nomad's Path",
  domain: "muras.app",
} as const;

export const season = {
  code: "chyn-kuran",
  label: "Chyn Kuran",
  month: "April",
  meaning:
    "The traditional month signifying new life and the preparation of kumys.",
  calendar: "Urker (Pleiades)",
} as const;

export const narrative = {
  eyebrow: "Synchronize with the Steppe.",
  headline: "Your Digital Compass to Nomadic Antiquity.",
  subheadline:
    "Discover sacred mazars, decode ancient petroglyphs, and travel according to the stars.",
  primaryCta: "Download App",
  primaryCtaSub: "iOS · Android",
  secondaryCta: "Try Web Demo",
} as const;

export const problem = {
  kicker: "The Pain",
  title: "Lost in translation.",
  body:
    "Traditional maps don't show sacred rules, and guidebooks are outdated. Modern generations are disconnected from their ancestral heritage, and physical open-air museums are facing severe vandalism.",
} as const;

export const solution = {
  kicker: "The Cure",
  title: "Muras adapts to you.",
  body:
    "It uses the traditional Urker (Pleiades) calendar to suggest routes that are ecologically and culturally perfect for the current season. Muras gamifies cultural exploration, turning every smartphone into a personalized, AI-driven digital custodian.",
} as const;

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: "ember" | "gold";
};

export const features: Feature[] = [
  {
    title: "Smart Nomadic Routing",
    description:
      "AI filters paths by transport mode and season so every journey matches the land and the time.",
    icon: Compass,
    accent: "ember",
  },
  {
    title: "AR Petroglyph Scanner",
    description:
      "Decode the Saka Animal Style through your camera. Ancient carvings, revealed in real time.",
    icon: ScanLine,
    accent: "gold",
  },
  {
    title: "Offline Survival Maps",
    description:
      "Zero cell service required. Jailoos, passes, and sacred sites — downloadable and durable.",
    icon: MapPinned,
    accent: "ember",
  },
  {
    title: "Multilingual Lore",
    description:
      "Audio legends narrated in Kyrgyz, Russian, and English by native storytellers.",
    icon: Languages,
    accent: "gold",
  },
];

export type Step = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const steps: Step[] = [
  {
    number: "01",
    title: "Set Your Intent",
    description:
      "Walk, bike, or drive? Two hours or a full day? Muras calibrates to your pace and purpose.",
    icon: Footprints,
  },
  {
    number: "02",
    title: "Follow the Path",
    description:
      "Navigate checkpoint to checkpoint along routes drawn from centuries of nomadic memory.",
    icon: Route,
  },
  {
    number: "03",
    title: "Unlock Heritage",
    description:
      "Answer cultural riddles at the site to earn digital badges and preserve the lore in you.",
    icon: Trophy,
  },
];

export type MapSite = {
  id: string;
  name: string;
  subtitle: string;
  lore: string;
  coords: { x: number; y: number }; // percentage coordinates within map container
  era: string;
  altitude?: string;
};

export const mapSites: MapSite[] = [
  {
    id: "cholpon-ata",
    name: "Cholpon-Ata",
    subtitle: "Father of the Morning Star",
    lore: "Means 'Father of the Morning Star (Venus)'. Famous for Bronze Age solar symbols and Iron Age Saka Animal Style carvings.",
    coords: { x: 62, y: 38 },
    era: "Bronze Age · Iron Age",
    altitude: "1,620 m",
  },
  {
    id: "manjyly-ata",
    name: "Manjyly-Ata",
    subtitle: "Valley of labyrinths",
    lore: "A sacred valley of labyrinths. Contains the Bugu-Ene (Mother Deer) springs, known since antiquity to heal illnesses.",
    coords: { x: 42, y: 58 },
    era: "Pre-Islamic · Tengri tradition",
    altitude: "1,700 m",
  },
  {
    id: "saimaluu-tash",
    name: "Saimaluu-Tash",
    subtitle: "Patterned stones",
    lore: "Located at 3,000 meters. Over 30,000 petroglyphs buried under snow 11 months a year. A globally significant archive of nomadic history.",
    coords: { x: 28, y: 78 },
    era: "Neolithic → Medieval",
    altitude: "3,000 m",
  },
];

export const metrics = [
  {
    value: 30000,
    suffix: "+",
    label: "Petroglyphs Digitized",
    hint: "Across Saimaluu-Tash, Cholpon-Ata, and 40 smaller archives.",
  },
  {
    value: 150,
    suffix: "+",
    label: "Sacred Mazars Mapped",
    hint: "Each annotated with taboos, seasonality, and access ritual.",
  },
  {
    value: 0.5,
    suffix: "s",
    label: "Offline Load Time",
    decimals: 1,
    hint: "From cold start to first route render on mid-range devices.",
  },
] as const;

export const community = {
  main: {
    name: "Muras Telegram Hub",
    body: "Join 5,000+ modern nomads. Share routes, find companions, and get live trail updates.",
    cta: "Join Channel",
    handle: "t.me/muras_path",
  },
  sides: [
    {
      title: "Offline Guides & Etiquette",
      body: "Learn the taboos and rules of visiting a sacred Mazar before you arrive.",
      cta: "Read the rules",
    },
    {
      title: "Crowdsource the Archive",
      body: "Upload photos of damaged heritage to help the Ministry of Culture fight vandalism.",
      cta: "Start contributing",
    },
  ],
} as const;

export const policyAlignment =
  "Developed in alignment with the 2024-2028 Digital Transformation Concept of the Kyrgyz Republic.";

export type CalendarEvent = { day: number; label: string };

export const calendarWidget: {
  monthName: string;
  romanized: string;
  highlight: number;
  events: CalendarEvent[];
} = {
  monthName: "Chyn Kuran",
  romanized: "April",
  highlight: 12,
  events: [
    { day: 3, label: "Nooruz closing" },
    { day: 12, label: "Kumys first pour" },
    { day: 21, label: "Urker sighting" },
  ],
};
