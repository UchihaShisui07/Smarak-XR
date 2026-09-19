import { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HeritageProvider } from './context/HeritageContext';
import { Navbar } from './components/Navbar';
import { MobileBottomNav } from './components/MobileBottomNav';
import { AudioPlayerBar } from './components/AudioPlayerBar';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { PreserveStoryModal } from './components/PreserveStoryModal';
import { VanishingModal } from './components/VanishingModal';
import { ToastNotification } from './components/ToastNotification';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { DiscoverPage } from './pages/DiscoverPage';
import { TimeMachinePage } from './pages/TimeMachinePage';
import { VanishingCulturePage } from './pages/VanishingCulturePage';
import { AdoptHeritagePage } from './pages/AdoptHeritagePage';
import { AIStorytellerPage } from './pages/AIStorytellerPage';
import { StoriesPage } from './pages/StoriesPage';
import { CommunityPage } from './pages/CommunityPage';
import { ProfileDashboardPage } from './pages/ProfileDashboardPage';
import { MonumentsARPage } from './pages/MonumentsARPage';

// Scroll to top component on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

export function App() {
  return (
    <HashRouter>
      <HeritageProvider>
        <ScrollToTop />
        <div className="min-h-screen bg-[#0C0D14] text-[#FBF9F5] flex flex-col selection:bg-[#E5B842] selection:text-[#0C0D14] font-sans antialiased">
          {/* Top Navigation */}
          <Navbar />

          {/* Main Routing Container */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/monuments" element={<MonumentsARPage />} />
              <Route path="/discover" element={<DiscoverPage />} />
              <Route path="/time-machine" element={<TimeMachinePage />} />
              <Route path="/vanishing" element={<VanishingCulturePage />} />
              <Route path="/adopt" element={<AdoptHeritagePage />} />
              <Route path="/ai-storyteller" element={<AIStorytellerPage />} />
              <Route path="/stories" element={<StoriesPage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/profile" element={<ProfileDashboardPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>

          {/* Global Interactive Elements */}
          <AudioPlayerBar />
          <GlobalSearchModal />
          <PreserveStoryModal />
          <VanishingModal />
          <ToastNotification />

          {/* Footer & Mobile Bottom Bar */}
          <Footer />
          <MobileBottomNav />
        </div>
      </HeritageProvider>
    </HashRouter>
  );
}

export default App;
