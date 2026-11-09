import React, { useEffect, useState, useRef } from 'react';

interface CursorState {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
}

export const InteractiveCursorElement: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const cursorRef = useRef<CursorState>({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const animFrameRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Detect touch & reduced motion
    const touch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsTouchDevice(touch);
    setPrefersReducedMotion(reduced);

    if (touch || reduced) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Parallax offset relative to screen dimensions
      const normX = (e.clientX / window.innerWidth - 0.5) * 60;
      const normY = (e.clientY / window.innerHeight - 0.5) * 60;
      cursorRef.current.targetX = normX;
      cursorRef.current.targetY = normY;
    };

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Smooth spring physics loop
    const updatePhysics = () => {
      const spring = 0.08;
      cursorRef.current.x += (cursorRef.current.targetX - cursorRef.current.x) * spring;
      cursorRef.current.y += (cursorRef.current.targetY - cursorRef.current.y) * spring;

      if (containerRef.current) {
        containerRef.current.style.transform = `translate3d(${cursorRef.current.x}px, ${cursorRef.current.y}px, 0)`;
      }

      animFrameRef.current = requestAnimationFrame(updatePhysics);
    };

    animFrameRef.current = requestAnimationFrame(updatePhysics);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  if (isTouchDevice || prefersReducedMotion) {
    return null; // Keep clean and lightweight on mobile / reduced motion
  }

  // Determine visual state based on scroll progress
  let stateTitle = 'Quantum Pulse';
  let primaryColor = '#38bdf8';
  let secondaryColor = '#818cf8';
  let glowColor = 'rgba(56, 189, 248, 0.4)';

  if (scrollProgress < 0.2) {
    stateTitle = 'Kinetic Origin';
    primaryColor = '#38bdf8';
    secondaryColor = '#60a5fa';
    glowColor = 'rgba(56, 189, 248, 0.45)';
  } else if (scrollProgress < 0.4) {
    stateTitle = 'Code Resonance';
    primaryColor = '#10b981';
    secondaryColor = '#38bdf8';
    glowColor = 'rgba(16, 185, 129, 0.45)';
  } else if (scrollProgress < 0.65) {
    stateTitle = 'Neural Compute';
    primaryColor = '#c084fc';
    secondaryColor = '#f43f5e';
    glowColor = 'rgba(192, 132, 252, 0.5)';
  } else if (scrollProgress < 0.85) {
    stateTitle = 'Leadership Matrix';
    primaryColor = '#f59e0b';
    secondaryColor = '#ec4899';
    glowColor = 'rgba(245, 158, 11, 0.45)';
  } else {
    stateTitle = 'AI Twin Synapse';
    primaryColor = '#06b6d4';
    secondaryColor = '#8b5cf6';
    glowColor = 'rgba(6, 182, 212, 0.5)';
  }

  return (
    <aside
      aria-label="Interactive Left-Side Creative Experience"
      className="fixed left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 select-none hidden md:block"
    >
      <div
        ref={containerRef}
        className="group relative flex flex-col items-center rounded-full border border-transparent p-3 transition-all duration-500 hover:border-white/15 hover:bg-slate-950/25 hover:shadow-[0_0_45px_-12px_var(--hover-glow)]"
        style={{ '--hover-glow': glowColor } as React.CSSProperties}
      >
        {/* Hover spotlight */}
        <div
          className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_42%,rgba(255,255,255,0.2),transparent_58%)] opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100"
          style={{ backgroundColor: glowColor }}
        />

        {/* Subtle Vertical Track Indicator */}
        <div className="absolute top-1/2 -translate-y-1/2 w-[1px] h-48 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent -z-10 transition-all duration-500 group-hover:h-56 group-hover:opacity-80" />

        {/* Ambient Glow Aura */}
        <div
          className="absolute -inset-6 rounded-full blur-2xl transition-all duration-700 opacity-60 group-hover:-inset-9 group-hover:opacity-90"
          style={{ background: glowColor }}
        />

        {/* Outer Rotating Gyroscope Ring */}
        <div
          className="w-14 h-14 rounded-full border border-dashed transition-all duration-500 flex items-center justify-center animate-[spin_12s_linear_infinite] group-hover:scale-110 group-hover:animate-[spin_5s_linear_infinite]"
          style={{
            borderColor: `${primaryColor}66`,
            boxShadow: `0 0 20px -3px ${glowColor}`,
          }}
        >
          {/* Orbital Satellite Node */}
          <div
            className="w-2 h-2 rounded-full absolute -top-1"
            style={{ backgroundColor: secondaryColor, boxShadow: `0 0 10px ${secondaryColor}` }}
          />
        </div>

        {/* Middle Counter-Rotating Ellipse Ring */}
        <div
          className="absolute w-10 h-10 rounded-full border transition-all duration-500 animate-[spin_8s_linear_infinite_reverse] group-hover:scale-125 group-hover:animate-[spin_4s_linear_infinite_reverse]"
          style={{
            borderColor: `${secondaryColor}99`,
            borderStyle: 'solid',
          }}
        >
          <div
            className="w-1.5 h-1.5 rounded-full absolute -bottom-0.5 right-1"
            style={{ backgroundColor: primaryColor, boxShadow: `0 0 8px ${primaryColor}` }}
          />
        </div>

        {/* Core Luminous Nucleus */}
        <div
          className="absolute w-5 h-5 rounded-full animate-pulse transition-all duration-500 group-hover:scale-125 group-hover:shadow-[0_0_32px_8px_var(--core-glow)]"
          style={{
            background: `radial-gradient(circle, #ffffff 10%, ${primaryColor} 60%, ${secondaryColor} 100%)`,
            boxShadow: `0 0 20px 4px ${primaryColor}`,
            '--core-glow': primaryColor,
          } as React.CSSProperties}
        />

        {/* Section State Micro-Badge */}
        <div className="mt-8 flex flex-col items-center opacity-70 transition-all duration-500 group-hover:translate-y-1 group-hover:opacity-100">
          <span
            className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full border bg-slate-950/70 backdrop-blur-md transition-colors duration-500 text-slate-300"
            style={{ borderColor: `${primaryColor}40` }}
          >
            {stateTitle}
          </span>
          <span className="font-mono text-[8px] text-slate-400 mt-1">
            {Math.round(scrollProgress * 100)}%
          </span>
        </div>
      </div>
    </aside>
  );
};
