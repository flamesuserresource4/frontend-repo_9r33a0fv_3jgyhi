import React, { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';

// Lightweight wrapper that only mounts the Spline scene when hovered or in view
const MiniSpline = ({ scene, className = '', hoverOnly = true }) => {
  const ref = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hoverOnly) return; // IntersectionObserver only when not hover-only
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShouldLoad(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: '0px 0px -20% 0px', threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [hoverOnly]);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setShouldLoad(true)}
      onTouchStart={() => setShouldLoad(true)}
      className={`relative overflow-hidden rounded-xl ${className}`}
    >
      {shouldLoad ? (
        <Spline scene={scene} style={{ width: '100%', height: '100%' }} />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-white/10 to-white/5">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/20 border-t-white/70" />
        </div>
      )}
      {/* ensure any visual overlay doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
    </div>
  );
};

export default MiniSpline;
