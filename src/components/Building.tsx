import { Code2, Layout, Wrench, GraduationCap } from 'lucide-react';

const skillCategories = [
  {
    category: 'Languages',
    icon: Code2,
    skills: [
      { name: 'HTML5', desc: 'Semantic layouts, modern structure & accessibility basics' },
      { name: 'CSS3', desc: 'Flexbox, CSS Grid, custom animations & responsive styling' },
      { name: 'JavaScript (ES6+)', desc: 'DOM manipulation, event handling, ES6+ syntax' },
    ],
  },
  {
    category: 'Frontend & Web',
    icon: Layout,
    skills: [
      { name: 'Responsive Web Design', desc: 'Mobile-first interfaces adapting seamlessly to any screen' },
      { name: 'DOM & Client State', desc: 'Dynamic UI rendering and browser LocalStorage state' },
      { name: 'Tailwind CSS', desc: 'Modern utility-first styling and custom design systems' },
      { name: 'Component Architecture', desc: 'Modular, reusable UI components and clean code structure' },
    ],
  },
  {
    category: 'Tools & Workflow',
    icon: Wrench,
    skills: [
      { name: 'Git & GitHub', desc: 'Version control, repository management & collaboration' },
      { name: 'VS Code', desc: 'Primary development environment, extensions & debugging' },
      { name: 'Vercel & GitHub Pages', desc: 'Hosting, preview deployments & production delivery' },
      { name: 'Vite & NPM', desc: 'Modern frontend tooling and package management' },
    ],
  },
];

export default function Building() {
  return (
    <section id="skills" className="px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="reveal mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
            Skills & Tech Stack
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Technologies & Tools
          </h2>
          <p className="mt-2 text-base text-gray-400">
            Technologies I actively use and have demonstrated through practical projects.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.category}
                className="reveal group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-ink-900 p-6 transition-all duration-500 ease-out hover:-translate-y-[4px] hover:border-white/20 hover:shadow-xl hover:shadow-black/40 sm:p-7"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent-600/5 blur-2xl transition-opacity duration-300 group-hover:bg-accent-600/10"
                />

                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-400">
                      <Icon size={18} />
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      {c.category}
                    </h3>
                  </div>

                  <div className="mt-6 space-y-4">
                    {c.skills.map((s) => (
                      <div key={s.name} className="border-t border-white/5 pt-3 first:border-0 first:pt-0">
                        <p className="text-sm font-semibold text-gray-200">
                          {s.name}
                        </p>
                        <p className="mt-0.5 text-xs leading-relaxed text-gray-400">
                          {s.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Information Systems Foundation Banner */}
        <div className="reveal mt-8 rounded-2xl border border-white/10 bg-ink-900/60 p-6 sm:p-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent-500/20 bg-accent-500/10 text-accent-400">
              <GraduationCap size={22} />
            </span>
            <div>
              <h4 className="text-base font-semibold text-white">
                Information Systems Background & Practical Approach
              </h4>
              <p className="mt-1 text-sm leading-relaxed text-gray-400">
                Studying Information Systems at Telkom University equips me with a strong foundation in analyzing requirements, structuring clear user flows, and bridging user needs with practical web solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
