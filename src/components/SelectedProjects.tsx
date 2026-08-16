import { ArrowUpRight } from 'lucide-react';

const taskNest = {
  title: 'TaskNest',
  badge: 'PERSONAL PROJECT',
  badgeClass: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
  description:
    'A task management web application for organizing, searching, filtering, completing, and deleting tasks.',
  techs: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
  href: 'https://harisabiyyu.github.io/TaskNest/',
};

export default function SelectedProjects() {
  return (
    <section className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
            Things I've Built While Learning
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Things I've built while learning
          </h2>
        </div>

        <div className="max-w-3xl">
          <article className="reveal group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-900 p-6 transition-all duration-500 ease-out hover:-translate-y-[4px] hover:border-white/20 hover:shadow-2xl hover:shadow-accent-600/10 sm:p-8">
            {/* Preview image */}
            <div className="relative mb-6 aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10 bg-ink-800 transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:border-white/20">
              <img
                src={`${import.meta.env.BASE_URL}images/tasknest.png`}
                alt="TaskNest project preview"
                className="h-full w-full object-cover object-top"
                loading="lazy"
                width="1200"
                height="675"
              />
            </div>

            <div className="flex flex-col">
              <span
                className={`mb-3 inline-flex w-fit items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${taskNest.badgeClass}`}
              >
                {taskNest.badge}
              </span>

              <h3 className="text-xl font-bold text-white sm:text-2xl">
                {taskNest.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-400 sm:text-base">
                {taskNest.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {taskNest.techs.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href={taskNest.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-2 rounded-xl bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-600/20 transition-all duration-300 ease-out hover:-translate-y-[2px] hover:bg-accent-400 hover:brightness-105 hover:shadow-[0_0_24px_rgba(91,108,255,0.35)] active:translate-y-0"
                >
                  View Project
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
