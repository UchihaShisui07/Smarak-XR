export interface OralStory {
  id: string;
  artisanName: string;
  title: string;
  role: string;
  location: string;
  region: string;
  heritageName: string;
  avatar: string;
  coverImage: string;
  quote: string;
  audioDuration: string;
  audioTitle: string;
  audioDescription: string;
  fullNarrative: string[];
  keyWisdom: string;
  preservationPledgeCount: number;
  tags: string[];
  datePreserved: string;
}

export const ORAL_STORIES: OralStory[] = [
  {
    id: 'story-abdul-rogan',
    artisanName: 'Abdul Gafur Khatri',
    title: 'The Castor Thread in the Palm',
    role: '8th-Generation Rogan Master & Padma Shri Recipient',
    location: 'Nirona Village, Kutch, Gujarat',
    region: 'West',
    heritageName: 'Nirona Rogan Art',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    quote: 'The paint does not touch the cloth. It dances in the air between my needle and the silk.',
    audioDuration: '2:14',
    audioTitle: 'Master Khatri on the Secret of Boiled Castor',
    audioDescription: 'Hear Abdul Gafur explain how 48 hours of fire converts ordinary castor oil into golden thread.',
    fullNarrative: [
      'For two days and nights, my brother and I sit beside boiling cauldrons in the jungle outside our village. If rain falls or wind turns, the entire pot turns to cinder. Castor oil is wild; you must know its breath.',
      'When it cools into a dark jelly, we crush natural stones into pigments on our left palm. The body heat of my hand warms the paint. Then, using an iron rod with no bristles, I lift a single elastic thread into the air.',
      'Young people ask why we do not use 3D printers. A printer follows coordinates, but a human hand follows prayer. If my sons leave this craft, four centuries of Kutch desert soul will be wiped clean.'
    ],
    keyWisdom: 'True preservation is not putting things under glass museums; it is ensuring the grandson wants to sit beside the grandfather’s loom.',
    preservationPledgeCount: 1420,
    tags: ['Rogan Art', 'Kutch', 'Master Artisan', 'Textile Alchemy'],
    datePreserved: 'Recorded Sept 2025'
  },
  {
    id: 'story-bhagirathi-kumaoni',
    artisanName: 'Bhagirathi Devi',
    title: 'The Iron Pot That Held Winter',
    role: 'Pahadi Seed Keeper & Kitchen Matriarch',
    location: 'Mukteshwar, Uttarakhand',
    region: 'North',
    heritageName: 'Pahadi Jakhiya & Bhatt Heritage',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80',
    quote: 'Our black soybeans do not ask for borewell water. They drink the mist and give you blood like iron.',
    audioDuration: '1:48',
    audioTitle: 'Crackling Jakhiya & Iron Kadhais',
    audioDescription: 'Bhagirathi Devi recites the rhythm of hill mustard oil heating to smoke point.',
    fullNarrative: [
      'My mother gave me this cast iron kadhai when I climbed into Mukteshwar as a sixteen-year-old bride. For sixty years, no soap has touched its face—only hot spring water and wild ash.',
      'When the snow stands five feet outside our wooden door, you roast the black Bhatt in raw mustard oil until it sings like mountain crickets. That sound means warmth has entered the house.',
      'Now my grandchildren order yellow dal in plastic packets from Delhi. They say our black soup looks like mud. But this mud kept four generations alive without hospitals.'
    ],
    keyWisdom: 'Food sovereignty begins in the grandmother’s clay cupboard, not supermarket aisles.',
    preservationPledgeCount: 980,
    tags: ['Slow Food', 'Himalayas', 'Seed Sovereignty', 'Oral Kitchen'],
    datePreserved: 'Recorded Aug 2025'
  },
  {
    id: 'story-osman-surando',
    artisanName: 'Osman Jat',
    title: 'The Lute That Cries Like the Desert Wind',
    role: 'Surando Master & Desert Bard',
    location: 'Banni Grasslands, Great Rann of Kutch',
    region: 'West',
    heritageName: 'Surando Bowed Folk Lute',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80',
    quote: 'When my horsehair bow strokes the copper strings, even the wild gazelles pause at the water hole.',
    audioDuration: '2:35',
    audioTitle: 'Surando Raga Kohyari at Twilight',
    audioDescription: 'Raw acoustic desert string harmonics captured live in the Banni grasslands.',
    fullNarrative: [
      'I carve each Surando from the wood of a Lahirro tree struck by lightning. Such wood carries fire in its heart and sings with an unearthly echo.',
      'Our pastoral ancestors had no compass. When sandstorms swallowed the camel trail at night, the elder played the Surando. Its pitch travels four miles across salt flats; you simply followed the music home.',
      'Today I am eighty-two. There are only three boys in our entire tehsil who can tune the six strings. If they lay down the bow, the desert wind will blow with no one to answer it.'
    ],
    keyWisdom: 'A culture does not die with thunder; it fades in silence when children stop singing the songs of their elders.',
    preservationPledgeCount: 1210,
    tags: ['Surando', 'Desert Music', 'Nomadic Lore', 'Folk Lute'],
    datePreserved: 'Recorded Oct 2025'
  },
  {
    id: 'story-sukumari-toda',
    artisanName: 'Sukumari Toda',
    title: 'Counting Threads in the Nilgiri Mist',
    role: 'Toda Elder & Poothkulli Embroiderer',
    location: 'Muthanad Mund, Ooty, Tamil Nadu',
    region: 'South',
    heritageName: 'Toda Poothkulli Embroidery',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80',
    quote: 'We never draw lines on the cloth with charcoal. Our mothers planted the geometry in our eyes.',
    audioDuration: '1:52',
    audioTitle: 'Hymn to the Sacred Buffalo Herd',
    audioDescription: 'Sukumari sings the ancient Toda chant welcoming the dawn mist over Shola grass.',
    fullNarrative: [
      'In our high mountain munds, the mist never leaves. We wrap ourselves in Poothkulli shawls. Black wool represents our dark sacred buffalos; red wool represents the morning sun; white cotton is the mist.',
      'It takes me two months to finish one shawl. Every single stitch is counted: three threads forward, two threads back. You turn it over, and there is no knot, no loose ends.',
      'Now tourists buy printed shawls made by machines in Ooty market for 500 rupees. They do not know that without the buffalo blessing, the cloth is just cold fabric.'
    ],
    keyWisdom: 'Sacred geometry cannot be printed; it must be woven one heartbeat at a time.',
    preservationPledgeCount: 890,
    tags: ['Toda', 'Nilgiris', 'Indigenous Tribal', 'Embroidery'],
    datePreserved: 'Recorded July 2025'
  },
  {
    id: 'story-tenzing-ladakh',
    artisanName: 'Tenzing Norbu',
    title: 'The Monk Who Freezes Glaciers',
    role: 'Monastic Scholar & Ice Stupa Architect',
    location: 'Phyang Valley, Leh, Ladakh',
    region: 'North',
    heritageName: 'Himalayan Glacial Heritage',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80',
    quote: 'Our ancient Buddhist scriptures treat water as the mind of the mountain. If the glacier cries, the valley starves.',
    audioDuration: '2:05',
    audioTitle: 'Winter Wind & Freezing Fountain Jet',
    audioDescription: 'The crackle of sub-zero ice towers building layer by layer under the Ladakhi night sky.',
    fullNarrative: [
      'When global temperatures rose, our mountain streams began drying up in April when barley seedlings thirst for life. The high glaciers had retreated beyond our reach.',
      'We combined ancient Ladakhi water laws with Sonam Wangchuk’s conical ice stupa design. We freeze winter runoff into towering ice towers 100 feet tall.',
      'In June, when heat strikes, the stupa melts slowly from top to bottom, watering 5,000 newly planted poplar and sea-buckthorn saplings. Ancient stewardship and physics together.'
    ],
    keyWisdom: 'Tradition is not worshipping the ashes; it is preserving the flame to illuminate tomorrow.',
    preservationPledgeCount: 1650,
    tags: ['Ladakh', 'Ice Stupa', 'Eco-Heritage', 'Mountain Wisdom'],
    datePreserved: 'Recorded Nov 2025'
  },
  {
    id: 'story-biren-chhau',
    artisanName: 'Biren Sutradhar',
    title: 'Clay from the Kasai River',
    role: 'Master Chhau Mask Sculptor',
    location: 'Charida Village, Purulia, West Bengal',
    region: 'East',
    heritageName: 'Purulia Chhau Masks',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?auto=format&fit=crop&w=1200&q=80',
    quote: 'When the dancer dons the mask of Mahishasura, he stops being a farmer; he becomes the thunder of the forest.',
    audioDuration: '1:35',
    audioTitle: 'Chiseling the Divine Countenance',
    audioDescription: 'Biren Sutradhar humming an invocation as he polishes the river clay jawline.',
    fullNarrative: [
      'Charida is a village where every lane smells of drying clay and varnish. We take silt from Kasai riverbed, mix it with cowdung and paper mash, and press it into terracotta molds.',
      'A Chhau mask must be light enough for a dancer to do three backflips in the air without sliding, yet fierce enough that a child in the back row feels the roar of the demon king.',
      'Plastic masks have entered the melas. But plastic has no soul. When the dancer sweats inside river clay, the mask breathes with his lung.'
    ],
    keyWisdom: 'The mask does not hide the face; it reveals the ancient spirit living inside.',
    preservationPledgeCount: 760,
    tags: ['Chhau Dance', 'Purulia', 'Folk Theater', 'Clay Sculpture'],
    datePreserved: 'Recorded Dec 2025'
  }
];
