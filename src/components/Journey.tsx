const steps = [
  {
    year: '2026',
    title: 'Started D3 Information Systems at Telkom University',
    body: 'Began university studies in Information Systems.',
  },
  {
    year: '2026',
    title: 'Built Traffic Dodger',
    body: 'A browser-based JavaScript game exploring interactive gameplay.',
  },
  {
    year: '2026',
    title: 'Built TaskNest',
    body: 'A task management app for organizing, filtering, and completing tasks.',
  },
  {
    year: '2026',
    title: 'Completed Garuda Taekwondo Club',
    body: 'First real client project — a responsive website built for a real Taekwondo club.',
  },
  {
    year: 'Present',
    title: 'Continuously learning and building web projects',
    body: 'Exploring frontend development, UI/UX, and JavaScript while studying at Telkom University.',
  },
];

export default function Journey() {
  return (
    <section className="px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="reveal mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
            Journey
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How I got here
          </h2>
        </div>

        <ol className="relative">
          {/* vertical line */}
          <span
            aria-hidden
            className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-500/40 via-white/10 to-transparent"
          />

          {steps.map((s) => (
            <li key={s.title} className="reveal relative mb-8 last:mb-0">
              {/* dot */}
              <span
                aria-hidden
                className="absolute top-2 left-0 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent-400 bg-ink-950"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
              </span>

              <div className="ml-8 rounded-xl border border-white/10 bg-ink-900 p-5 transition-colors duration-300 hover:border-white/20 sm:ml-12 sm:p-6">
                {s.year && (
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent-400">
                    {s.year}
                  </span>
                )}
                <h3 className="mt-1 text-base font-semibold text-white sm:text-lg">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-400">
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
