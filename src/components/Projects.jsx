import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Neon Commerce',
    stack: ['React', 'TypeScript', 'R3F'],
    link: '#',
    repo: '#',
    gradient: 'from-cyan-500/20 via-fuchsia-500/10 to-purple-500/20',
    desc: '3D product showcase with real‑time lighting and cinematic transitions.'
  },
  {
    title: 'Orbit Studio',
    stack: ['Next.js', 'Framer Motion', 'WebGL'],
    link: '#',
    repo: '#',
    gradient: 'from-purple-500/20 via-cyan-500/10 to-fuchsia-500/20',
    desc: 'Portfolio engine with scroll‑driven scenes and generative backgrounds.'
  },
  {
    title: 'Pulse Analytics',
    stack: ['Vite', 'Tailwind', 'D3'],
    link: '#',
    repo: '#',
    gradient: 'from-fuchsia-500/20 via-purple-500/10 to-cyan-500/20',
    desc: 'Realtime dashboards with micro‑interactions and glass UI system.'
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 24 },
  in: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const Projects = () => {
  return (
    <section id="projects" className="relative w-full scroll-mt-20 bg-[#0b0f17] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Selected Projects</h2>
            <p className="mt-2 max-w-2xl text-white/70">Interactive builds that combine performance, aesthetics, and delightful motion.</p>
          </div>
          <a href="#contact" className="hidden rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:border-white/20 hover:bg-white/10 sm:block">
            Get in touch
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              custom={i}
              initial="initial"
              whileInView="in"
              viewport={{ once: true, margin: '-100px' }}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-cyan-400/30 hover:bg-white/10"
            >
              <div className={`pointer-events-none absolute -inset-1 bg-gradient-to-br ${p.gradient} opacity-0 blur-2xl transition duration-500 group-hover:opacity-60`} />

              <div className="relative z-10">
                <div className="h-40 w-full rounded-xl bg-gradient-to-br from-white/10 to-white/5" />

                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-white/70">{p.desc}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={p.repo}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80 transition hover:border-white/20 hover:bg-white/10"
                      aria-label={`GitHub repo for ${p.title}`}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href={p.link}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80 transition hover:border-white/20 hover:bg-white/10"
                      aria-label={`Live link for ${p.title}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
