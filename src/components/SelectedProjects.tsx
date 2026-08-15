import { ArrowUpRight } from 'lucide-react';

type Project = {
  title: string;
  badge: string;
  badgeClass: string;
  description: string;
  techs: string[];
  href: string;
  linkLabel: string;
};

const projects: Project[] = [
  {
    title: 'TaskNest',
    badge: 'Personal Project',
    badgeClass: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
    description:
      'A task management web application for organizing, searching, filtering, completing, and deleting tasks.',
    techs: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    href: 'https://harisabiyyu.github.io/TaskNest/',
    linkLabel: 'View Project',
  },
  {
    title: 'Traffic Dodger',
    badge: 'Game Project',
    badgeClass: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
    description:
      'A browser-based JavaScript game built as a personal exploration of interactive gameplay, controls, sound, and responsive design.',
    techs: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://harisabiyyu.github.io/traffic-dodger-gamev2/',
    linkLabel: 'View Project',
  },
];

export default function SelectedProjects() {
  return (
    <section className="px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
            Selected Projects
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Things I've built while learning
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="reveal group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-900 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 sm:p-7"
            >
              {/* Preview placeholder */}
              <div
                className="relative mb-6 flex aspect-[16/10] items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-ink-800"
                aria-label={`Preview placeholder for ${p.title}`}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(91,108,255,0.08),transparent_70%)]"
                />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-gray-500 transition-colors duration-300 group-hover:text-accent-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                </div>
              </div>

              <span
                className={`mb-3 inline-flex w-fit items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${p.badgeClass}`}
              >
                {p.badge}
              </span>

              <h3 className="text-xl font-bold text-white sm:text-2xl">
                {p.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                {p.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.techs.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gray-300 transition-colors hover:text-accent-400"
              >
                {p.linkLabel}
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
