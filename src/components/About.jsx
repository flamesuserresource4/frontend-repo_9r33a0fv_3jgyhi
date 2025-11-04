import React from 'react';
import { motion } from 'framer-motion';
import { Code, Atom, Cpu, Layers } from 'lucide-react';

const skills = [
  { name: 'React', icon: Code },
  { name: 'TypeScript', icon: Layers },
  { name: 'Three.js / R3F', icon: Atom },
  { name: 'Node.js', icon: Cpu },
];

const timeline = [
  {
    year: '2024',
    title: 'Senior Frontend Engineer',
    desc: 'Led 3D product experiences and performance-first UI engineering for enterprise dashboards.'
  },
  {
    year: '2022',
    title: 'Creative Developer',
    desc: 'Built immersive web campaigns with motion, WebGL, and audio-reactive visuals.'
  },
  {
    year: '2020',
    title: 'Frontend Engineer',
    desc: 'Shipped design systems and PWAs using React, Tailwind, and Framer Motion.'
  },
];

const About = () => {
  return (
    <section id="about" className="relative w-full scroll-mt-20 bg-[#0b0f17] py-24 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        {/* Avatar / Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center"
        >
          <div className="relative h-72 w-72 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-purple-500/10 p-1 shadow-2xl backdrop-blur sm:h-80 sm:w-80">
            <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[#0d1320]">
              <div className="relative">
                <div className="absolute -inset-6 animate-pulse rounded-full bg-cyan-500/10 blur-2xl" />
                <span className="relative text-7xl font-black tracking-tight text-white/90">HK</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bio + Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">About</h2>
            <p className="mt-3 max-w-2xl text-white/70">
              I’m Hany Kamal, a developer obsessed with clean architecture, micro‑interactions, and visual storytelling. My work blends
              engineering precision with creative exploration to deliver delightful web experiences.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm uppercase tracking-widest text-white/60">Core Skills</h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {skills.map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-cyan-400/30 hover:bg-white/10"
                >
                  <Icon className="h-4 w-4 text-cyan-300 group-hover:text-cyan-200" />
                  <span className="text-sm text-white/80">{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mini Timeline */}
          <div>
            <h3 className="mb-4 text-sm uppercase tracking-widest text-white/60">Experience</h3>
            <div className="relative ml-2 border-l border-white/10">
              {timeline.map((item, idx) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative ml-4 mb-6"
                >
                  <span className="absolute -left-[22px] top-1 h-3 w-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 shadow-[0_0_15px_rgba(34,211,238,0.6)]" />
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-white/50">{item.year}</p>
                    <p className="text-sm font-medium text-white/80">{item.title}</p>
                  </div>
                  <p className="mt-2 text-sm text-white/70">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
