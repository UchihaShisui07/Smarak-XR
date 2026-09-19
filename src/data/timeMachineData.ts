export interface EraDetail {
  year: '1950' | '1980' | '2026' | '2050';
  title: string;
  tagline: string;
  clothing: {
    title: string;
    description: string;
    materials: string;
  };
  architecture: {
    title: string;
    description: string;
    sustainability: string;
  };
  food: {
    title: string;
    description: string;
    stapleDishes: string[];
  };
  musicAndDialect: {
    title: string;
    description: string;
    soundscape: string;
  };
  lifestyle: {
    title: string;
    description: string;
    sustainability?: string;
  };
  visualAtmosphere: {
    colorPalette: string[];
    bannerImage: string;
    soundAtmosphereHint: string;
  };
}

export interface RegionTimeData {
  regionId: string;
  regionName: string;
  state: string;
  nativeTitle: string;
  overview: string;
  eras: Record<'1950' | '1980' | '2026' | '2050', EraDetail>;
}

export const TIME_MACHINE_REGIONS: RegionTimeData[] = [
  {
    regionId: 'punjab',
    regionName: 'Punjab (Majha & Malwa)',
    state: 'Punjab',
    nativeTitle: 'ਪੰਜਾਬ ਦਾ ਵਿਰਸਾ',
    overview: 'From pastoral canal colonies and communal tandoors to modern wheat bowls and futuristic bio-integrated villages.',
    eras: {
      '1950': {
        year: '1950',
        title: 'Post-Independence Pastoral Roots',
        tagline: 'Hand-dyed indigo, spinning charkhas, and open-sky baithaks',
        clothing: {
          title: 'Handspun Khaddar & Silk Pat Phulkari',
          description: 'Loom-woven cotton kurtas, heavy dhotis, and hand-embroidered Phulkari dupattas made with untreated wild silk floss.',
          materials: 'Desi organic khaddar, natural indigo, madder root dyes.'
        },
        architecture: {
          title: 'Mud-plastered Haveli & Kacha Courtyards',
          description: 'Thick straw-clay plastered walls, arched wooden deorhis (entryways), and open central courtyards for communal night sleeping under the stars.',
          sustainability: 'Zero carbon footprint, natural passive cooling with 40-degree temperature insulation.'
        },
        food: {
          title: 'Heritage Chulha & Clay Pot Makki-Sarson',
          description: 'Sarson saag slow-simmered for 8 hours over cow-dung embers with unrefined white butter and coarse hand-milled corn rotis.',
          stapleDishes: ['Hand-churned butter', 'Unrefined Jaggery', 'Sprouted Desi Chana', 'Raw buffalo buttermilk']
        },
        musicAndDialect: {
          title: 'Oral Tappas, Heer-Ranjha & Acoustic Tumbi',
          description: 'Acoustic single-stringed Tumbi and Algoza double-flutes sung during harvest without amplification.',
          soundscape: 'Rhythmic creak of Persian water wheels and women singing Suhag wedding ballads at twilight.'
        },
        lifestyle: {
          title: 'Sanjha Chulha (Community Hearth)',
          description: 'Every household brought dough to a shared neighborhood clay tandoor operated by the village baker woman.'
        },
        visualAtmosphere: {
          colorPalette: ['#8B5A2B', '#E3C16F', '#2E4C33', '#C75D38'],
          bannerImage: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1400&q=80',
          soundAtmosphereHint: 'Acoustic Algoze flute echoing over golden mustard fields.'
        }
      },
      '1980': {
        year: '1980',
        title: 'Cassette Era & Tubewell Revolution',
        tagline: 'Transistor radios, brick verandahs, and folk cassettes in tractor stereos',
        clothing: {
          title: 'Vibrant Terene-Cotton Blends & Synthetic Dupattas',
          description: 'Bright electric yellow and fuchsia kurtas with machine-stitched gota patti edging.',
          materials: 'Cotton-poly blends, mill textiles, synthetic threads.'
        },
        architecture: {
          title: 'Kiln-Fired Red Brick Havelis with Terrazzo Floors',
          description: 'Sturdy exposed brickwork with decorative cement jalis and iron gates featuring peacock cutouts.',
          sustainability: 'Moderate thermal mass, local brick kilns.'
        },
        food: {
          title: 'Pressure Cooker Dal Makhani & Sweet Cream Lassi',
          description: 'Slow-simmered whole urad dal cooked with rich dairy cream, and chilled tall brass glasses of sweetened malai lassi.',
          stapleDishes: ['Dal Makhani', 'Stuffed Amritsari Kulcha', 'Carrot Halwa', 'Lassi Patiala']
        },
        musicAndDialect: {
          title: 'Dholak, Cassette Tapes & Yamla Jatt',
          description: 'Folk singers recorded on magnetic cassettes played at tractor stations and roadside dhabas.',
          soundscape: 'Click of tape players, roaring Massey Ferguson tractors, and high-pitched folk boliyan.'
        },
        lifestyle: {
          title: 'Evening Village Chowk Gatherings',
          description: 'Elders listening to cricket commentary on transistor radios while children played gulli-danda.'
        },
        visualAtmosphere: {
          colorPalette: ['#C8381D', '#F4A261', '#E76F51', '#264653'],
          bannerImage: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1400&q=80',
          soundAtmosphereHint: 'High-energy Dholak beats and analog cassette tape hum.'
        }
      },
      '2026': {
        year: '2026',
        title: 'Present: Endangered Artisans & Digital Hybrid',
        tagline: 'Fast fashion threat, screen culture, and fragile preservation outposts',
        clothing: {
          title: 'Fast-Fashion Screen Prints & Rare Preserved Heirlooms',
          description: 'Mass-produced digital prints on synthetic georgette have largely replaced authentic hand-counted Phulkari.',
          materials: 'Synthetic polyester, digital inks, imported acrylics.'
        },
        architecture: {
          title: 'RCC Concrete Glass Boxes & Sealed HVAC Homes',
          description: 'Monolithic concrete construction requiring heavy air conditioning during 46°C summers.',
          sustainability: 'High energy consumption, loss of natural cross-ventilation.'
        },
        food: {
          title: 'Commercial Restaurant Buffets & Fast Food Penetration',
          description: 'Heavy restaurant-style gravies with palm oil and artificial food coloring, contrasting with elder kitchen recipes.',
          stapleDishes: ['Commercial Butter Chicken', 'Refined Wheat Naan', 'Packaged Snacks', 'Soda Lassi']
        },
        musicAndDialect: {
          title: 'Auto-Tuned Bass Drops & Streaming Algorithms',
          description: 'Global Punjabi hip-hop dominates Spotify charts; traditional raga-based Sufi bards reduced to a few dozen families.',
          soundscape: 'Subwoofer frequencies, urban traffic, notification chimes.'
        },
        lifestyle: {
          title: 'Fragmented Nuclear Screen Time',
          description: 'Youth migration to Canada and urban centers; grandparents holding the memories of oral lore alone.'
        },
        visualAtmosphere: {
          colorPalette: ['#1D2D44', '#748CAB', '#3E5C76', '#0D131A'],
          bannerImage: 'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?auto=format&fit=crop&w=1400&q=80',
          soundAtmosphereHint: 'Auto-tuned synth chords colliding with street traffic.'
        }
      },
      '2050': {
        year: '2050',
        title: 'Future: Speculative AI & Circular Heritage Revival',
        tagline: 'Smart-loomed bioluminescent pat silk, solar passive courtyards, and holographic baithaks',
        clothing: {
          title: 'Smart-Woven Thermal-Adaptive Phulkari',
          description: 'Biodegradable organic lotus silk interwoven with micro-fibers that regulate body temperature and glow subtly with ancestral motifs.',
          materials: 'Carbon-negative lab mycelium silk, cold-pressed plant algae dyes.'
        },
        architecture: {
          title: '3D-Printed Regenerative Earth & Biomimetic Jaali',
          description: 'Locally sourced compressed earthen composites printed in aerodynamic curves inspired by Harappan grain silos, naturally zero-energy cooled.',
          sustainability: '100% circular, solar-generating glass roof tiles, rainwater harvesting aquifers.'
        },
        food: {
          title: 'Precision-Fermented Ancestral Millets & Hydroponic Greens',
          description: 'AI-optimized ancient sorghum, pearl millet, and organic wild purslane recreating the pure nutrient profile of 1850 agrarian Punjab.',
          stapleDishes: ['Bio-fortified Bajra Sourdough', 'Fermented Wild Mustard Puree', 'Probiotic Almond Butter', 'Cold-Pressed Flax Drink']
        },
        musicAndDialect: {
          title: 'Spatial Audio Hologram Ragas & Revitalized Gurmukhi Chants',
          description: 'Archived voices of 1920s Sufi masters synthesized into interactive 3D spatial acoustic chambers where youth sing along in perfect resonance.',
          soundscape: 'Deep resonant wooden tumbi tones resonating through bio-acoustical courtyards.'
        },
        lifestyle: {
          title: 'Neo-Sanjha Chulha: Decentralized Solar Food Commons',
          description: 'Communities cook together using clean geothermal induction hubs while an AI guardian translates grandfather stories into 12 languages.'
        },
        visualAtmosphere: {
          colorPalette: ['#00B4D8', '#90E0EF', '#03045E', '#D4AF37'],
          bannerImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=80',
          soundAtmosphereHint: 'Spatial acoustic Algoza intertwined with ambient crystal resonances.'
        }
      }
    }
  },
  {
    regionId: 'rajasthan',
    regionName: 'Rajasthan (Marwar & Shekhawati)',
    state: 'Rajasthan',
    nativeTitle: 'राजस्थान की धरोहर',
    overview: 'From desert stepwells and indigo block prints to royal frescos and resilient futuristic earthen architecture.',
    eras: {
      '1950': {
        year: '1950',
        title: 'Nomadic Caravans & Sacred Stepwells',
        tagline: 'Naturally dyed Bagru prints, water conservation baolis, and Manganiyar ballads',
        clothing: {
          title: 'Natural Indigo & Dabu Mud-Resist Block Cotton',
          description: 'Heavy 80-kali swirling ghaghras, bandhani turbans denoting clan identity and desert topography.',
          materials: 'Desi organic cotton, madder, turmeric, iron rust mordants.'
        },
        architecture: {
          title: 'Carved Sandstone Havelis & Cool Stepwells (Baolis)',
          description: 'Intricate jharokha balconies creating the Venturi air cooling effect, zero artificial power.',
          sustainability: 'Engineered for extreme desert thermal survival.'
        },
        food: {
          title: 'Desert Survival Sun-Dried Sangri & Bajra Roti',
          description: 'Wild Kair berries and Khejri tree beans simmered with wild cumin and stone-milled bajra roti smothered in camel ghee.',
          stapleDishes: ['Ker Sangri', 'Bajra Rabdi', 'Gatte ki Sabzi', 'Dry Red Chilli Thecha']
        },
        musicAndDialect: {
          title: 'Kamaicha Bowed Lutes & Manganiyar Oral Genealogies',
          description: 'Carved mango-wood Kamaicha with 17 sympathetic strings telling the history of desert kings.',
          soundscape: 'Desert sandstorms whispering through sandstone lattice screens.'
        },
        lifestyle: {
          title: 'Water Worship & Community Well Management',
          description: 'Every drop of monsoon rain channeled into subterranean tankas (household cisterns).'
        },
        visualAtmosphere: {
          colorPalette: ['#E76F51', '#F4A261', '#264653', '#E9C46A'],
          bannerImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1400&q=80',
          soundAtmosphereHint: 'Haunting bow of the Kamaicha lute across desert dunes.'
        }
      },
      '1980': {
        year: '1980',
        title: 'Shekhawati Fresco Splendor & Camel Fairs',
        tagline: 'Vibrant Pushkar gatherings, chemical azo-dyes, and folk tourism origins',
        clothing: {
          title: 'Synthetic Leheriya & Machine Zari Borders',
          description: 'Brilliant peacock blue and saffron tie-dyes, plastic bangles mixed with lac.',
          materials: 'Rayon crepe, machine mill fabric.'
        },
        architecture: {
          title: 'Painted Lime Havelis with Modern Cement Additions',
          description: 'Historic merchant mansions painted with vintage aeroplanes and steam engines.',
          sustainability: 'Transition from lime mortar to Portland cement.'
        },
        food: {
          title: 'Dal Baati Churma in Festive Community Feasts',
          description: 'Hard wheat flour dough balls baked over cowdung embers, dipped in cow ghee with panchmel dal.',
          stapleDishes: ['Dal Baati Churma', 'Mirchi Vada', 'Ghevar with Mawa', 'Kachori with Tamarind']
        },
        musicAndDialect: {
          title: 'Ravanhatta Street Busking & Puppet Ballads (Kathputli)',
          description: 'Bamboo and coconut shell string instruments played for visiting train travelers.',
          soundscape: 'Squeak of puppet reed whistles and camel bells jingling.'
        },
        lifestyle: {
          title: 'Desert Fair Celebrations',
          description: 'Families traveling days by camel cart to trade cattle and exchange news at annual melas.'
        },
        visualAtmosphere: {
          colorPalette: ['#D90429', '#EF233C', '#2B2D42', '#8D99AE'],
          bannerImage: 'https://images.unsplash.com/photo-1609137144822-26f55502a50a?auto=format&fit=crop&w=1400&q=80',
          soundAtmosphereHint: 'Ravanhatta bells and wandering desert balladeer chants.'
        }
      },
      '2026': {
        year: '2026',
        title: 'Present: Fragile Crafts & Groundwater Depletion',
        tagline: 'Screen-printed replicas, fading folk lineages, and climate urgency',
        clothing: {
          title: 'Commercial Digital Rotary Prints',
          description: 'Mass market synthetic prints mimicking Bagru motifs, forcing master block carvers to abandon tools.',
          materials: '100% polyester, toxic chemical dyes.'
        },
        architecture: {
          title: 'Plastered Concrete Commercial Hotels & Desert Sprawl',
          description: 'Urban sprawl eroding historic stepwells, drying up water table.',
          sustainability: 'Deep borewells draining fossil aquifers.'
        },
        food: {
          title: 'Fast Food Chains & High-Fat Reheated Gravies',
          description: 'Commercialized street food and refined flour snacks supplanting traditional climate-adapted millets.',
          stapleDishes: ['Refined Flour Samosa', 'Commercial Thali', 'Carbonated Soft Drinks', 'Packaged Sweets']
        },
        musicAndDialect: {
          title: 'Stage Tourism & Relegated Folk Performances',
          description: 'Master Kamaicha players perform 3-minute clips for tourist resorts with minimal compensation.',
          soundscape: 'Hotel generator thrum, commercial mic feedback.'
        },
        lifestyle: {
          title: 'Rural Depopulation towards Metro Cities',
          description: 'Desert villages facing water stress, younger generations leaving generational crafts.'
        },
        visualAtmosphere: {
          colorPalette: ['#4A4E69', '#22223B', '#9A8C98', '#C9ADA7'],
          bannerImage: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1400&q=80',
          soundAtmosphereHint: 'Distant generator hum and fleeting hotel lobby lute.'
        }
      },
      '2050': {
        year: '2050',
        title: 'Future: Biomimetic Stepwells & Solar Oasis Architecture',
        tagline: 'Desalinated cloud cisterns, algorithmic block weaving, and acoustic heritage reserves',
        clothing: {
          title: 'Algae-Dyed Nano-Cotton with Dynamic UV Reflection',
          description: 'Desert smart-fabrics woven with microscopic reflective minerals that stay 10°C cooler under harsh desert sun.',
          materials: 'Closed-loop organic cotton, desert mineral bio-coatings.'
        },
        architecture: {
          title: 'Geothermal Subterranean Stepwell Residences',
          description: 'Modern stepped residential domes carved into thermal stone, capturing atmospheric dew with condensation meshes.',
          sustainability: '100% net-positive water balance, zero grid reliance.'
        },
        food: {
          title: 'Regenerative Desert Permaculture & Bio-Khejri Cuisine',
          description: 'Revived ancient arid drought crops cultivated through desert dew condensers, creating super-nutrient desert gastronomy.',
          stapleDishes: ['Dew-Cultivated Kair Caviar', 'Ancient Bajra Crackers', 'Wild Desert Melon Nectar', 'Steamed Acacia Pod Souffle']
        },
        musicAndDialect: {
          title: 'Immersion Domes for Acoustic Manganiyar Archives',
          description: 'Interactive geodesic domes recreating the resonant acoustics of 16th-century palaces where youth learn Kamaicha intuitively.',
          soundscape: 'Pure harmonic desert resonances echoing in acoustic stone chambers.'
        },
        lifestyle: {
          title: 'Solar Nomadic Guilds',
          description: 'Guilds of master artisans operating decentralized clean-energy studios powered by desert solar.'
        },
        visualAtmosphere: {
          colorPalette: ['#E0A96D', '#201E1F', '#EEB609', '#0E49B5'],
          bannerImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=80',
          soundAtmosphereHint: 'Harmonic Ravanhatta vibrations merging into ambient desert breezes.'
        }
      }
    }
  },
  {
    regionId: 'kerala',
    regionName: 'Kerala (Malabar & Travancore)',
    state: 'Kerala',
    nativeTitle: 'കേരള സംസ്കാരം',
    overview: 'From sacred grove rituals and spice trade timber architecture to progressive digital preservation.',
    eras: {
      '1950': {
        year: '1950',
        title: 'Sacred Groves & Teakwood Nalukettu',
        tagline: 'Hand-woven Kasavu, Theyyam fire rituals, and spice garden courtyards',
        clothing: {
          title: 'Handloom Kasavu Mundu & Veshti',
          description: 'Pure unbleached ecru cotton accented with real gold-plated zari threads woven on pit looms.',
          materials: 'Balaramapuram handloom organic cotton, pure silver-gold zari.'
        },
        architecture: {
          title: 'Nalukettu Courtyards with Clay Mangalore Tiles',
          description: 'Four-winged timber houses with open inner rain courtyards (Nadumuttam) catching cool monsoon winds.',
          sustainability: 'Breathable wooden slatted walls, naturally insect-resistant teak.'
        },
        food: {
          title: 'Traditional Sadhya on Fresh Plantain Leaves',
          description: '24 satvik vegetarian courses prepared in bronze Uruli pots over coconut husk fires.',
          stapleDishes: ['Avial', 'Olan', 'Red Matta Rice', 'Ada Pradhaman Payasam']
        },
        musicAndDialect: {
          title: 'Panchavadyam Temple Percussion & Sopana Sangeetham',
          description: 'Thundering polyrhythmic ensembles of Timila, Maddalam, Edakka, and bronze Elathalam cymbals.',
          soundscape: 'Roar of monsoon rains on terracotta roof tiles with temple bell chimes.'
        },
        lifestyle: {
          title: 'Kavu (Sacred Forest Groves)',
          description: 'Preserved pockets of ancient rainforest untouched by humans, worshiped as living biological sanctuaries.'
        },
        visualAtmosphere: {
          colorPalette: ['#2D6A4F', '#D8F3DC', '#B7E4C7', '#52B788'],
          bannerImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1400&q=80',
          soundAtmosphereHint: 'Temple conch and torrential monsoon rain on clay tiles.'
        }
      },
      '1980': {
        year: '1980',
        title: 'Gulf Remittance Boom & Kathakali Revival',
        tagline: 'VCR film era, painted concrete porticos, and boat race festivals',
        clothing: {
          title: 'Machine-Loomed Kasavu & Printed Silk Sarees',
          description: 'Polyester zari blends made affordable for all festival celebrations.',
          materials: 'Powerloom cotton and nylon zari.'
        },
        architecture: {
          title: 'Indo-Saracenic Concrete Mansions with Terracotta Slopes',
          description: 'Expansive multi-story residences incorporating ornamental pillars and French stained glass.',
          sustainability: 'Beginning of high concrete utilization.'
        },
        food: {
          title: 'Malabar Spiced Biryani & Banana Fritters (Pazham Pori)',
          description: 'Khaima rice cooked with aromatic green cardamom, cinnamon, and caramelised shallots with hot chai.',
          stapleDishes: ['Thalassery Biryani', 'Pazham Pori', 'Appam with Coconut Stew', 'Fish Moilee']
        },
        musicAndDialect: {
          title: 'Malayalam Golden Age Cinema & Chenda Melam',
          description: 'Melodious orchestral folk cinema tracks and thrilling 100-drummer Chenda performances.',
          soundscape: 'Clatter of tea stalls, radio songs, and boat race oars splashing.'
        },
        lifestyle: {
          title: 'Vallam Kali (Snake Boat Regattas)',
          description: 'Entire villages rowing synchronized 100-foot Chundan Vallams with rhythmic boat songs.'
        },
        visualAtmosphere: {
          colorPalette: ['#1B4332', '#40916C', '#74C69D', '#D8F3DC'],
          bannerImage: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1400&q=80',
          soundAtmosphereHint: 'Rhythmic boat race chanting (Vanchipattu) across backwaters.'
        }
      },
      '2026': {
        year: '2026',
        title: 'Present: Urban Backwaters & Endangered Weaving Pockets',
        tagline: 'Houseboat tourism pressures, youth diaspora, and flood vulnerabilities',
        clothing: {
          title: 'Fast-Fashion Western Wear & Imported Powerloom Dhotis',
          description: 'Handloom weavers in Chendamangalam struggling with fluctuating yarn costs and flood damages.',
          materials: 'Synthetic blends, mill cotton.'
        },
        architecture: {
          title: 'Poured Concrete Slabs with AC-Dominated Interiors',
          description: 'Low water-permeability compounds contributing to flash flooding during monsoon peaks.',
          sustainability: 'Severe heat-island effects in coastal plains.'
        },
        food: {
          title: 'Cafe Culture & Frozen Ready-to-Cook Seafood',
          description: 'Fast food chains alongside specialty seafood restaurants, traditional clay-pot slow cooking reserved for holidays.',
          stapleDishes: ['Frozen Parotta', 'Commercial Stews', 'Cafe Espresso', 'Ready-Mix Dosa']
        },
        musicAndDialect: {
          title: 'Indie Malayalam Rock & Algorithmic Streaming',
          description: 'Fusion folk bands revitalizing traditional instruments alongside digital drum machines.',
          soundscape: 'Highway horns, outboard boat diesel engines, earbuds.'
        },
        lifestyle: {
          title: 'Global Emigration & Elderly Villages',
          description: 'A large segment of youth living in Europe, Canada, and the Gulf, seeking digital reconnection with ancestry.'
        },
        visualAtmosphere: {
          colorPalette: ['#3A5A40', '#588157', '#A3B18A', '#DAD7CD'],
          bannerImage: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1400&q=80',
          soundAtmosphereHint: 'Distant diesel motor and electric indie guitar riffs.'
        }
      },
      '2050': {
        year: '2050',
        title: 'Future: Floating Wetland Sanctuaries & Bioluminescent Kavu',
        tagline: 'Amphibious eco-timber homes, AI Chenda polyrhythmics, and backwater bio-corridors',
        clothing: {
          title: 'Closed-Loop Coconut Coir & Water-Repellent Lotus Silk',
          description: 'Ultra-light textiles woven from agricultural coconut husks and lotus stalks that naturally resist mold and humidity.',
          materials: 'Zero-waste bio-fiber, botanical indigo-turmeric natural prints.'
        },
        architecture: {
          title: 'Amphibious Modular Timber-BAM Architecture',
          description: 'Floating residential platforms that rise dynamically during seasonal high tides without blocking natural water flow.',
          sustainability: 'Negative embodied carbon, restoration of wetland mangroves.'
        },
        food: {
          title: 'Regenerative Mangrove Estuary & Vertical Kavu Crops',
          description: 'Salt-tolerant Pokkali rice cultivated in balance with wild prawns, producing high antioxidant organic sadhyas.',
          stapleDishes: ['Pokkali Heritage Rice', 'Algae Spirulina Payasam', 'Estuary Herb Broth', 'Sun-Fermented Jackfruit']
        },
        musicAndDialect: {
          title: 'Neural Spatial Sopana Singing & Water Flutes',
          description: 'Acoustic sanctums designed to channel the healing frequencies of classical Kerala Sopanam vocals.',
          soundscape: 'Tranquil water lap, resonant Edakka hourglass drum in spatial acoustic harmony.'
        },
        lifestyle: {
          title: 'Eco-Kavu Commons Stewardship',
          description: 'Decentralized autonomous communities managing mangrove ecosystems with real-time bio-sensors.'
        },
        visualAtmosphere: {
          colorPalette: ['#0077B6', '#00B4D8', '#90E0EF', '#52B788'],
          bannerImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1400&q=80',
          soundAtmosphereHint: 'Spatial Edakka drumming harmonizing with gentle backwater waves.'
        }
      }
    }
  },
  {
    regionId: 'ladakh',
    regionName: 'Ladakh & High Himalayas',
    state: 'Ladakh',
    nativeTitle: 'ལ་དྭགས',
    overview: 'From silk route caravan monasteries and wool gonchas to sustainable solar mud architecture.',
    eras: {
      '1950': {
        year: '1950',
        title: 'Silk Route Caravans & Monastic Chants',
        tagline: 'Hand-spun Yak wool, rammed earth monasteries, and butter tea round stoves',
        clothing: {
          title: 'Pure Yak Wool Goncha & Silk Sashes',
          description: 'Heavy sheep and yak wool double-breasted robes tied at the waist with vibrant magenta wool sashes.',
          materials: 'Hand-spun Changthangi sheep wool, natural mineral stone dyes.'
        },
        architecture: {
          title: 'Sun-Dried Rammed Earth & Poplar Beam Stupas',
          description: 'Thick earthen walls retaining afternoon solar radiation through sub-zero Himalayan nights.',
          sustainability: 'Zero carbon, completely biodegradable natural materials.'
        },
        food: {
          title: 'Roasted Barley Tsampa & Churn Butter Tea (Gur-Gur)',
          description: 'Roasted hulless barley kneaded with salty yak butter tea and dried yak cheese (Chhurpi).',
          stapleDishes: ['Tsampa Dough', 'Gur-Gur Cha', 'Skyu Root Stew', 'Wild Himalayan Thyme Broth']
        },
        musicAndDialect: {
          title: 'Daman Drums, Surna Oboes & Monastic Horns',
          description: 'Deep resonant Dungchen long horns echoing through high mountain valleys.',
          soundscape: 'Mountain wind whistling across prayer flags with butter lamp flicker.'
        },
        lifestyle: {
          title: 'High Altitude Polyandry & Glacial Sharing',
          description: 'Strict customary water distribution councils (Churpon) rationing glacial melt streams equitably.'
        },
        visualAtmosphere: {
          colorPalette: ['#B5838D', '#6D6875', '#E5989B', '#FFB4A2'],
          bannerImage: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1400&q=80',
          soundAtmosphereHint: 'Deep Dungchen brass horn echoing across snowy mountain passes.'
        }
      },
      '1980': {
        year: '1980',
        title: 'Opening of the Highway & Border Markets',
        tagline: 'Army convoys, transistor radio broadcasts, and early trekking trails',
        clothing: {
          title: 'Pashmina Wool Shawls & Synthetic Fleece Jackets',
          description: 'Finest nomadic Changpa pashmina woven for trade while modern fleece arrives for harsh winter work.',
          materials: 'Raw cashmere wool, nylon thermal linings.'
        },
        architecture: {
          title: 'Whitewashed Earthen Havelis with Glass Sunrooms',
          description: 'Introduction of south-facing glass windows to capture passive solar heat into living rooms.',
          sustainability: 'High thermal efficiency combined with low-cost local timber.'
        },
        food: {
          title: 'Steamed Tibetan Momos & Thukpa Noodle Soup',
          description: 'Hand-rolled wheat noodles simmered in bone or wild root broths with wild chives and crushed Sichuan pepper.',
          stapleDishes: ['Steamed Momos', 'Vegetable Thukpa', 'Apricot Jam', 'Chhang Barley Beer']
        },
        musicAndDialect: {
          title: 'Ladakhi Folk Love Songs (Gzhas) & Radio Leh',
          description: 'Lyrical folk poetry accompanied by acoustic Kopong lutes broadcast across distant high-altitude outposts.',
          soundscape: 'Gentle twang of Kopong lute strings and monastery spinning wheels.'
        },
        lifestyle: {
          title: 'Losar New Year Celebrations',
          description: 'Villages gathering with flaming juniper torches to banish winter chill and welcome springtime fertility.'
        },
        visualAtmosphere: {
          colorPalette: ['#3D5A80', '#98C1D9', '#E0FBFC', '#EE6C4D'],
          bannerImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80',
          soundAtmosphereHint: 'Rhythmic chanting and prayer wheels revolving in mountain stillness.'
        }
      },
      '2026': {
        year: '2026',
        title: 'Present: Glacial Retreat & Overtourism Shock',
        tagline: 'Plastic mineral water bottles, drying mountain springs, and heroic eco-stewards',
        clothing: {
          title: 'Commercial Synthetic Down Jackets & Tourist Rental Gonchas',
          description: 'Mass market synthetic puffer coats dominating daily life; traditional robes rented for quick tourist selfies.',
          materials: 'Polyester down, imported nylon.'
        },
        architecture: {
          title: 'Concrete Commercial Guesthouses with Diesel Generators',
          description: 'Rapid uninsulated concrete hotels straining seasonal groundwater extraction.',
          sustainability: 'High winter carbon footprint due to kerosene and diesel heating.'
        },
        food: {
          title: 'Instant Packaged Noodles & Packaged Industrial Snacks',
          description: 'Maggi noodles replacing traditional hearty roasted Tsampa at every highway altitude pass.',
          stapleDishes: ['Instant Noodles', 'Bottled Soda', 'Commercial Parathas', 'Processed Dairy Cheese']
        },
        musicAndDialect: {
          title: 'YouTube Pop Covers & Declining Ladakhi Fluency',
          description: 'Urban Ladakhi youth adopting Hindi and English slang; elder folk singers lacking formal platforms.',
          soundscape: 'Tour bus diesel engines, selfie stick chatter, wind flutter.'
        },
        lifestyle: {
          title: 'Ice Stupa Artificial Glacier Innovations',
          description: 'Local youth engineers building freezing ice stupas to store winter water for spring farming.',
          sustainability: 'Grassroots climate resilience taking root.'
        },
        visualAtmosphere: {
          colorPalette: ['#293241', '#3D5A80', '#98C1D9', '#E0FBFC'],
          bannerImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=80',
          soundAtmosphereHint: 'Harsh mountain wind against plastic flags and motor idling.'
        }
      },
      '2050': {
        year: '2050',
        title: 'Future: Solar Ice Domes & AI Stupa Ecosystems',
        tagline: 'Zero-emission solar adobe sanctuaries, Changpa satellite pashmina traceability, and digital oral archives',
        clothing: {
          title: 'Thermal Photovoltaic Pashmina Weaves',
          description: 'Ultra-pure certified organic Changpa cashmere embedded with flexible solar thread that harvests daylight heat.',
          materials: '100% cruelty-free combed cashmere, mineral crystal nanocoatings.'
        },
        architecture: {
          title: 'Aerogel Trombe-Wall Bio-Adobe Architecture',
          description: 'Advanced aerogel glazed earth structures maintaining a steady 22°C year-round without a single drop of fuel.',
          sustainability: '100% solar autonomous, zero external water dependency.'
        },
        food: {
          title: 'Geothermal Solar Greenhouse Tsampa & Micro-Greens',
          description: 'Fresh sub-zero winter vegetables grown in geothermal solar vaults alongside heritage black barley.',
          stapleDishes: ['Bio-Enhanced Tsampa Porridge', 'Sea-Buckthorn Antioxidant Elixir', 'Hydroponic Mountain Herbs', 'Fermented Yak Whey']
        },
        musicAndDialect: {
          title: 'Spatial Chanting Monasteries & Neural Language Banks',
          description: 'High-definition acoustic preservation keeping 1,000-year-old Buddhist philosophical debates alive in immersive VR.',
          soundscape: 'Resonant Tibetan singing bowl harmonics merging into celestial stillness.'
        },
        lifestyle: {
          title: 'High-Altitude Ecological Guardians',
          description: 'Ladakh operates as a global autonomous clean-energy sanctuary where every visitor participates in regenerative glaciology.'
        },
        visualAtmosphere: {
          colorPalette: ['#00F5D4', '#7B2CBF', '#9D4EDD', '#C77DFF'],
          bannerImage: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1400&q=80',
          soundAtmosphereHint: 'Singing bowl crystal harmonics in high altitude pure air.'
        }
      }
    }
  },
  {
    regionId: 'bengal',
    regionName: 'Bengal (Rarh & Sundarbans)',
    state: 'West Bengal',
    nativeTitle: 'বাংলার ঐতিহ্য',
    overview: 'From terracotta temples and Baul mystic folk songs to Jamdani looms and futuristic delta preservation.',
    eras: {
      '1950': {
        year: '1950',
        title: 'Terracotta Shrines & Baul Mysticism',
        tagline: 'Muslin gossamer weaves, Ektara single strings, and clay-pot misti doi',
        clothing: {
          title: 'Fine Handloom Dhakai Jamdani & Baluchari Silk',
          description: 'Intricate supplementary weft floral motifs woven on delicate pure cotton handlooms.',
          materials: 'Fine hand-spun cotton yarn, natural vegetable dye.'
        },
        architecture: {
          title: 'Bishnupur Terracotta & Thatch Chala Roofs',
          description: 'Curved bamboo eaves and burnt brick tiles depicting mythological epics with natural breeze induction.',
          sustainability: 'Zero cement, organic river silt clay.'
        },
        food: {
          title: 'Five Phoron Mustard Hilsa & Clay Pot Misti Doi',
          description: 'Fresh freshwater fish cooked in mustard paste and green chillies, slow-fermented sweetened curd in earthen cups.',
          stapleDishes: ['Shorshe Ilish', 'Shukto Bitter Stew', 'Gobindobhog Rice', 'Kacha Golla']
        },
        musicAndDialect: {
          title: 'Baul Mystic Lalon Ballads & Dotara Strings',
          description: 'Nomadic wandering minstrel songs celebrating universal human love without caste or dogma.',
          soundscape: 'Ektara drone, Ghungroo ankle bells, and river ferry splashes.'
        },
        lifestyle: {
          title: 'Para Adda (Intellectual Street Porch Debates)',
          description: 'Neighborhood thinkers gathering at porch stoops to discuss literature, philosophy, and poetry for hours.'
        },
        visualAtmosphere: {
          colorPalette: ['#9D0208', '#D00000', '#DC2F02', '#E85D04'],
          bannerImage: 'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?auto=format&fit=crop&w=1400&q=80',
          soundAtmosphereHint: 'Ektara plucked rhythm and Baul mystic singing across river waters.'
        }
      },
      '1980': {
        year: '1980',
        title: 'Coffee House Adda & Ray Cinema Renaissance',
        tagline: 'Gramophone vinyl, vintage tramcars, and Durga Puja pandal artistry',
        clothing: {
          title: 'Tant Cotton Sarees & White Kurta Pajama',
          description: 'Crisp starched cotton sarees with wide red borders worn with classic fountain pens in shirt pockets.',
          materials: 'Phulia cotton handloom, starched finish.'
        },
        architecture: {
          title: 'Colonial Verandahs with Green Venetian Blinds',
          description: 'High ceiling brick homes with red oxide polished floors and wrought iron balconies.',
          sustainability: 'Ceiling fans, passive shade from wooden louvers.'
        },
        food: {
          title: 'College Street Kabiraji Cutlet & Kosha Mangsho',
          description: 'Crispy egg-laced cutlets with mustard kashundi and slow-roasted spiced mutton gravy.',
          stapleDishes: ['Kosha Mangsho', 'Mutton Kabiraji', 'Radhaballabhi & Chholar Dal', 'Rosogolla']
        },
        musicAndDialect: {
          title: 'Rabindra Sangeet & College Street Book Stalls',
          description: 'Acoustic harmonium and Esraj melodies sung in every family drawing room.',
          soundscape: 'Ding of Kolkata tram bells, turning of second-hand book pages, and Rabindra Sangeet on vinyl.'
        },
        lifestyle: {
          title: 'Durga Puja Community Pandal Architecture',
          description: 'Artists handcrafting monumental temporary bamboo-and-fabric pavilions celebrating artisan crafts.'
        },
        visualAtmosphere: {
          colorPalette: ['#6A040F', '#9D0208', '#D00000', '#F48C06'],
          bannerImage: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1400&q=80',
          soundAtmosphereHint: 'Tram bell chime and rhythmic Dhak drumming in autumn air.'
        }
      },
      '2026': {
        year: '2026',
        title: 'Present: Sinking Delta Pockets & Powerloom Influx',
        tagline: 'Sundarbans climate refugees, synthetic sarees, and digital art pop',
        clothing: {
          title: 'Synthetic Surat Mill Saree Copies',
          description: 'Machine polyester replicas sold at 1/10th the price of authentic Jamdani, squeezing village weavers.',
          materials: 'Synthetic nylon, digital screen foil.'
        },
        architecture: {
          title: 'Standard Concrete Flats & Glass Shopping Malls',
          description: 'Replacement of historic red-oxide courtyard houses with generic commercial high-rises.',
          sustainability: 'Loss of natural ventilation, high reliance on energy grids.'
        },
        food: {
          title: 'Fast-Food Roll Kiosks & Industrial Sweets',
          description: 'Egg chicken rolls in packaged wrappers, chemical preservatives in mass-produced rosogollas.',
          stapleDishes: ['Street Egg Roll', 'Packaged Rosogolla Can', 'Chilli Chicken Fried Rice', 'Instant Coffee']
        },
        musicAndDialect: {
          title: 'Bilingual Code-Switching & Streaming Hip-Hop',
          description: 'Younger generation mixing English with Bengali; traditional Baul akhras struggling for sustained patron support.',
          soundscape: 'Traffic snarls, honking buses, earphone leaks.'
        },
        lifestyle: {
          title: 'Sundarbans Cyclonic Migration',
          description: 'Artisans from delta islands facing rising sea levels and salinity, migrating to urban construction jobs.'
        },
        visualAtmosphere: {
          colorPalette: ['#370617', '#6A040F', '#9D0208', '#03071E'],
          bannerImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1400&q=80',
          soundAtmosphereHint: 'Kolkata bus horn blast and street market chatter.'
        }
      },
      '2050': {
        year: '2050',
        title: 'Future: Regenerative Delta Biophilic Pavilions',
        tagline: 'Living mangrove root architecture, photonic Jamdani, and holographic poetry archives',
        clothing: {
          title: 'Photonic Solar-Reactive Jamdani Silks',
          description: 'Fabrics woven with microscopic plant cellulose fibers that shift patterns dynamically in response to ambient moonlight.',
          materials: 'Regenerative delta jute-silk composites, biological algae print matrices.'
        },
        architecture: {
          title: 'Living Bio-Root Bridges & Floating Delta Pavilions',
          description: 'Sundarbans settlements engineered with guided mangrove root networks that naturally reinforce tidal surge banks.',
          sustainability: 'Carbon-negative, naturally self-repairing ecosystem dwellings.'
        },
        food: {
          title: 'Saline-Tolerant Heritage Rice & River Aquaculture',
          description: 'Ancient flood-tolerant floating deepwater rice (Bao Dhan) cultivated with automated organic solar trawlers.',
          stapleDishes: ['Bao Dhan Wild Risotto', 'Algae-Infused Sandesh', 'Bio-Spiced Mustard Estuary Greens', 'Lotus Stem Nectar']
        },
        musicAndDialect: {
          title: 'Interactive Spatial Baul Akhras',
          description: 'Holographic interactive sanctuaries where youth connect with archived masters of Sufi and Baul philosophy.',
          soundscape: 'Ektara drone oscillating into spatial acoustic harmony.'
        },
        lifestyle: {
          title: 'Global Digital Adda Guilds',
          description: 'Cross-continental intellectual circles discussing philosophy, art, and climate regeneration in holographic salons.'
        },
        visualAtmosphere: {
          colorPalette: ['#F72585', '#7209B7', '#3A0CA3', '#4361EE'],
          bannerImage: 'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?auto=format&fit=crop&w=1400&q=80',
          soundAtmosphereHint: 'Baul Ektara string vibrating in spatial surround harmony.'
        }
      }
    }
  }
];
