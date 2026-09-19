export type MonumentId =
  | 'taj-mahal'
  | 'konark-sun'
  | 'meenakshi-amman'
  | 'kailasa-ellora'
  | 'hawa-mahal'
  | 'hampi-chariot'
  | 'qutub-minar'
  | 'brihadisvara';

export type CreatureId =
  | 'yali'
  | 'makara'
  | 'airavata'
  | 'garuda'
  | 'nandi'
  | 'sharaba'
  | 'mayura';

export type HistoricalEra = {
  year: string;
  eraName: string;
  description: string;
  reconstructedCondition: string;
  ruler: string;
};

export type ArchitecturalHotspot = {
  id: string;
  title: string;
  description: string;
  position: [number, number, number];
  category: 'dome' | 'sculpture' | 'pillar' | 'acoustics' | 'astronomy';
  fact: string;
};

export type Monument = {
  id: MonumentId;
  name: string;
  hindiName: string;
  location: string;
  state: string;
  region: 'North' | 'South' | 'East' | 'West';
  period: string;
  dynasty: string;
  unesco: boolean;
  builtYear: number;
  featuredCreatures: CreatureId[];
  tagline: string;
  shortDescription: string;
  fullHistory: string;
  architecturalStyle: string;
  modelType: string;
  accentColor: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  hotspots: ArchitecturalHotspot[];
  timeline: HistoricalEra[];
  audioGuide: {
    titleEn: string;
    transcriptEn: string;
    transcriptHi: string;
    durationSeconds: number;
  };
  vrPano: {
    title: string;
    aerialDesc: string;
    sanctumDesc: string;
    courtyardDesc: string;
  };
  visitTips: {
    bestTime: string;
    aartiHours: string;
    photography: string;
    dressCode: string;
  };
};

export type SacredCreature = {
  id: CreatureId;
  name: string;
  sanskritName: string;
  title: string;
  associatedDeity: string;
  symbolism: string;
  anatomy: string;
  primaryMonuments: string[];
  mythology: string;
  carvingLocation: string;
  colorHex: string;
  badgeTitle: string;
};
