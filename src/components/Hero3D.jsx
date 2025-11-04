import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowDown, Rocket } from 'lucide-react';

const Hero3D = () => {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [mount3D, setMount3D] = useState(false);

  // Only mount the heavy 3D scene when the hero is in view to improve FCP/LCP
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setInView(entry.isIntersecting));
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Defer mounting to next idle time for smoother main-thread
  useEffect(() => {
    if (!inView) return;
    const id = window.requestIdleCallback
      ? window.requestIdleCallback(() => setMount3D(true), { timeout: 800 })
      : setTimeout(() => setMount3D(true), 200);
    return () => {
      if (window.cancelIdleCallback && typeof id === 'number') {
        // @ts-ignore - not in TS here
        window.cancelIdleCallback(id);
      } else {
        clearTimeout(id);
      }
    };
  }, [inView]);

  return (
    <section id="home" ref={containerRef} className="relative h-[100dvh] w-full overflow-hidden bg-[#0b0f17] text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        {mount3D ? (
          <Spline
            scene="https://prod.spline.design/M2rj0DQ6tP7dSzSz/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        ) : (
          // Lightweight visual while 3D mounts
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-b from-[#0b0f17] via-[#0b0f17] to-black">
            <div className="h-16 w-16 animate-spin rounded-full border-2 border-cyan-400/40 border-t-cyan-400" />
          </div>
        )}
      </div>

      {/* Gradient/Glass overlay to enhance readability (does not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-[#0b0f17]/30 to-[#0b0f17]" />

      {/* Content Overlay */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/5 px-4 py-2 backdrop-blur">
            <Rocket className="h-4 w-4 text-cyan-400" />
            <span className="text-xs tracking-wider text-cyan-200/90">Creative Web Developer</span>
          </div>
          <h1 className="text-balance font-[700] leading-tight tracking-tight">
            <span className="block text-3xl sm:text-5xl md:text-6xl">Hany Kamal</span>
            <span className="bg-gradient-to-r from-rose-400 via-cyan-400 to-purple-400 bg-clip-text text-2xl text-transparent sm:text-4xl md:text-5xl">
              Futuristic, fast and interactive experiences
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-white/70 sm:text-base">
            Full‑stack developer specializing in React, TypeScript, and immersive 3D with Spline/Three.js. Built for speed, refined with motion.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-cyan-500 px-5 py-3 text-sm font-medium text-black transition hover:bg-cyan-400"
            >
              <span>View Projects</span>
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white transition hover:border-white/20 hover:bg-white/10"
            >
              Contact
            </a>
          </div>
        </motion.div>

        {/* Scroll Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 will-change-transform"
          aria-hidden
        >
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            >
              <ArrowDown className="h-5 w-5" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero3D;
