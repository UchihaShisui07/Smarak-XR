import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import type { Monument } from '../types';
import { X, Compass, Volume2, VolumeX, Eye, ArrowUpRight, Sparkles, Smartphone } from 'lucide-react';
import { soundEngine } from '../services/soundEngine';
import { voiceGuide } from '../services/voiceGuide';
import { triggerHaptic } from '../utils/haptics';

interface Props {
  monument: Monument;
  onClose: () => void;
}

type VRPanoView = 'aerial' | 'sanctum' | 'courtyard';

export const VR360Tour: React.FC<Props> = ({ monument, onClose }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [currentView, setCurrentView] = useState<VRPanoView>('aerial');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [gyroActive, setGyroActive] = useState(false);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sphereRef = useRef<THREE.Mesh | null>(null);
  const cameraTarget = useRef(new THREE.Vector3(0, 0, 0));

  // Look-around angles
  const lon = useRef(0);
  const lat = useRef(0);
  const isUserInteracting = useRef(false);
  const onPointerDownPointerX = useRef(0);
  const onPointerDownPointerY = useRef(0);
  const onPointerDownLon = useRef(0);
  const onPointerDownLat = useRef(0);

  // Generate procedural high-resolution 360 photosphere texture for each viewpoint
  const createPhotosphereTexture = (view: VRPanoView): THREE.CanvasTexture => {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d')!;

    // Horizon gradient based on view
    const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    if (view === 'aerial') {
      grad.addColorStop(0, '#0a0d24');
      grad.addColorStop(0.35, '#2e1065');
      grad.addColorStop(0.5, '#ea580c');
      grad.addColorStop(0.55, '#f59e0b');
      grad.addColorStop(0.6, '#1e293b');
      grad.addColorStop(1, '#020617');
    } else if (view === 'sanctum') {
      grad.addColorStop(0, '#1c1917');
      grad.addColorStop(0.4, '#451a03');
      grad.addColorStop(0.5, '#b45309');
      grad.addColorStop(0.6, '#292524');
      grad.addColorStop(1, '#0c0a09');
    } else {
      // Courtyard
      grad.addColorStop(0, '#0f172a');
      grad.addColorStop(0.4, '#1e3a8a');
      grad.addColorStop(0.5, '#f97316');
      grad.addColorStop(0.53, '#fde047');
      grad.addColorStop(0.58, '#334155');
      grad.addColorStop(1, '#0f172a');
    }
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Render stars and sacred geometry in the sky
    ctx.fillStyle = '#ffffff';
    for (let i = 0; i < 400; i++) {
      const sx = Math.random() * canvas.width;
      const sy = Math.random() * (canvas.height * 0.45);
      const r = Math.random() * 2.2;
      ctx.beginPath();
      ctx.arc(sx, sy, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Render monument silhouettes & mandala patterns along the 360 horizon
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.35)';
    ctx.lineWidth = 2;
    for (let x = 0; x < canvas.width; x += 180) {
      // Draw temple shikhara or dome silhouette on horizon
      const baseY = canvas.height * 0.52;
      ctx.beginPath();
      ctx.moveTo(x - 60, baseY);
      ctx.lineTo(x, baseY - 120);
      ctx.lineTo(x + 60, baseY);
      ctx.fillStyle = 'rgba(15, 10, 25, 0.85)';
      ctx.fill();
      ctx.stroke();

      // Kalasha finial
      ctx.beginPath();
      ctx.arc(x, baseY - 130, 8, 0, Math.PI * 2);
      ctx.fillStyle = '#ffd700';
      ctx.fill();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.mapping = THREE.EquirectangularReflectionMapping;
    return texture;
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1100);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 360 Inverted Photosphere Mesh
    const sphereGeo = new THREE.SphereGeometry(500, 60, 40);
    sphereGeo.scale(-1, 1, 1); // Invert faces inward

    const texture = createPhotosphereTexture(currentView);
    const sphereMat = new THREE.MeshBasicMaterial({ map: texture });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    scene.add(sphere);
    sphereRef.current = sphere;

    // Animation Loop
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (!isUserInteracting.current && !gyroActive) {
        lon.current += 0.04; // Gentle drift
      }

      lat.current = Math.max(-85, Math.min(85, lat.current));
      const phi = THREE.MathUtils.degToRad(90 - lat.current);
      const theta = THREE.MathUtils.degToRad(lon.current);

      cameraTarget.current.x = 500 * Math.sin(phi) * Math.cos(theta);
      cameraTarget.current.y = 500 * Math.cos(phi);
      cameraTarget.current.z = 500 * Math.sin(phi) * Math.sin(theta);

      camera.lookAt(cameraTarget.current);
      renderer.render(scene, camera);
    };

    animate();

    // Mouse / Touch Look Controls
    const onPointerDown = (clientX: number, clientY: number) => {
      isUserInteracting.current = true;
      onPointerDownPointerX.current = clientX;
      onPointerDownPointerY.current = clientY;
      onPointerDownLon.current = lon.current;
      onPointerDownLat.current = lat.current;
    };

    const onPointerMove = (clientX: number, clientY: number) => {
      if (!isUserInteracting.current) return;
      lon.current = (onPointerDownPointerX.current - clientX) * 0.15 + onPointerDownLon.current;
      lat.current = (clientY - onPointerDownPointerY.current) * 0.15 + onPointerDownLat.current;
    };

    const onPointerUp = () => {
      isUserInteracting.current = false;
    };

    const onMouseDown = (e: MouseEvent) => onPointerDown(e.clientX, e.clientY);
    const onMouseMove = (e: MouseEvent) => onPointerMove(e.clientX, e.clientY);
    const onMouseUp = () => onPointerUp();

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        onPointerDown(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    const onTouchEnd = () => onPointerUp();

    const onResize = () => {
      if (!container || !renderer || !camera) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    dom.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      dom.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      dom.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
    };
  }, [gyroActive]);

  // Handle Mobile Gyroscope Event
  useEffect(() => {
    if (!gyroActive) return;

    const onOrientation = (e: DeviceOrientationEvent) => {
      if (e.alpha !== null && e.beta !== null) {
        lon.current = -e.alpha;
        lat.current = Math.max(-85, Math.min(85, (e.beta || 0) - 90));
      }
    };

    window.addEventListener('deviceorientation', onOrientation);
    return () => {
      window.removeEventListener('deviceorientation', onOrientation);
    };
  }, [gyroActive]);

  const handleToggleGyro = async () => {
    triggerHaptic('tap');
    if (
      typeof window !== 'undefined' &&
      typeof (DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<string> }).requestPermission === 'function'
    ) {
      try {
        const res = await (DeviceOrientationEvent as unknown as { requestPermission: () => Promise<string> }).requestPermission();
        if (res === 'granted') {
          setGyroActive(!gyroActive);
        }
      } catch (err) {
        console.warn('Gyro permission request error:', err);
      }
    } else {
      setGyroActive(!gyroActive);
    }
  };

  // Update Photosphere when viewpoint changes
  useEffect(() => {
    if (sphereRef.current) {
      const newTex = createPhotosphereTexture(currentView);
      (sphereRef.current.material as THREE.MeshBasicMaterial).map = newTex;
      (sphereRef.current.material as THREE.MeshBasicMaterial).needsUpdate = true;
      soundEngine.playTempleBell(523.25, 2.0);
    }
  }, [currentView]);

  const getViewDescription = () => {
    switch (currentView) {
      case 'aerial':
        return monument.vrPano.aerialDesc;
      case 'sanctum':
        return monument.vrPano.sanctumDesc;
      case 'courtyard':
        return monument.vrPano.courtyardDesc;
    }
  };

  const handleAudioTour = () => {
    triggerHaptic('tap');
    soundEngine.playTempleBell(659, 1.5);
    const desc = `${monument.name} 360-degree Virtual Tour. ${getViewDescription()}`;
    voiceGuide.togglePlay(desc, 'en');
    setIsPlayingAudio(!isPlayingAudio);
  };


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-2 sm:p-4">
      <div className="relative w-full h-full max-w-6xl max-h-[92vh] rounded-3xl overflow-hidden glass-royal border border-amber-500/40 shadow-2xl flex flex-col">
        {/* 360 WebGL Viewport */}
        <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

        {/* Top Header Overlay */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-20">
          <div className="flex items-center gap-3 bg-black/75 backdrop-blur-md px-4 py-2 rounded-2xl border border-amber-500/30 pointer-events-auto">
            <Compass className="w-5 h-5 text-amber-400 animate-spin-slow" />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-cinzel font-bold text-white text-base">360° VR Immersion</h3>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-medium">
                  {monument.name}
                </span>
              </div>
              <p className="text-xs text-amber-200/70 font-outfit">Click & Drag to look 360° around</p>
            </div>
          </div>

          <div className="flex items-center gap-2 pointer-events-auto">
            <button
              onClick={handleToggleGyro}
              title="Toggle Gyroscope Look for Mobile Devices"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold backdrop-blur-md border transition-all cursor-pointer ${
                gyroActive
                  ? 'bg-amber-500 text-black border-amber-300 shadow-lg shadow-amber-500/30'
                  : 'bg-black/60 text-white border-white/20 hover:bg-black/80'
              }`}
            >
              <Smartphone className={`w-4 h-4 ${gyroActive ? 'animate-bounce' : ''}`} />
              <span className="hidden sm:inline">{gyroActive ? 'Gyro ON' : 'Gyro Tracking'}</span>
              <span className="sm:hidden">{gyroActive ? 'Gyro ON' : 'Gyro'}</span>
            </button>

            <button
              onClick={handleAudioTour}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold backdrop-blur-md border transition-all cursor-pointer ${
                isPlayingAudio
                  ? 'bg-amber-500 text-black border-amber-300'
                  : 'bg-black/60 text-white border-white/20 hover:bg-black/80'
              }`}
            >
              {isPlayingAudio ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              <span className="hidden sm:inline">{isPlayingAudio ? 'Mute Guide' : 'Listen VR Narration'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-black/75 hover:bg-black text-gray-300 hover:text-white border border-white/20 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Viewpoint Description Card */}
        <div className="absolute bottom-20 left-4 right-4 md:left-6 md:w-[480px] p-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-amber-500/40 shadow-2xl z-20 pointer-events-auto animate-in fade-in slide-in-from-bottom-3">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-1.5">
            <Sparkles className="w-4 h-4" />
            <span>Vantage Point: {currentView.toUpperCase()}</span>
          </div>
          <p className="text-xs text-amber-100/90 leading-relaxed font-outfit">
            {getViewDescription()}
          </p>
        </div>

        {/* Bottom Teleport Navigation Bar */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 z-20 pointer-events-auto">
          <div className="flex items-center gap-2 bg-black/80 backdrop-blur-md p-1.5 rounded-2xl border border-white/20 shadow-2xl">
            <button
              onClick={() => setCurrentView('aerial')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                currentView === 'aerial'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-black font-bold shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
              <span>Aerial Skyline</span>
            </button>

            <button
              onClick={() => setCurrentView('sanctum')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                currentView === 'sanctum'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-black font-bold shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Inner Sanctum</span>
            </button>

            <button
              onClick={() => setCurrentView('courtyard')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                currentView === 'courtyard'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-black font-bold shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Outer Courtyard</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
