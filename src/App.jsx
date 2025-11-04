import React, { useEffect } from 'react';
import Hero3D from './components/Hero3D';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  // Smooth scroll behavior polyfill for consistent UX
  useEffect(() => {
    if ('scrollBehavior' in document.documentElement.style) return;
    const handleClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        const top = el.getBoundingClientRect().top + window.scrollY - 16;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0f17] text-white">
      {/* Top Nav */}
      <header className="fixed inset-x-0 top-0 z-50 mx-auto max-w-7xl px-4">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur">
          <a href="#home" className="rounded-xl px-3 py-2 text-sm font-semibold tracking-wide text-white/90">
            HK
          </a>
          <nav className="hidden items-center gap-1 sm:flex">
            {[
              { href: '#about', label: 'About' },
              { href: '#projects', label: 'Projects' },
              { href: '#contact', label: 'Contact' },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-xl px-3 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-xl bg-cyan-500 px-3 py-2 text-sm font-medium text-black transition hover:bg-cyan-400"
          >
            Hire Me
          </a>
        </div>
      </header>

      <main className="space-y-0">
        <Hero3D />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
