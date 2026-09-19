export interface HeritageItem {
  id: string;
  name: string;
  hindiName?: string;
  region: 'North' | 'South' | 'East' | 'West' | 'North-East' | 'Central';
  state: string;
  category:
    | 'Heritage Sites'
    | 'Festivals'
    | 'Food'
    | 'Music'
    | 'Dance'
    | 'Art'
    | 'Crafts'
    | 'Languages'
    | 'Traditions';
  status: 'Thriving' | 'Declining' | 'At Risk' | 'Critical';
  image: string;
  description: string;
  significance: string;
  originEra: string;
  practitionersCount?: string;
  audioSample?: string;
  tags: string[];
}

export const HERITAGE_ITEMS: HeritageItem[] = [
  {
    id: 'phulkari-craft',
    name: 'Phulkari Geometric Embroidery',
    hindiName: 'फुलकारी कढ़ाई',
    region: 'North',
    state: 'Punjab',
    category: 'Crafts',
    status: 'At Risk',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80',
    description:
      'Ancient floral and geometric needlework embroidered on handspun khaddar using untwisted silk floss (pat). Traditionally made by mothers for a bride’s dowry.',
    significance:
      'Every stitch is counted by eye without tracing, depicting everyday rural Punjabi life, cosmic constellations, and ancestral blessings.',
    originEra: '15th Century (mentioned in Heer-Ranjha by Waris Shah)',
    practitionersCount: '~350 master artisans remain',
    tags: ['Embroidery', 'Textile', 'Punjab', 'Handloom'],
  },
  {
    id: 'kumaoni-folk-music',
    name: 'Kumaoni Hurkiya Bol & Jhora Folk Music',
    hindiName: 'कुमाऊँनी लोकगीत',
    region: 'North',
    state: 'Uttarakhand',
    category: 'Music',
    status: 'Declining',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80',
    description:
      'Resonant Himalayan ballads sung during terraced paddy cultivation to the rhythmic beat of the hourglass-shaped Hurka drum.',
    significance:
      'Carries oral epics of local warrior kings, seasonal migrations, and prayers to mountain deities (Nanda Devi) without written notation.',
    originEra: 'Early Katyuri Dynasty (8th Century)',
    practitionersCount: '<120 traditional performers',
    tags: ['Folk Music', 'Himalayas', 'Oral Lore', 'Uttarakhand'],
  },
  {
    id: 'millet-culinary',
    name: 'Traditional Millets & Bajra Rabdi Recipes',
    hindiName: 'पारंपरिक बाजरा राबड़ी',
    region: 'West',
    state: 'Rajasthan',
    category: 'Food',
    status: 'At Risk',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80',
    description:
      'Slow-fermented buttermilk and pearl millet porridge cooked in earthen handis under desert sun and cow-dung embers.',
    significance:
      'A climate-resilient culinary science developed over millennia to survive Thar desert droughts while keeping gut microbiomes resilient.',
    originEra: 'Vedic Indus-Saraswati Traditions (circa 2000 BCE)',
    practitionersCount: 'Confined to rural elders in Marwar',
    tags: ['Culinary', 'Millet', 'Rajasthan', 'Nutrition'],
  },
  {
    id: 'rogan-art',
    name: 'Rogan Castor Oil Painting',
    hindiName: 'रोगन कला',
    region: 'West',
    state: 'Gujarat',
    category: 'Art',
    status: 'Critical',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    description:
      'Intricate textile painting using boiled castor oil pigments mixed with natural dyes, manipulated entirely with a 6-inch blunt metal stylus without touching the fabric.',
    significance:
      'Practiced today by just one single family lineage in Nirona village, Kutch. Passed down orally through generations.',
    originEra: 'Over 400 years old (originating in Persia, perfected in Kutch)',
    practitionersCount: 'Only 8 master artisans remain',
    tags: ['Painting', 'Castor Oil', 'Gujarat', 'Rare'],
  },
  {
    id: 'koodiyattam-theatre',
    name: 'Koodiyattam Sanskrit Temple Theatre',
    hindiName: 'कूडियाट्टम नाट्यकला',
    region: 'South',
    state: 'Kerala',
    category: 'Dance',
    status: 'At Risk',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    description:
      'UNESCO-recognized 2,000-year-old Sanskrit dramatic tradition performed in sacred temple Koothambalams with mesmerizing stylized eye movements.',
    significance:
      'India’s oldest living theatrical tradition, strictly following Bharata Muni’s ancient Natya Shastra theatrical treatise.',
    originEra: '2nd Century BCE (Sangam / Chera Kingdom)',
    practitionersCount: '~60 active performers',
    tags: ['Classical Theatre', 'Kerala', 'UNESCO', 'Sanskrit'],
  },
  {
    id: 'toda-embroidery',
    name: 'Toda Poothkuly Red-Black Embroidery',
    hindiName: 'तोड़ा कशीदाकारी',
    region: 'South',
    state: 'Tamil Nadu',
    category: 'Crafts',
    status: 'Critical',
    image: 'https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&w=1200&q=80',
    description:
      'Unique geometric embroidery created by indigenous Toda pastoral women in the high Nilgiri hills using unbleached cotton and buffalo horn needles.',
    significance:
      'Embroidery patterns resemble ancient Celtic geometric bands, representing sacred buffalo horns, solar cycles, and mountain rivers.',
    originEra: 'Over 1,000 years old',
    practitionersCount: '<80 elderly women practitioners',
    tags: ['Tribal', 'Nilgiris', 'Tamil Nadu', 'Endangered'],
  },
  {
    id: 'surando-instrument',
    name: 'Surando Bowed String Instrument',
    hindiName: 'सुरंदो वाद्य यंत्र',
    region: 'West',
    state: 'Gujarat',
    category: 'Music',
    status: 'Critical',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    description:
      'An ancient peacocks-head shaped bowed wooden lute hand-carved from Lahirro wood, producing haunting mystical microtonal sounds.',
    significance:
      'Used by nomadic Maldhari cattle-herders and Sufi wandering minstrels to soothe livestock and sing devotional Kaafi poetry across the salt desert.',
    originEra: '12th Century CE',
    practitionersCount: 'Only 2 elderly makers alive in Kutch',
    tags: ['Musical Instrument', 'Sufi', 'Desert', 'Rare'],
  },
  {
    id: 'chhau-dance',
    name: 'Purulia & Mayurbhanj Chhau Martial Dance',
    hindiName: 'छऊ नृत्य',
    region: 'East',
    state: 'Odisha / West Bengal',
    category: 'Dance',
    status: 'Declining',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80',
    description:
      'Vibrant martial dance enactment of Ramayana and Mahabharata episodes with paper-mache masks, acrobatic leaps, and swordplay.',
    significance:
      'Synthesizes indigenous indigenous war exercises, temple devotion, and folk acrobatics without spoken dialogue.',
    originEra: '14th Century CE',
    practitionersCount: '~400 performers across tribal belts',
    tags: ['Martial Dance', 'Masks', 'Eastern India', 'UNESCO'],
  },
  {
    id: 'tangaliya-weaving',
    name: 'Tangaliya 700-Year Dana Weaving',
    hindiName: 'तंगालिया बुनाई',
    region: 'West',
    state: 'Gujarat',
    category: 'Crafts',
    status: 'At Risk',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80',
    description:
      'Dangasia shepherd weavers twist tiny dots (danas) of raw sheep wool into warp threads with bare fingertips, creating geometric bead-like textures.',
    significance:
      'Zero machinery or computerized loom cards; the weaver counts warp threads by tactile memory learned through childhood apprentice songs.',
    originEra: '14th Century CE (Surendranagar)',
    practitionersCount: '~110 master weavers',
    tags: ['Handloom', 'Wool', 'Gujarat', 'GI Tag'],
  },
  {
    id: 'badaga-dialect',
    name: 'Badaga Dravidian Oral Language',
    hindiName: 'बडगा मौखिक भाषा',
    region: 'South',
    state: 'Tamil Nadu',
    category: 'Languages',
    status: 'Critical',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    description:
      'An unwritten southern Dravidian language spoken by the Badagas of the Nilgiri hills, packed with thousands of botanical names and agricultural proverbs.',
    significance:
      'Has no dedicated script; young generations have migrated to cities and switched to English/Tamil, placing its rich botanical glossary on the brink.',
    originEra: 'Over 800 years of documented oral transmission',
    practitionersCount: 'Shrinking rapidly among youth',
    tags: ['Oral Language', 'Indigenous', 'Nilgiris', 'Linguistics'],
  },
  {
    id: 'dholavira-water',
    name: 'Dholavira Ancient Hydraulic Engineering',
    hindiName: 'धोलावीरा जल संरक्षण',
    region: 'West',
    state: 'Gujarat',
    category: 'Heritage Sites',
    status: 'Thriving',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
    description:
      'Harappan metropolis in the Rann of Kutch engineered with 16 interconnected reservoirs carved directly from living sandstone to harvest storm monsoons.',
    significance:
      'Demonstrates world-class urban rainwater harvesting, sediment filtration tanks, and flood dams over 4,500 years ago.',
    originEra: 'Indus Valley Civilization (2600–1900 BCE)',
    practitionersCount: 'Preserved UNESCO World Heritage site',
    tags: ['Archaeology', 'Hydraulics', 'Harappa', 'UNESCO'],
  },
  {
    id: 'cham-monastic-dance',
    name: 'Cham Sacred Masked Monastic Dance',
    hindiName: 'छाम लामा नृत्य',
    region: 'North',
    state: 'Ladakh / Sikkim',
    category: 'Dance',
    status: 'Declining',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    description:
      'Lamas dressed in elaborate brocade robes and hand-carved wrathful deity masks perform meditative rhythmic movements to long Tibetan horns (Dungchen).',
    significance:
      'A sacred tantric Buddhist practice designed to destroy demonic delusions and impart moral wisdom to mountain villagers during winter monastery festivals.',
    originEra: '8th Century CE (introduced by Guru Padmasambhava)',
    practitionersCount: 'Practiced inside remote Himalayan Gompas',
    tags: ['Buddhism', 'Ladakh', 'Masks', 'Monastery'],
  },
];
