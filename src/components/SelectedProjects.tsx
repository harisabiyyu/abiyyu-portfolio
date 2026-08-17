import { ArrowUpRight, Github, CheckCircle2, Search, Database, Layout } from 'lucide-react';

const taskNest = {
  title: 'TaskNest',
  subtitle: 'Interactive Task & Productivity Application',
  badge: 'PERSONAL PROJECT',
  role: 'Frontend Developer',
  badgeClass: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
  description:
    'A client-side task management web application built to practice modern DOM manipulation, dynamic task filtering, and persistent browser storage without external backend dependencies.',
  techs: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'LocalStorage API', 'Responsive UI'],
  features: [
    {
      icon: CheckCircle2,
      title: 'Full Task CRUD',
      desc: 'Create, view, toggle completion status, and remove tasks with instant UI updates.',
    },
    {
      icon: Search,
      title: 'Real-Time Search & Filtering',
      desc: 'Filter tasks by status (All, Active, Completed) with instant dynamic query matching.',
    },
    {
      icon: Database,
      title: 'Persistent Storage',
      desc: 'Saves task data directly in the browser using the LocalStorage API for offline persistence.',
    },
    {
      icon: Layout,
      title: 'Responsive & Intuitive Interface',
      desc: 'Clean, accessible layout with empty state indicators and clear visual feedback.',
    },
  ],
  demoHref: 'https://harisabiyyu.github.io/TaskNest/',
  githubHref: 'https://github.com/harisabiyyu/TaskNest',
};

export default function SelectedProjects() {
  return (
    <section className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="reveal mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
            Other Projects
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Practical Applications
          </h2>
          <p className="mt-2 text-base text-gray-400">
            Functional web projects built to reinforce frontend fundamentals and state management.
          </p>
        </div>

        <div className="max-w-4xl">
          <article className="reveal group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-900 p-6 transition-all duration-500 ease-out hover:border-white/20 hover:shadow-2xl hover:shadow-accent-600/10 sm:p-8 lg:p-9">
            {/* Top grid: preview image + meta */}
            <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_1fr]">
              {/* Preview image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-ink-800 transition-all duration-500 ease-out group-hover:scale-[1.01] group-hover:border-white/20 shadow-lg">
                <img
                  src={`${import.meta.env.BASE_URL}images/tasknest.png`}
                  alt="TaskNest project preview"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width="1200"
                  height="750"
                />
              </div>

              {/* Meta details */}
              <div className="flex flex-col">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`inline-flex w-fit items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${taskNest.badgeClass}`}
                  >
                    {taskNest.badge}
                  </span>
                  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-gray-300">
                    Role: {taskNest.role}
                  </span>
                </div>

                <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  {taskNest.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-accent-300">
                  {taskNest.subtitle}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-gray-300 sm:text-base">
                  {taskNest.description}
                </p>

                {/* Tech badges */}
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Technologies Used
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {taskNest.techs.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={taskNest.demoHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2.5 rounded-xl bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-600/20 transition-all duration-300 ease-out hover:-translate-y-[2px] hover:bg-accent-400 hover:brightness-105 hover:shadow-[0_0_24px_rgba(91,108,255,0.35)] active:translate-y-0"
                  >
                    Live Demo
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                    />
                  </a>
                  <a
                    href={taskNest.githubHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-gray-200 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-white/25 hover:bg-white/[0.07] hover:text-white active:translate-y-0"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom: Feature breakdown */}
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Key Technical Features
              </p>
              <div className="mt-3.5 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
                {taskNest.features.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div
                      key={f.title}
                      className="flex flex-col justify-between rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors hover:border-white/10 hover:bg-white/[0.04]"
                    >
                      <div>
                        <div className="flex items-start gap-2.5 text-accent-300">
                          <Icon size={17} className="mt-0.5 shrink-0" />
                          <span className="text-xs font-semibold leading-snug text-white">
                            {f.title}
                          </span>
                        </div>
                        <p className="mt-2 text-xs leading-relaxed text-gray-400">
                          {f.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
