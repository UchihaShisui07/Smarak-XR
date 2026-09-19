export interface LeaderboardUser {
  rank: number;
  id: string;
  name: string;
  avatar: string;
  location: string;
  level: string;
  points: number;
  adoptedCount: number;
  storiesPreserved: number;
  badge: string;
}

export interface CommunityQuest {
  id: string;
  title: string;
  category: string;
  targetProgress: number;
  currentProgress: number;
  deadline: string;
  rewardBadge: string;
  pointsReward: number;
  description: string;
  participants: number;
}

export const LEADERBOARD_USERS: LeaderboardUser[] = [
  {
    rank: 1,
    id: 'user-amandeep',
    name: 'Amandeep Singh Sandhu',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    location: 'Amritsar, Punjab',
    level: 'Master Chronicler (Lvl 9)',
    points: 3420,
    adoptedCount: 6,
    storiesPreserved: 14,
    badge: 'Ancient Scribe Gold'
  },
  {
    rank: 2,
    id: 'user-meera',
    name: 'Meera Nambiar',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    location: 'Thrissur, Kerala',
    level: 'Heritage Guardian (Lvl 8)',
    points: 2980,
    adoptedCount: 5,
    storiesPreserved: 11,
    badge: 'Temple Bronze Custodian'
  },
  {
    rank: 3,
    id: 'user-arjun',
    name: 'Arjun Shekhawat',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80',
    location: 'Jaipur, Rajasthan',
    level: 'Desert Lorekeeper (Lvl 7)',
    points: 2540,
    adoptedCount: 4,
    storiesPreserved: 9,
    badge: 'Sandstone Sentinel'
  },
  {
    rank: 4,
    id: 'user-devika',
    name: 'Devika Sengupta',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    location: 'Kolkata, Bengal',
    level: 'Delta Archivist (Lvl 6)',
    points: 2110,
    adoptedCount: 4,
    storiesPreserved: 7,
    badge: 'Terracotta Weaver'
  },
  {
    rank: 5,
    id: 'user-sonam',
    name: 'Sonam Wangchuk Tsering',
    avatar: 'https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&w=200&q=80',
    location: 'Leh, Ladakh',
    level: 'Himalayan Steward (Lvl 6)',
    points: 1950,
    adoptedCount: 3,
    storiesPreserved: 6,
    badge: 'Glacial Guardian'
  },
  {
    rank: 6,
    id: 'user-you',
    name: 'You (Culture Guardian)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    location: 'India',
    level: 'Culture Guardian (Lvl 4)',
    points: 420,
    adoptedCount: 2,
    storiesPreserved: 1,
    badge: 'Emerging Preserver'
  }
];

export const COMMUNITY_QUESTS: CommunityQuest[] = [
  {
    id: 'quest-surando',
    title: 'The Great Desert Raga Rescue',
    category: 'Oral Audio & Music',
    targetProgress: 50,
    currentProgress: 38,
    deadline: '7 Days Left',
    rewardBadge: 'Desert Acoustic Pioneer',
    pointsReward: 150,
    description: 'Help crowdsource 50 recorded audio fragments of rare desert and folk string melodies across Kutch and Thar.',
    participants: 412
  },
  {
    id: 'quest-heirloom-recipes',
    title: '100 Grandmothers, 100 Millets',
    category: 'Culinary Traditions',
    targetProgress: 100,
    currentProgress: 76,
    deadline: '12 Days Left',
    rewardBadge: 'Hearth Seed Protector',
    pointsReward: 200,
    description: 'Document 100 authentic family recipes using climate-resilient millets and indigenous regional spices before they are lost.',
    participants: 684
  },
  {
    id: 'quest-toda-motifs',
    title: 'Digitize 30 Toda Geometric Shawl Motifs',
    category: 'Indigenous Crafts',
    targetProgress: 30,
    currentProgress: 24,
    deadline: '4 Days Left',
    rewardBadge: 'Sacred Needle Archivist',
    pointsReward: 120,
    description: 'Map high-resolution stitch patterns and sacred buffalo motifs into the open-source cultural design library.',
    participants: 295
  }
];

export const PLATFORM_STATS = {
  traditionsCataloged: 248,
  endangeredMonitored: 86,
  eldersVoicesRecorded: 1420,
  activeGuardians: 12580,
  hoursOfOralHistory: 640,
  statesCovered: 28
};
