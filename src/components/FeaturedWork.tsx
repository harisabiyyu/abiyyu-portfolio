import { ArrowUpRight } from 'lucide-react';

const techs = ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Client Project'];

export default function FeaturedWork() {
  return (
    <section id="projects" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
              Featured Work
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              A project I'm proud of
            </h2>
          </div>
        </div>

        <article className="reveal group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900 p-6 transition-colors duration-300 hover:border-white/20 sm:p-8 lg:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-accent-600/10 blur-3xl"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
            {/* Left: details */}
            <div className="flex flex-col">
              <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-300">
                Client Project
              </span>

              <h3 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                Garuda Taekwondo Club
              </h3>

              <p className="mt-5 text-base leading-relaxed text-gray-400 sm:text-lg">
                “A responsive website built for a real Taekwondo club, providing
                class registration, training schedules, achievements,
                merchandise, club information, and other daily club needs.”
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {techs.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-9">
                <a
                  href="https://garudataekwondoclub.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-2 rounded-xl bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-600/20 transition-all duration-300 hover:bg-accent-400 hover:shadow-accent-500/30"
                >
                  View Live Website
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>

            {/* Right: preview placeholder */}
            <div className="relative">
              <div
                className="relative flex aspect-video flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-ink-800 p-6 text-center"
                aria-label="Website preview placeholder — replace with a screenshot of the Garuda Taekwondo Club website"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(91,108,255,0.08),transparent_70%)]"
                />
                <div className="relative mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-white">
                  Website Preview
                </p>
                <p className="mt-1 max-w-xs text-xs leading-relaxed text-gray-500">
                  Replace this placeholder with a screenshot of the live website
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
