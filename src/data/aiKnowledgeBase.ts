export interface AIPersona {
  id: string;
  name: string;
  role: string;
  avatar: string;
  tone: string;
  intro: string;
  suggestedPrompts: string[];
}

export const AI_PERSONAS: AIPersona[] = [
  {
    id: 'persona-dadi',
    name: 'Dadi Bhagirathi (Grandmother)',
    role: 'Himalayan Hearth Sage & Storyteller',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    tone: 'Warm, maternal, filled with proverbs and culinary secrets',
    intro: 'Aao beta, sit beside my chulha. Let the cedar wood burn slow. Ask me anything about our old recipes, seasonal herbs, or stories of the mountain wind.',
    suggestedPrompts: [
      'Why did our ancestors cook in cast iron with Jakhiya seeds?',
      'Tell me the story of why the Bhatt bean grows black in high snow.',
      'How did families keep cool in 45°C summers without refrigerators?',
      'What bedtime riddle did your mother tell you about the moon?'
    ]
  },
  {
    id: 'persona-artisan',
    name: 'Ustad Abdul Gafur (Master Artisan)',
    role: '8th-Gen Rogan Oil & Loom Alchemist',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    tone: 'Patient, philosophical, master of materials and geometry',
    intro: 'Welcome to my workshop. In my palm, castor oil turns into silk thread. Ask me why handcraft can never be replaced by machine coordinates.',
    suggestedPrompts: [
      'How does Rogan paint stretch in the air without touching the cloth?',
      'Why did weavers count threads with their eyes instead of using rulers?',
      'What minerals in the soil create natural turmeric and indigo colors?',
      'Can artificial intelligence ever recreate the spirit of a handmade Phulkari?'
    ]
  },
  {
    id: 'persona-bard',
    name: 'Osman the Desert Bard',
    role: 'Wandering Minstrel of the Rann',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
    tone: 'Mystic, poetic, rhythmic, speaking in desert allegories',
    intro: 'The salt flats have no trees, yet our songs have branches that touch the heavens. Tune your ear to my Surando lute and ask your question.',
    suggestedPrompts: [
      'How did camel caravans navigate through midnight sandstorms with music?',
      'What is the legend behind the Surando bowed lute?',
      'Why do desert folk songs sound like crying wind?',
      'Recite an ancient ballad of love and thirst in the Thar.'
    ]
  },
  {
    id: 'persona-architect',
    name: 'Shilpi Somnath (Temple Master Architect)',
    role: 'Custodian of Dravidian & Kalinga Sacred Geometry',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    tone: 'Erudite, mathematical, spiritual, grounded in Vastu and acoustic science',
    intro: 'Every stone in our sanctums was chiseled to resonate with the primeval sound Om. Ask me of interlocking stone joints, astronomical alignments, and acoustic marvels.',
    suggestedPrompts: [
      'How did ancient temples withstand earthquakes without cement or iron rebar?',
      'What is the secret behind the musical pillars that sing when struck?',
      'How does the shadow of Thanjavur Brihadisvara’s dome behave at noon?',
      'How did stepwells cool surrounding air by 8 degrees naturally?'
    ]
  }
];

export const MOCK_AI_RESPONSES: Record<string, string> = {
  cast_iron: `Arey beta, listen carefully! When you cook black Bhatt lentils in an unenameled cast-iron kadhai over cow-dung or oak embers, three sacred things happen.

First, the gentle heat extracts microscopic dietary iron and minerals from the iron wall directly into the stew—that is why hill women never had anemia in our youth.
Second, when wild Jakhiya seeds sizzle in cold-pressed mustard oil, they release volatile sulfur compounds that aid high-altitude digestion.
Third, the iron holds onto the spirit of every meal cooked before it. You never wash an heirloom kadhai with harsh detergents; you season it with sesame or mustard oil like a child's skin. Modern non-stick pans with toxic coatings will never know that patience!`,

  rogan_thread: `Ah, my young friend. Many scientists from universities visit my workshop in Nirona and ask this very question.

Wild castor seeds from the Kutch desert are crushed and boiled in sealed cauldrons for 48 non-stop hours. It produces a thick honey-like resin we call rogan.
When we mix it with powdered yellow ocher or cinnabar on our palm, the warmth of the blood in our hand softens the polymer chains.
When I hold the blunt iron stylus, surface tension causes the gel to stretch into a continuous thread finer than human hair. I draw the peacock's feather in the air; gravity drops the filament onto the fabric. Then, we fold the cloth in half and press—creating an exact biological bilateral symmetry, just as nature creates butterfly wings. No digital stylus can recreate the touch of human body heat.`,

  desert_caravans: `Listen to this, traveler of the digital highway:

When the moon is swallowed by dust storms in the Banni flats, your eyes are useless. The camel's ears turn flat against the wind.
The elder caravan leader unlatches the horsehair bow of his Surando. He plays the opening glissando of Raga Kohyari.
Because the Surando's soundbox is carved from dried Lahirro peacewood, its sound wave travels low along the salt crust for nearly three to four miles without dissipating. In the distance, the watchtower of the oasis rings a small bronze bell in exact counter-rhythm.
You do not find your way with a map; you walk toward the echo that greets your music. That was our GPS—the rhythm of trust between sand and song.`,

  earthquakes_temples: `Salutations, seeker of form and void.

Modern skyscrapers fight the earthquake; ancient stone sanctums dance with it.
In temples like the Brihadisvara or Konark, master builders used dry-masonry interlocking granite blocks using mortise and tenon joints, lead dowels, and balanced gravity compression. No wet lime or brittle cement was used between the heavy stones.
When seismic waves shake the earth, the blocks micro-shift independently, dissipating kinetic energy like frictionless ball bearings, and then settle back into plumb under the immense downward gravitational pull of the Shikhara dome!
Furthermore, the foundation rests on layered sandboxes that act as natural seismic dampeners. We did not build for 50 years; we built for cosmic Yugas.`,

  musical_pillars: `The 56 musical pillars in the Vitthala Temple at Hampi are not mere decorative colonnades—they are geological pipe organs!

Our Shilpis tested granite rocks for mineral density. Stones with high iron, silica, and quartz content emit distinct frequencies when struck. The pillars were bored hollow or chiseled with varying diameters.
The central pillar represents the Guru, and the seven encircling slender pillars produce the Sapta Svaras: Sa, Re, Ga, Ma, Pa, Dha, Ni!
Dancers performed with bronze anklets tuned to the exact acoustic pitch of the pillars, creating a closed-loop sonic trance between stone, dancer, and divine architecture.`,

  stepwells_cooling: `Consider the Baolis of Rajasthan and Gujarat—they are inverted subterranean palaces!

As you descend forty steps below the desert surface into the water table, three natural thermodynamic principles activate:
1. Ground Thermal Inertia: The earth maintains a constant subterranean temperature of ~22°C regardless of whether the desert surface is 48°C.
2. Evaporative Draft: Cool air over the cistern water increases in density and sinks, drawing hot dry air down through shaded sandstone jaali lattices.
3. Venturi Funnel: Carved stone corridors compress the moving air, causing rapid cooling.
Travelers rested inside the stepwell pavilions where ambient air was naturally 8 to 10°C cooler than the searing sun outside.`,

  default: `What you ask touches the very memory of our land. For thousands of years, our ancestors did not write their secrets solely on paper or digital chips; they wove them into morning songs, pressed them into the clay of their ovens, and carved them into stones that sing when the wind blows.

When you learn these traditions today in Heritage Alive, you are not merely looking back into history. You are picking up the thread so that fifty years from now, our children will still know who they are.

Tell me, beta: what part of your family's ancestral tradition do you hold most dear?`
};

export function getSimulatedAIResponse(personaId: string, query: string): string {
  const q = query.toLowerCase();
  if (q.includes('iron') || q.includes('jakhiya') || q.includes('chulha') || q.includes('recipe') || q.includes('cook') || q.includes('food')) {
    return MOCK_AI_RESPONSES.cast_iron;
  }
  if (q.includes('rogan') || q.includes('stylus') || q.includes('castor') || q.includes('cloth') || q.includes('loom') || q.includes('weaver')) {
    return MOCK_AI_RESPONSES.rogan_thread;
  }
  if (q.includes('desert') || q.includes('caravan') || q.includes('surando') || q.includes('lute') || q.includes('music') || q.includes('song')) {
    return MOCK_AI_RESPONSES.desert_caravans;
  }
  if (q.includes('earthquake') || q.includes('stone') || q.includes('cement') || q.includes('temple') || q.includes('shikhara')) {
    return MOCK_AI_RESPONSES.earthquakes_temples;
  }
  if (q.includes('pillar') || q.includes('musical') || q.includes('hampi') || q.includes('sound') || q.includes('acoustic')) {
    return MOCK_AI_RESPONSES.musical_pillars;
  }
  if (q.includes('stepwell') || q.includes('baoli') || q.includes('cooling') || q.includes('water')) {
    return MOCK_AI_RESPONSES.stepwells_cooling;
  }

  // Persona personalized fallback
  if (personaId === 'persona-dadi') {
    return `Arey beta, your question warms my heart! In our mountain villages, we always said: "A tree without deep roots falls at the first wind." What you ask connects to how our elders respected the earth and the seasons. Let us make sure your generation preserves this wisdom in your daily life.`;
  }
  if (personaId === 'persona-artisan') {
    return `Every master artisan knows that patience is the true secret of beauty. What you ask requires the heart of a craftsman who sits with raw material until it begins to speak. In Heritage Alive, your pledge keeps this flame alive.`;
  }
  if (personaId === 'persona-bard') {
    return `Ah, the desert has heard many questions, but yours echoes like a lonely flute across the sand dunes. Our songs carry the memory of everything water forgot. Keep listening, for heritage lives as long as someone is willing to sing it.`;
  }
  return MOCK_AI_RESPONSES.default;
}
