import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { VanishingHeritage } from '../data/vanishingCulture';

export interface UserPreservedItem {
  id: string;
  type: 'story' | 'audio' | 'photo' | 'recipe' | 'video';
  title: string;
  contributor: string;
  location: string;
  heritageCategory: string;
  content: string;
  timestamp: string;
  badgeEarned?: string;
  tags: string[];
}

export interface PointsLog {
  id: string;
  reason: string;
  points: number;
  timestamp: string;
}

interface HeritageContextType {
  // Gamification
  userPoints: number;
  userLevel: string;
  userLevelNumber: number;
  pointsHistory: PointsLog[];
  addPoints: (amount: number, reason: string) => void;

  // Heritage Adoption
  adoptedHeritageIds: string[];
  isHeritageAdopted: (id: string) => boolean;
  toggleAdoptHeritage: (id: string, name: string) => void;
  completedTasks: Record<string, boolean>;
  toggleTaskComplete: (taskId: string, points: number, taskName: string) => void;

  // Preserved Stories
  userPreservedItems: UserPreservedItem[];
  addUserPreservedItem: (item: Omit<UserPreservedItem, 'id' | 'timestamp'>) => void;

  // Audio Simulator
  activeAudio: { title: string; subtitle: string; isPlaying: boolean; duration: string } | null;
  playSimulatedAudio: (title: string, subtitle: string, duration?: string) => void;
  togglePlayPauseAudio: () => void;
  stopAudio: () => void;

  // Global Modals
  isPreserveModalOpen: boolean;
  preserveModalInitialType: 'story' | 'audio' | 'photo' | 'recipe' | 'video';
  openPreserveModal: (type?: 'story' | 'audio' | 'photo' | 'recipe' | 'video') => void;
  closePreserveModal: () => void;

  isSearchModalOpen: boolean;
  openSearchModal: () => void;
  closeSearchModal: () => void;

  selectedVanishingDetail: VanishingHeritage | null;
  openVanishingModal: (item: VanishingHeritage) => void;
  closeVanishingModal: () => void;

  // Language
  language: string;
  setLanguage: (lang: string) => void;

  // Notification Toast
  toastMessage: { text: string; type: 'success' | 'points' | 'info' } | null;
  showToast: (text: string, type?: 'success' | 'points' | 'info') => void;
}

const HeritageContext = createContext<HeritageContextType | undefined>(undefined);

const DEFAULT_PRESERVED_ITEMS: UserPreservedItem[] = [
  {
    id: 'user-seed-1',
    type: 'recipe',
    title: 'Grandmothers Jakhiya Tempered Bhatt Dal',
    contributor: 'You (Culture Guardian)',
    location: 'Nainital, Uttarakhand',
    heritageCategory: 'Culinary Traditions',
    content: 'Documented the slow-roasting of black soybeans in cast iron with wild mountain Jakhiya seeds as passed down by my grandmother.',
    timestamp: '2 days ago',
    badgeEarned: 'Hearth Seed Protector',
    tags: ['Kumaon', 'Cast Iron', 'Slow Food', 'Millets']
  }
];

export const HeritageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // 1. Points & Gamification
  const [userPoints, setUserPoints] = useState<number>(() => {
    const saved = localStorage.getItem('heritage_alive_points');
    return saved ? parseInt(saved, 10) : 420;
  });

  const [pointsHistory, setPointsHistory] = useState<PointsLog[]>(() => {
    const saved = localStorage.getItem('heritage_alive_points_history');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback
      }
    }
    return [
      { id: 'p1', reason: 'Joined Heritage Alive Community', points: 100, timestamp: '3 days ago' },
      { id: 'p2', reason: 'Adopted Nirona Rogan Art Challenge', points: 50, timestamp: '2 days ago' },
      { id: 'p3', reason: 'Listened to Surando Desert Raga', points: 30, timestamp: 'Yesterday' },
      { id: 'p4', reason: 'Logged Family Cast Iron Recipe', points: 100, timestamp: 'Yesterday' },
      { id: 'p5', reason: 'Explored Punjab 1950 Time Machine Era', points: 20, timestamp: 'Today' },
      { id: 'p6', reason: 'Completed Sacred Buffalo Motif Lesson', points: 35, timestamp: 'Today' },
      { id: 'p7', reason: 'Asked Shilpi Somnath about Temple Acoustics', points: 15, timestamp: 'Today' },
      { id: 'p8', reason: 'Daily Culture Guardian Login Bonus', points: 70, timestamp: 'Today' }
    ];
  });

  // 2. Adopted Heritages
  const [adoptedHeritageIds, setAdoptedHeritageIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('heritage_alive_adopted');
    return saved ? JSON.parse(saved) : ['adopt-rogan-art', 'adopt-pahadi-recipe'];
  });

  // 3. Completed Tasks
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('heritage_alive_tasks');
    return saved ? JSON.parse(saved) : { 'rogan-task-1': true, 'recipe-task-1': true };
  });

  // 4. Preserved Items
  const [userPreservedItems, setUserPreservedItems] = useState<UserPreservedItem[]>(() => {
    const saved = localStorage.getItem('heritage_alive_stories');
    return saved ? JSON.parse(saved) : DEFAULT_PRESERVED_ITEMS;
  });

  // 5. Toast
  const [toastMessage, setToastMessage] = useState<{ text: string; type: 'success' | 'points' | 'info' } | null>(null);

  const showToast = (text: string, type: 'success' | 'points' | 'info' = 'info') => {
    setToastMessage({ text, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // 6. Audio Simulator
  const [activeAudio, setActiveAudio] = useState<{
    title: string;
    subtitle: string;
    isPlaying: boolean;
    duration: string;
  } | null>(null);

  const playSimulatedAudio = (title: string, subtitle: string, duration: string = '2:15') => {
    setActiveAudio({ title, subtitle, isPlaying: true, duration });
    showToast(`Now Playing Audio Archive: "${title}"`, 'info');
  };

  const togglePlayPauseAudio = () => {
    if (activeAudio) {
      setActiveAudio(prev => prev ? { ...prev, isPlaying: !prev.isPlaying } : null);
    }
  };

  const stopAudio = () => {
    setActiveAudio(null);
  };

  // 7. Modals
  const [isPreserveModalOpen, setIsPreserveModalOpen] = useState(false);
  const [preserveModalInitialType, setPreserveModalInitialType] = useState<
    'story' | 'audio' | 'photo' | 'recipe' | 'video'
  >('story');

  const openPreserveModal = (type: 'story' | 'audio' | 'photo' | 'recipe' | 'video' = 'story') => {
    setPreserveModalInitialType(type);
    setIsPreserveModalOpen(true);
  };

  const closePreserveModal = () => {
    setIsPreserveModalOpen(false);
  };

  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const openSearchModal = () => setIsSearchModalOpen(true);
  const closeSearchModal = () => setIsSearchModalOpen(false);

  const [selectedVanishingDetail, setSelectedVanishingDetail] = useState<VanishingHeritage | null>(null);
  const openVanishingModal = (item: VanishingHeritage) => setSelectedVanishingDetail(item);
  const closeVanishingModal = () => setSelectedVanishingDetail(null);

  // 8. Language
  const [language, setLanguage] = useState<string>('EN');

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('heritage_alive_points', userPoints.toString());
  }, [userPoints]);

  useEffect(() => {
    localStorage.setItem('heritage_alive_points_history', JSON.stringify(pointsHistory));
  }, [pointsHistory]);

  useEffect(() => {
    localStorage.setItem('heritage_alive_adopted', JSON.stringify(adoptedHeritageIds));
  }, [adoptedHeritageIds]);

  useEffect(() => {
    localStorage.setItem('heritage_alive_tasks', JSON.stringify(completedTasks));
  }, [completedTasks]);

  useEffect(() => {
    localStorage.setItem('heritage_alive_stories', JSON.stringify(userPreservedItems));
  }, [userPreservedItems]);

  // Points handler
  const addPoints = (amount: number, reason: string) => {
    setUserPoints(prev => prev + amount);
    const newEntry: PointsLog = {
      id: 'p-' + Date.now(),
      reason,
      points: amount,
      timestamp: 'Just now'
    };
    setPointsHistory(prev => [newEntry, ...prev]);
    showToast(`+${amount} Heritage Points! (${reason})`, 'points');
  };

  // Level computation
  let userLevel = 'Heritage Scout';
  let userLevelNumber = 1;
  if (userPoints >= 1000) {
    userLevel = 'Master Chronicler';
    userLevelNumber = 6;
  } else if (userPoints >= 600) {
    userLevel = 'Desert & Hill Sentinel';
    userLevelNumber = 5;
  } else if (userPoints >= 400) {
    userLevel = 'Culture Guardian';
    userLevelNumber = 4;
  } else if (userPoints >= 250) {
    userLevel = 'Tradition Custodian';
    userLevelNumber = 3;
  } else if (userPoints >= 100) {
    userLevel = 'Apprentice Archivist';
    userLevelNumber = 2;
  }

  // Adoption handlers
  const isHeritageAdopted = (id: string) => adoptedHeritageIds.includes(id);

  const toggleAdoptHeritage = (id: string, name: string) => {
    if (adoptedHeritageIds.includes(id)) {
      setAdoptedHeritageIds(prev => prev.filter(item => item !== id));
      showToast(`Unsubscribed from ${name} adoption updates.`, 'info');
    } else {
      setAdoptedHeritageIds(prev => [...prev, id]);
      addPoints(50, `Adopted ${name} as a Culture Guardian`);
    }
  };

  const toggleTaskComplete = (taskId: string, points: number, taskName: string) => {
    const isDone = !!completedTasks[taskId];
    if (isDone) {
      setCompletedTasks(prev => {
        const next = { ...prev };
        delete next[taskId];
        return next;
      });
      setUserPoints(prev => Math.max(0, prev - points));
      showToast(`Task marked incomplete (-${points} pts)`, 'info');
    } else {
      setCompletedTasks(prev => ({ ...prev, [taskId]: true }));
      addPoints(points, `Completed task: ${taskName}`);
    }
  };

  // Story submission handler
  const addUserPreservedItem = (item: Omit<UserPreservedItem, 'id' | 'timestamp'>) => {
    const newItem: UserPreservedItem = {
      ...item,
      id: 'preserved-' + Date.now(),
      timestamp: 'Just now'
    };
    setUserPreservedItems(prev => [newItem, ...prev]);
    addPoints(100, `Preserved: "${item.title}"`);
    showToast(`Heritage Card Created! +100 Points Awarded!`, 'success');
  };

  return (
    <HeritageContext.Provider
      value={{
        userPoints,
        userLevel,
        userLevelNumber,
        pointsHistory,
        addPoints,
        adoptedHeritageIds,
        isHeritageAdopted,
        toggleAdoptHeritage,
        completedTasks,
        toggleTaskComplete,
        userPreservedItems,
        addUserPreservedItem,
        activeAudio,
        playSimulatedAudio,
        togglePlayPauseAudio,
        stopAudio,
        isPreserveModalOpen,
        preserveModalInitialType,
        openPreserveModal,
        closePreserveModal,
        isSearchModalOpen,
        openSearchModal,
        closeSearchModal,
        selectedVanishingDetail,
        openVanishingModal,
        closeVanishingModal,
        language,
        setLanguage,
        toastMessage,
        showToast
      }}
    >
      {children}
    </HeritageContext.Provider>
  );
};

export const useHeritage = () => {
  const context = useContext(HeritageContext);
  if (!context) {
    throw new Error('useHeritage must be used within a HeritageProvider');
  }
  return context;
};
