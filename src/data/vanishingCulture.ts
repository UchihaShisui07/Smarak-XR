export interface VanishingHeritage {
  id: string;
  name: string;
  nativeScript: string;
  category: 'Craft' | 'Music' | 'Recipe' | 'Language' | 'Dance' | 'Ritual';
  region: string;
  state: string;
  urgency: 'Critical' | 'High' | 'Medium';
  practitionersRemaining: string;
  threatFactor: string;
  preservationEffort: string;
  audioPreview?: {
    title: string;
    duration: string;
    description: string;
  };
  image: string;
  fullStory: string;
  whyItMatters: string;
  howToHelp: string[];
}

export const VANISHING_CULTURE_ITEMS: VanishingHeritage[] = [
  {
    id: 'rogan-art',
    name: 'Nirona Rogan Painting',
    nativeScript: 'રોગન કળા',
    category: 'Craft',
    region: 'West',
    state: 'Gujarat (Kutch)',
    urgency: 'Critical',
    practitionersRemaining: 'Only 1 family (Khatri family) in Nirona',
    threatFactor: 'Labor intensive (boiling castor oil for 48 hrs into viscous gel, painting with a metal stylus with no touch to fabric), lack of youth apprentice interest.',
    preservationEffort: 'National Award-winning master Rizwan Khatri conducts small workshops; digital archives now recording freehand mirror-folding techniques.',
    audioPreview: {
      title: 'Voice of Master Khatri on Castor Oil alchemy',
      duration: '1:45',
      description: 'Master artisan Abdul Gafur Khatri recounts how the castor oil paste stretches into fine thread on the palm.'
    },
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    fullStory: 'Originating from Persia over 300 years ago, Rogan art involves boiling wild castor oil for 48 consecutive hours until it transforms into a thick elastic residue called "rogan". Pigments made from stone minerals are mixed with the gel on the palm of the artisan’s left hand. Using a blunt metal rod or stylus in the right hand, the artisan draws intricate tree of life and peacock motifs on fabric without the metal rod ever touching the cloth! The fabric is then folded in half to produce an exact mirror image.',
    whyItMatters: 'It is the only textile art in the world where paint is worked into elastic geometric filaments suspended in air before landing on silk.',
    howToHelp: [
      'Adopt the Rogan Art challenge in Heritage Alive',
      'Purchase verified authentic stoles directly from the Khatri cooperative',
      'Help digitize traditional Persian-Kutch motifs into high-resolution vector archives'
    ]
  },
  {
    id: 'surando-instrument',
    name: 'Surando String Folk Lute',
    nativeScript: 'सुरंदो सारंगी',
    category: 'Music',
    region: 'West',
    state: 'Gujarat & Sindh Border',
    urgency: 'Critical',
    practitionersRemaining: '<4 living master players',
    threatFactor: 'Replacement by electronic harmoniums and Bollywood pop; peacewood carving skills waning.',
    preservationEffort: 'Folklorists documenting ancient Surando ragas (Kohyari, Sorath) in sound archives.',
    audioPreview: {
      title: 'Melancholic Desert Raga Sorath on Surando',
      duration: '2:10',
      description: 'Recorded by Osman Jat near the Great Rann of Kutch under star-lit skies.'
    },
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80',
    fullStory: 'Carved out of a single piece of dried Lahirro or Babool wood, the Surando is an ancient bowed string instrument with six strings made of gut and copper. Played vertically with a peacock-feathered bow strung with horsehair, its sound captures the vast, haunting winds of the Thar desert. It was traditionally played by the pastoral Jat and Fakirani communities.',
    whyItMatters: 'The resonant chambers mimic the crying wind and wild desert gazelle, carrying oral histories of partition, sufi mysticism, and nomadic survival.',
    howToHelp: [
      'Stream and listen to recorded desert archives',
      'Sponsor apprentice fellowships for pastoralist youth',
      'Share the sound with indie musicians for cultural fusion'
    ]
  },
  {
    id: 'toda-embroidery',
    name: 'Toda Poothkulli Geometric Embroidery',
    nativeScript: 'தோடா பூக்குழி',
    category: 'Craft',
    region: 'South',
    state: 'Tamil Nadu (Nilgiris)',
    urgency: 'High',
    practitionersRemaining: '~200 tribal women',
    threatFactor: 'Shrinking Toda tribal population (~1,400 people total), synthetic shawls flooding hill station markets.',
    preservationEffort: 'GI (Geographical Indication) status awarded; tribal self-help groups curating genuine shawls.',
    audioPreview: {
      title: 'Toda Buffalo Hymn & Chanting',
      duration: '1:30',
      description: 'Chants sung while sitting beside the sacred cone-roofed dairy temple in the Nilgiris mist.'
    },
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80',
    fullStory: 'Created by the indigenous Toda pastoral tribe inhabiting the high Nilgiri plateau, Poothkulli is characterized by bold geometric black and red wool stitching on white unbleached cotton. The designs represent sun, moon, stars, buffalo horns, and mountain flowers. The embroidery appears so clean on the reverse that both sides look finished.',
    whyItMatters: 'It encapsulates the sacred cosmology of the Nilgiri shola forests and sacred Toda sacred water buffalo cult.',
    howToHelp: [
      'Document indigenous motifs into the digital pattern bank',
      'Support fair-trade Nilgiri cooperatives',
      'Raise awareness on GI tag counterfeiting'
    ]
  },
  {
    id: 'kumaoni-chulha-recipe',
    name: 'Pahadi Jakhiya & Bhatt ki Churkani',
    nativeScript: 'भट्ट की चुड़कानी',
    category: 'Recipe',
    region: 'North',
    state: 'Uttarakhand',
    urgency: 'High',
    practitionersRemaining: 'Disappearing outside rural grandparent households',
    threatFactor: 'High out-migration of hill youth; commercial packaged lentils replacing climate-resilient Himalayan black soybeans.',
    preservationEffort: 'Slow food activists logging wild Jakhiya spice temperings and traditional cast iron recipes.',
    audioPreview: {
      title: 'Sizzling Jakhiya Seeds in Pure Mustard Oil',
      duration: '0:55',
      description: 'Grandmother Bhagirathi Devi talks through the precise roasted grain aroma.'
    },
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80',
    fullStory: 'Bhatt ki Churkani is a deeply warming winter stew made by slow-roasting indigenous black soybean (Bhatt) in cold-pressed mustard oil with crackling wild Jakhiya (Cleome viscosa) seeds, browned wheat flour, and mountain herbs. Cooked solely in heavy hand-cast iron kadhais, it extracts natural elemental iron and protein suited for high-altitude sub-zero winters.',
    whyItMatters: 'Indigenous mountain pulses withstand harsh droughts, improve Himalayan terrace soil nitrogen, and hold ancestral culinary biodiversity.',
    howToHelp: [
      'Cook and share ancestral Pahadi recipes with younger family members',
      'Source Jakhiya and black soybeans from mountain farmer federations',
      'Upload your family variations to the Heritage Alive recipe vault'
    ]
  },
  {
    id: 'tangaliya-weaving',
    name: 'Tangaliya Dana Weaving',
    nativeScript: 'ટાંગલિયા વણાટ',
    category: 'Craft',
    region: 'West',
    state: 'Gujarat (Surendranagar)',
    urgency: 'High',
    practitionersRemaining: '~180 weaver households (Dangasiya community)',
    threatFactor: 'Powerlooms mimicking the raised dots; younger generations migrating to industrial towns.',
    preservationEffort: 'GI tag protection and design school collaborations bringing dana patterns to contemporary apparel.',
    audioPreview: {
      title: 'Rhythmic Beat of the Tangaliya Pit-Loom',
      duration: '1:15',
      description: 'The wooden shuttle snaps back and forth while small white dots of wool are knotted by fingertips.'
    },
    image: 'https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?auto=format&fit=crop&w=1200&q=80',
    fullStory: 'Tangaliya is a 700-year-old craft practiced by the Dangasiya community in Gujarat. What makes it unique is the "Dana" technique: artisans twist tiny balls of contrasting raw cotton or wool fiber onto the warp threads with bare fingers during the weaving process, creating raised beads resembling celestial constellations, peacocks, and temple spires on dark handspun cloth.',
    whyItMatters: 'No needle, print, or machine can replicate the tactile three-dimensional raised bead warp knotting done on pit looms.',
    howToHelp: [
      'Participate in virtual artisan loom walk-throughs',
      'Support ethical handloom fashion brands sourcing directly',
      'Log an adoption pledge to preserve traditional loom weaving'
    ]
  },
  {
    id: 'badaga-dialect',
    name: 'Badaga Oral Language & Epic Ballads',
    nativeScript: 'படகா பாஷை',
    category: 'Language',
    region: 'South',
    state: 'Tamil Nadu (Nilgiris)',
    urgency: 'Critical',
    practitionersRemaining: '~130,000 native speakers, oral songs known only to elders',
    threatFactor: 'Absence of official written script; rapid adoption of English and Tamil in educational institutions.',
    preservationEffort: 'Linguists and youth recording grandparent proverbs (Gadde) and funeral dirges (Karunadu).',
    audioPreview: {
      title: 'Badaga Grandmother Blessing & Harvest Riddle',
      duration: '1:40',
      description: 'Recorded in Kotagiri highland village; an oral proverb about sacred tea bushes and cloud spirits.'
    },
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80',
    fullStory: 'Badaga is an ancient Southern Dravidian language spoken in the high valleys of the Nilgiri mountains. Containing archaic grammatical forms related to Old Kannada and Tamil, it has preserved centuries of agricultural wisdom, weather predicting idioms, herbal medicine names, and soul-stirring ballads without having its own dedicated script.',
    whyItMatters: 'When an unwritten language disappears, thousands of years of localized botanical, ecological, and spiritual knowledge dissolve forever.',
    howToHelp: [
      'Record native elder speakers and submit voice clips in Heritage Alive',
      'Help compile phonetic lexicons and folk songs for open digital archives',
      'Create bilingual storybooks for Nilgiri children'
    ]
  },
  {
    id: 'khoria-folk-dance',
    name: 'Khoria Post-Wedding Midnight Dance',
    nativeScript: 'खोरिया लोकनृत्य',
    category: 'Dance',
    region: 'North',
    state: 'Haryana',
    urgency: 'Medium',
    practitionersRemaining: 'Practiced in ~40% of rural villages, fading in peri-urban areas',
    threatFactor: 'Commercial DJ sound systems playing remixed tracks; ritual performance spaces vanishing.',
    preservationEffort: 'Cultural troupes archiving the playful satirical banter and rhythmic dholak patterns.',
    audioPreview: {
      title: 'Spontaneous Midnight Khoria Tappa & Dholak Beats',
      duration: '1:20',
      description: 'Laughter and rhythmic clapping recorded during a village wedding vigil.'
    },
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
    fullStory: 'Khoria is an exclusive midnight performance by village women after the groom and male relatives have left with the wedding procession (baarat). Left alone at the bridegroom’s home, the women perform comedic theater, dance, and satirical songs poking fun at in-laws and societal rules until dawn, acting as an emotional catharsis and communal solidarity ritual.',
    whyItMatters: 'It represents one of the few historically uncensored spaces of female joy, satire, and sisterhood in agrarian society.',
    howToHelp: [
      'Encourage acoustic traditional instruments over loud synthesized speakers',
      'Record oral lyrics and wedding verses from matriarchs',
      'Host cultural showcase evenings in community centers'
    ]
  },
  {
    id: 'chhau-mask-making',
    name: 'Charida Purulia Chhau Mask Craft',
    nativeScript: 'ছৌ মুখোশ निर्माण',
    category: 'Craft',
    region: 'East',
    state: 'West Bengal (Purulia)',
    urgency: 'High',
    practitionersRemaining: '~300 artisan families in Charida village',
    threatFactor: 'Cheap plastic and fiberglass masks flooding dance festivals; rising cost of special river clay and natural pigments.',
    preservationEffort: 'UNESCO intangible cultural heritage recognition has spurred interest, yet young craftsmen need sustainable living wages.',
    audioPreview: {
      title: 'Shaping the River Alluvial Clay Mask',
      duration: '1:10',
      description: 'Artisan Biren Sutradhar hums an invocation to Mahishasuramardini as he applies paper pulp layers.'
    },
    image: 'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?auto=format&fit=crop&w=1200&q=80',
    fullStory: 'In the remote village of Charida in Purulia, entire families shape fierce, theatrical masks of gods, demons, lions, and peacocks for the martial Chhau dance. Using riverbed clay, layers of recycled paper paste, cloth, and fine chisel strokes, the masks are crowned with intricate zari tinsel, feathers, and brightly painted mythological expressions.',
    whyItMatters: 'Every mask is an anatomical marvel balanced for high-flying acrobatics and sword fights while expressing primal human archetypes.',
    howToHelp: [
      'Commission custom art pieces directly from Charida village workshops',
      'Support workshops for tourist and student cultural immersions',
      'Adopt the Chhau craft preservation quest'
    ]
  }
];
