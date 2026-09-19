export interface AdoptionTask {
  id: string;
  title: string;
  description: string;
  points: number;
  type: 'listen' | 'share' | 'learn' | 'pledge' | 'cook';
}

export interface AdoptableHeritage {
  id: string;
  heritageId: string;
  name: string;
  category: string;
  region: string;
  state: string;
  urgency: 'Critical' | 'High' | 'Medium';
  guardianCount: number;
  targetGuardians: number;
  image: string;
  summary: string;
  threatSummary: string;
  badgeName: string;
  badgeColor: string;
  tasks: AdoptionTask[];
}

export const ADOPTABLE_HERITAGE_LIST: AdoptableHeritage[] = [
  {
    id: 'adopt-rogan-art',
    heritageId: 'rogan-art',
    name: 'Nirona Rogan Painting',
    category: 'Craft',
    region: 'West',
    state: 'Gujarat',
    urgency: 'Critical',
    guardianCount: 842,
    targetGuardians: 1000,
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    summary: 'Master the story of 48-hour boiled castor oil painting with a blunt stylus. Only one family preserves it.',
    threatSummary: 'Only Abdul Gafur Khatri family remains in Nirona village practicing this 300-year-old Persian secret.',
    badgeName: 'Rogan Oil Alchemist',
    badgeColor: '#D4AF37',
    tasks: [
      {
        id: 'rogan-task-1',
        title: 'Listen to the 48-Hour Castor Oil Boil Archival Audio',
        description: 'Understand how castor oil turns into viscous elastic paint on the artisan’s palm.',
        points: 30,
        type: 'listen'
      },
      {
        id: 'rogan-task-2',
        title: 'Share the "Only One Family Left" Micro-Story',
        description: 'Spread awareness on social media to build direct patron demand for verified Nirona workshops.',
        points: 40,
        type: 'share'
      },
      {
        id: 'rogan-task-3',
        title: 'Pledge Artisan Support or Log a Motif Pattern',
        description: 'Commit to supporting authentic GI-tagged Kutch craft cooperatives.',
        points: 50,
        type: 'pledge'
      }
    ]
  },
  {
    id: 'adopt-surando-lute',
    heritageId: 'surando-instrument',
    name: 'Surando String Folk Lute',
    category: 'Music',
    region: 'West',
    state: 'Gujarat & Sindh Border',
    urgency: 'Critical',
    guardianCount: 615,
    targetGuardians: 800,
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80',
    summary: 'Preserve the haunting desert bowed instrument with fewer than four master players alive.',
    threatSummary: 'Modern electronic keyboards and Bollywood playlists are silencing traditional desert bards.',
    badgeName: 'Desert Bard Guardian',
    badgeColor: '#C85A32',
    tasks: [
      {
        id: 'surando-task-1',
        title: 'Listen to Desert Raga Sorath Recording',
        description: 'Immerse in the six-stringed bowed resonance carved from single-log Lahirro wood.',
        points: 30,
        type: 'listen'
      },
      {
        id: 'surando-task-2',
        title: 'Map a Folk Raga to Local Geography',
        description: 'Explore how ancient nomadic pastoralists used music for navigation and storytelling.',
        points: 35,
        type: 'learn'
      },
      {
        id: 'surando-task-3',
        title: 'Sponsor an Apprentice Practice Session',
        description: 'Pledge 15 minutes of sharing folk audio archives with fellow music enthusiasts.',
        points: 50,
        type: 'pledge'
      }
    ]
  },
  {
    id: 'adopt-toda-embroidery',
    heritageId: 'toda-embroidery',
    name: 'Toda Poothkulli Geometric Embroidery',
    category: 'Craft',
    region: 'South',
    state: 'Tamil Nadu (Nilgiris)',
    urgency: 'High',
    guardianCount: 1120,
    targetGuardians: 1500,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80',
    summary: 'Support the indigenous Nilgiris tribal women who count threads with bare eyes without tracing.',
    threatSummary: 'Machine knockoffs sold at Ooty hill stations dilute tribal livelihood and sacred symbolism.',
    badgeName: 'Nilgiri Thread Keeper',
    badgeColor: '#1A3026',
    tasks: [
      {
        id: 'toda-task-1',
        title: 'Learn the Sacred Buffalo Horn Motif Symbolism',
        description: 'Decode the red, black, and white threads that represent the Toda cosmological order.',
        points: 30,
        type: 'learn'
      },
      {
        id: 'toda-task-2',
        title: 'Listen to Sacred Dairy Temple Chants',
        description: 'Experience the vocal resonance recorded inside conical Toda thatch sanctums.',
        points: 35,
        type: 'listen'
      },
      {
        id: 'toda-task-3',
        title: 'Advocate for GI-Tag Authenticity Verification',
        description: 'Share the guide on recognizing hand-embroidered reverse-identical Toda shawls.',
        points: 45,
        type: 'share'
      }
    ]
  },
  {
    id: 'adopt-pahadi-recipe',
    heritageId: 'kumaoni-chulha-recipe',
    name: 'Pahadi Jakhiya & Bhatt ki Churkani',
    category: 'Recipe',
    region: 'North',
    state: 'Uttarakhand',
    urgency: 'High',
    guardianCount: 940,
    targetGuardians: 1200,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80',
    summary: 'Revive climate-resilient Himalayan black soybean slow-cooking in pure cast iron kadhais.',
    threatSummary: 'Commercial fast-cooking lentils are replacing drought-tolerant high-protein mountain crops.',
    badgeName: 'Himalayan Hearth Chef',
    badgeColor: '#D95B30',
    tasks: [
      {
        id: 'recipe-task-1',
        title: 'Listen to Grandmother Bhagirathi’s Spice Tempering Advice',
        description: 'Learn why wild Jakhiya seeds must crackle in cold-pressed mustard oil before browning the flour.',
        points: 30,
        type: 'listen'
      },
      {
        id: 'recipe-task-2',
        title: 'Cook or Document an Indigenous Mountain Lentil Dish',
        description: 'Prepare or document an heirloom pulse recipe from your regional lineage.',
        points: 50,
        type: 'cook'
      },
      {
        id: 'recipe-task-3',
        title: 'Add a Family Kitchen Secret to Heritage Alive Archive',
        description: 'Log an ancestral spice mix or grandmothers remedy into the communal digital vault.',
        points: 45,
        type: 'pledge'
      }
    ]
  },
  {
    id: 'adopt-tangaliya-weaving',
    heritageId: 'tangaliya-weaving',
    name: 'Tangaliya Dana Weaving',
    category: 'Craft',
    region: 'West',
    state: 'Gujarat',
    urgency: 'High',
    guardianCount: 780,
    targetGuardians: 1000,
    image: 'https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?auto=format&fit=crop&w=1200&q=80',
    summary: 'Protect the 700-year-old Dangasiya pit-loom craft where tiny raw wool beads are tied by fingertips.',
    threatSummary: 'Powerloom printed substitutes replicate 2D dots without the tactile 3D relief bead work.',
    badgeName: 'Constellation Weaver',
    badgeColor: '#E5B842',
    tasks: [
      {
        id: 'tangaliya-task-1',
        title: 'Listen to the Pit-Loom Rhythm Audio Sample',
        description: 'Feel the cadence of the wooden shuttle and finger-knotting technique.',
        points: 30,
        type: 'listen'
      },
      {
        id: 'tangaliya-task-2',
        title: 'Learn the 5 Traditional Motif Names',
        description: 'Identify the Mor (peacock), Charmaliya, and Ambo (mango tree) raised bead structures.',
        points: 35,
        type: 'learn'
      },
      {
        id: 'tangaliya-task-3',
        title: 'Pledge Fair Handloom Patronage',
        description: 'Commit to checking for hand-knotted authentic dots when purchasing ethnic stoles.',
        points: 40,
        type: 'pledge'
      }
    ]
  },
  {
    id: 'adopt-badaga-language',
    heritageId: 'badaga-dialect',
    name: 'Badaga Oral Language & Epic Ballads',
    category: 'Language',
    region: 'South',
    state: 'Tamil Nadu',
    urgency: 'Critical',
    guardianCount: 650,
    targetGuardians: 900,
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80',
    summary: 'Preserve an ancient scriptless Dravidian tongue packed with ecological and botanical lore.',
    threatSummary: 'Youth fluency dropping as English and standard regional medium schooling take over.',
    badgeName: 'Oral Epic Custodian',
    badgeColor: '#3A5A40',
    tasks: [
      {
        id: 'badaga-task-1',
        title: 'Listen to Kotagiri Highland Elder Blessing Audio',
        description: 'Hear archaic grammatical structures and pastoral cloud spirit proverbs.',
        points: 30,
        type: 'listen'
      },
      {
        id: 'badaga-task-2',
        title: 'Learn 10 Ecological Badaga Proverbs (Gadde)',
        description: 'Understand ancestral weather forecasting through cloud formations and bird calls.',
        points: 40,
        type: 'learn'
      },
      {
        id: 'badaga-task-3',
        title: 'Pledge to Record an Elder Oral Story',
        description: 'Commit to interviewing a family elder and capturing their native vocabulary.',
        points: 50,
        type: 'pledge'
      }
    ]
  }
];
