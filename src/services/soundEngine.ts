/**
 * Procedural Web Audio API sound synthesizer for authentic Indian heritage soundscapes.
 * Generates an evocative Tanpura drone and resonant bronze temple bell chimes
 * with a master gain bus for instant, 100% reliable muting.
 */

class HeritageSoundEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isMuted: boolean = false;
  private isDronePlaying: boolean = false;
  private droneGain: GainNode | null = null;
  private droneOscillators: OscillatorNode[] = [];

  private initContext() {
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();

      // Master gain node controls all audio routing (drone + temple bells)
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 1, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  /**
   * Plays an authentic bronze temple bell chime with rich metallic overtones
   */
  public playTempleBell(frequency = 587.33, duration = 3.5) {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    const now = this.ctx.currentTime;
    const bellGain = this.ctx.createGain();
    bellGain.connect(this.masterGain);

    // Exponential decay envelope for bronze bell
    bellGain.gain.setValueAtTime(0.35, now);
    bellGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    // Overtones for Indian temple bell (fundamental, octave, minor third, fifth, tenth)
    const partials = [
      { ratio: 1.0, gain: 1.0 },
      { ratio: 1.48, gain: 0.6 },
      { ratio: 2.02, gain: 0.5 },
      { ratio: 2.76, gain: 0.3 },
      { ratio: 3.98, gain: 0.2 },
    ];

    partials.forEach((p) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const pGain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(frequency * p.ratio, now);

      pGain.gain.setValueAtTime(p.gain, now);
      pGain.gain.exponentialRampToValueAtTime(0.001, now + duration * (1 / (p.ratio * 0.7)));

      osc.connect(pGain);
      pGain.connect(bellGain);

      osc.start(now);
      osc.stop(now + duration);
    });
  }

  /**
   * Starts an ambient Indian Tanpura drone in C (Sa - Pa - Sa' - Sa)
   */
  public startTanpuraDrone() {
    if (this.isDronePlaying) return;
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    this.isMuted = false;
    const now = this.ctx.currentTime;

    // Ensure master gain is audible
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setValueAtTime(1, now);

    const droneGain = this.ctx.createGain();
    droneGain.connect(this.masterGain);
    droneGain.gain.setValueAtTime(0.001, now);
    droneGain.gain.linearRampToValueAtTime(0.09, now + 1.2);
    this.droneGain = droneGain;

    // Tanpura string frequencies based on C3 (130.81 Hz):
    // String 1: Pa (G3 - 196 Hz)
    // String 2: Sa' (C4 - 261.63 Hz)
    // String 3: Sa' (C4 - 261.63 Hz slightly detuned)
    // String 4: Kharaj Sa (C3 - 130.81 Hz)
    const strings = [
      { freq: 196.0, detune: 2 },
      { freq: 261.63, detune: -4 },
      { freq: 261.63, detune: 5 },
      { freq: 130.81, detune: 0 },
    ];

    this.droneOscillators = [];

    strings.forEach((s) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(s.freq, now);
      osc.detune.setValueAtTime(s.detune, now);

      // Low pass filter to warm the acoustic timbre
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(420, now);
      filter.Q.setValueAtTime(3.0, now);

      // Gentle LFO tremolo for the vibrating silk thread (Javari) effect
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(0.4 + Math.random() * 0.3, now);
      lfoGain.gain.setValueAtTime(25, now);
      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);
      lfo.start(now);

      osc.connect(filter);
      filter.connect(droneGain);

      osc.start(now);
      this.droneOscillators.push(osc);
    });

    this.isDronePlaying = true;
  }

  /**
   * Immediately stops the drone and frees all audio nodes
   */
  public stopTanpuraDrone() {
    if (this.droneGain && this.ctx) {
      try {
        const now = this.ctx.currentTime;
        this.droneGain.gain.cancelScheduledValues(now);
        this.droneGain.gain.setValueAtTime(this.droneGain.gain.value, now);
        this.droneGain.gain.linearRampToValueAtTime(0.00001, now + 0.05);
      } catch (e) {
        console.warn('Error ramping drone gain down:', e);
      }
    }

    this.droneOscillators.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // ignore
      }
    });

    this.droneOscillators = [];
    this.isDronePlaying = false;
  }

  /**
   * Master Mute: completely mutes drone, temple bells, and stops any speech synthesis
   */
  public muteAll() {
    this.isMuted = true;
    this.stopTanpuraDrone();

    if (this.masterGain && this.ctx) {
      try {
        const now = this.ctx.currentTime;
        this.masterGain.gain.cancelScheduledValues(now);
        this.masterGain.gain.setValueAtTime(0, now);
      } catch (e) {
        console.warn('Error setting master gain to 0:', e);
      }
    }

    // Cancel any speech synthesis currently reading
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }

  /**
   * Master Unmute: restores master gain and restarts drone
   */
  public unmuteAll() {
    this.isMuted = false;
    this.initContext();

    if (this.masterGain && this.ctx) {
      try {
        const now = this.ctx.currentTime;
        this.masterGain.gain.cancelScheduledValues(now);
        this.masterGain.gain.setValueAtTime(1, now);
      } catch (e) {
        console.warn('Error setting master gain to 1:', e);
      }
    }

    this.startTanpuraDrone();
  }

  /**
   * Toggle between playing audio and complete silence
   */
  public toggleDrone(): boolean {
    if (this.isDronePlaying && !this.isMuted) {
      this.muteAll();
      return false;
    } else {
      this.unmuteAll();
      return true;
    }
  }

  public toggleMute(): boolean {
    return this.toggleDrone();
  }

  public getIsPlaying(): boolean {
    return this.isDronePlaying && !this.isMuted;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }
}

export const soundEngine = new HeritageSoundEngine();
