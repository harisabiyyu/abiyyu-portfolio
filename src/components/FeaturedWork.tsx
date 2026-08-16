import { ArrowUpRight } from 'lucide-react';

const techs = ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Client Project'];

export default function FeaturedWork() {
  return (
    <section id="projects" className="relative px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
            Featured Project
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Featured Project
          </h2>
        </div>

        <article className="reveal group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900 p-6 transition-all duration-500 ease-out hover:-translate-y-[4px] hover:border-white/20 hover:shadow-2xl hover:shadow-accent-600/10 sm:p-8 lg:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-accent-600/10 blur-3xl transition-opacity duration-500 group-hover:bg-accent-600/15"
          />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
            {/* Left: details */}
            <div className="flex flex-col">
              <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent-300">
                CLIENT PROJECT
              </span>

              <h3 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                Garuda Taekwondo Club
              </h3>

              <p className="mt-4 text-base leading-relaxed text-gray-400 sm:text-lg">
                “A responsive website built for a real Taekwondo club,
                featuring class registration, training schedules,
                achievements, merchandise, and club information.”
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {techs.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href="https://garudataekwondoclub.vercel.app/"
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

            {/* Right: preview image */}
            <div className="relative">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-ink-800 transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:border-white/20">
                <img
                  src={`${import.meta.env.BASE_URL}images/garudataekwondo.png`}
                  alt="Garuda Taekwondo Club website preview"
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                  width="1200"
                  height="750"
                />
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
