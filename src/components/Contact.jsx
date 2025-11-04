import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      alert('Thanks for reaching out! I\'ll get back to you shortly.');
      e.currentTarget.reset();
    }, 900);
  };

  return (
    <section id="contact" className="relative w-full scroll-mt-20 bg-[#0b0f17] py-24 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
            <Mail className="h-5 w-5 text-cyan-300" />
          </div>
          <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">Let’s collaborate</h2>
          <p className="mt-2 text-white/70">Got a project in mind or just want to say hello? Drop a message below.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs uppercase tracking-widest text-white/60">Name</label>
                <input
                  required
                  type="text"
                  className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-sm outline-none ring-0 transition focus:border-cyan-400/40"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs uppercase tracking-widest text-white/60">Email</label>
                <input
                  required
                  type="email"
                  className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-sm outline-none transition focus:border-cyan-400/40"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-xs uppercase tracking-widest text-white/60">Message</label>
              <textarea
                required
                rows="5"
                className="w-full resize-none rounded-xl border border-white/10 bg-transparent px-4 py-3 text-sm outline-none transition focus:border-cyan-400/40"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-medium text-black transition hover:bg-cyan-400 disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {submitting ? 'Sending...' : 'Send message'}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-between gap-6"
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-medium">A few notes</h3>
              <p className="mt-2 text-sm text-white/70">
                I’m currently open to senior frontend and creative developer roles, as well as select freelance collaborations.
                I love projects with strong visual direction, performance challenges, and ambitious UX.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-medium">Connect</h3>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:border-white/20 hover:bg-white/10"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:border-white/20 hover:bg-white/10"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a
                  href="mailto:hello@hany.dev"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:border-white/20 hover:bg-white/10"
                >
                  <Mail className="h-4 w-4" /> Email
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <footer className="mt-14 border-t border-white/10/5 px-6 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Hany Kamal. Crafted with care.
      </footer>
    </section>
  );
};

export default Contact;
