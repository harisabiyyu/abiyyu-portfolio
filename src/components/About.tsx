import { GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="reveal">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
            About
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            A bit about me
          </h2>
        </div>

        <div className="reveal mt-8 grid gap-8 md:grid-cols-[1.6fr_1fr] md:gap-10">
          <p className="text-lg leading-relaxed text-gray-300 sm:text-xl">
            I'm Haris, a D3 Information Systems student at Telkom University
            who enjoys building things for the web. I started learning through
            personal projects and have continued by working on real-world
            projects and experimenting with different technologies.
          </p>

          <div className="rounded-2xl border border-white/10 bg-ink-900 p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-400">
                <GraduationCap size={20} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Education
                </p>
                <p className="mt-0.5 text-sm font-semibold text-white">
                  D3 Information Systems
                </p>
              </div>
            </div>
            <div className="mt-4 border-t border-white/5 pt-4">
              <p className="text-sm text-gray-300">Telkom University</p>
              <p className="mt-1 text-sm text-gray-500">2026 – Present</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
