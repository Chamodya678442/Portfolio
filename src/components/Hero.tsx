import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight, FileText, Send, Sparkles, Play, Pause } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import heroVideo from '../assets/Background.mp4';

interface HeroProps {
  onRequestCv?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestCv }) => {
  const [cyclingIndex, setCyclingIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Cycling titles interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCyclingIndex((prev) => (prev + 1) % PERSONAL_INFO.heroCyclingText.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Ensure 100% reliable autoplay across Chrome, Edge, Safari, Firefox
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      video.playsInline = true;

      const attemptPlay = () => {
        video.play().catch((err) => {
          console.log('Video autoplay deferred by browser policy:', err);
        });
      };

      attemptPlay();
      video.addEventListener('loadeddata', attemptPlay);
      return () => {
        video.removeEventListener('loadeddata', attemptPlay);
      };
    }
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section
      id="home"
      aria-label="Hero - Janodi Chamodya"
      className="relative isolate min-h-screen w-full flex items-center justify-start overflow-hidden pt-20 pb-16 transition-colors duration-700"
    >
      {/* Cinematic Fullscreen Animated Profile Background Video Container */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-slate-50 dark:bg-[#07080c] pointer-events-none transition-colors duration-700">
        {/* The Video Element: Color-adaptive between Light and Dark mode */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-[72%_center] sm:object-[66%_center] md:object-[62%_center] lg:object-[58%_center] transition-all duration-700 ease-in-out filter brightness-[1.18] contrast-[1.05] saturate-[1.25] hue-rotate-[-6deg] dark:brightness-100 dark:contrast-100 dark:saturate-100 dark:hue-rotate-0"
        >
          <source src={heroVideo} type="video/mp4" />
          <source src="/Background.mp4" type="video/mp4" />
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Light Mode High-Key Ambient Color Washes (screen & overlay blend to harmonize dark video tones with light theme) */}
        <div className="absolute inset-0 bg-gradient-to-tr from-sky-200/50 via-indigo-100/30 to-cyan-100/40 opacity-85 dark:opacity-0 mix-blend-screen pointer-events-none transition-opacity duration-700" />
        <div className="absolute inset-0 bg-white/30 opacity-60 dark:opacity-0 mix-blend-overlay pointer-events-none transition-opacity duration-700" />

        {/* Directional Theme Gradients for Readability:
            - Left: Deep, silky gradient in light mode (slate-50) and dark mode (#07080c) for crisp typography contrast
            - Right: Clear and transparent so the animated profile shines through vividly on both themes */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-slate-50/80 via-[46%] to-transparent dark:from-[#07080c]/90 dark:via-[#07080c]/65 dark:via-[44%] dark:to-transparent pointer-events-none transition-colors duration-700" />

        {/* Top and Bottom Atmospheric Transitions */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-transparent via-[28%] to-slate-50 dark:from-[#07080c]/70 dark:via-transparent dark:via-[30%] dark:to-[#07080c] pointer-events-none transition-colors duration-700" />

        {/* Dynamic Light Theme Blobs */}
        <div className="absolute -top-32 left-10 w-96 h-96 bg-cyan-500/15 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none transition-opacity duration-700" />
        <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-purple-500/15 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none transition-opacity duration-700" />
      </div>

      {/* Hero Content Container - Positioned on the LEFT to keep the animated profile unobstructed */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Availability Pill Indicator */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/85 dark:bg-slate-900/80 border border-slate-300/80 dark:border-cyan-500/30 backdrop-blur-md mb-6 shadow-sm dark:shadow-glow-sm transition-all duration-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono font-medium text-slate-800 dark:text-slate-200 tracking-wide">
              {PERSONAL_INFO.availability}
            </span>
          </div>

          {/* Small Introductory Label */}
          <div className="flex items-center gap-2 mb-3">
            <Sparkles size={16} className="text-cyan-600 dark:text-cyan-400" />
            <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-400 font-semibold">
              HELLO, I'M
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-[1.08]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-100 dark:to-slate-300">
              JANODI
            </span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-500 to-indigo-600 dark:from-cyan-400 dark:via-sky-300 dark:to-indigo-400">
              CHAMODYA
            </span>
          </h1>

          {/* Animated Dynamic Cycling Sub-Title */}
          <div className="h-8 sm:h-10 flex items-center mb-4">
            <span className="text-sm sm:text-base font-mono text-slate-500 dark:text-slate-400 mr-2">&gt;</span>
            <div className="relative overflow-hidden h-full flex items-center">
              <span
                key={cyclingIndex}
                className="text-base sm:text-xl lg:text-2xl font-mono font-bold text-cyan-600 dark:text-cyan-300 transition-all duration-500 transform inline-block"
              >
                {PERSONAL_INFO.heroCyclingText[cyclingIndex]}
              </span>
            </div>
          </div>

          {/* Professional Headline */}
          <p className="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 mb-4 max-w-xl border-l-2 border-cyan-500/60 pl-3">
            {PERSONAL_INFO.role}
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300/90 leading-relaxed max-w-xl mb-8">
            {PERSONAL_INFO.bio}
          </p>

          {/* Primary & Secondary Action Buttons with Modern Shimmer & Magnetic Hover */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
            {/* Primary 1: Explore My Work (Luminous Glass-Sweep Hover Effect) */}
            <a
              href="#projects"
              className="group relative overflow-hidden inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:shadow-xl hover:shadow-cyan-500/35 transition-all duration-300 active:scale-[0.98]"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
              <span>Explore My Work</span>
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            {/* Primary 2: Let's Connect (Refined Edge-Glow & Glide Hover Effect) */}
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white/90 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-800/90 border border-slate-300/90 dark:border-slate-700/80 hover:border-cyan-500/60 backdrop-blur-md transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-cyan-500/20 active:scale-[0.98]"
            >
              <Send size={15} className="text-cyan-600 dark:text-cyan-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              <span>Let's Connect</span>
            </a>

            {/* Secondary: Request CV (Elevated Pill Hover Effect) */}
            <button
              type="button"
              onClick={onRequestCv}
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-white bg-transparent hover:bg-slate-100/90 dark:hover:bg-white/5 border border-slate-300/80 dark:border-white/10 hover:border-cyan-500/50 transition-all duration-300 active:scale-[0.98]"
            >
              <FileText size={15} className="text-cyan-600 dark:text-cyan-400 transition-transform duration-300 group-hover:-translate-y-0.5" />
              <span>Request CV</span>
            </button>
          </div>
        </div>
      </div>

      {/* Video Play / Pause Control Button with Ambient Glow Hover */}
      <div className="absolute bottom-6 right-6 z-20 hidden sm:block">
        <button
          onClick={togglePlayPause}
          aria-label={isPlaying ? 'Pause Background Video' : 'Play Background Video'}
          className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 dark:bg-slate-950/70 hover:bg-white dark:hover:bg-slate-900 border border-slate-300/80 dark:border-white/10 hover:border-cyan-500/50 backdrop-blur-md text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all duration-300 shadow-sm hover:shadow-glow-sm active:scale-95"
        >
          {isPlaying ? <Pause size={13} className="text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform" /> : <Play size={13} className="text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform" />}
          <span>{isPlaying ? 'Pause Video' : 'Play Video'}</span>
        </button>
      </div>

      {/* Bottom Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 pointer-events-none opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-600 dark:text-slate-400">Scroll Down</span>
        <div className="w-5 h-8 rounded-full border-2 border-slate-400/60 dark:border-slate-400/50 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-cyan-600 dark:bg-cyan-400 rounded-full animate-bounce" />
        </div>
        <ArrowDown size={14} className="text-slate-600 dark:text-slate-400 animate-pulse -mt-0.5" />
      </div>
    </section>
  );
};
