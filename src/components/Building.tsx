import { Code2, MonitorSmartphone, Compass } from 'lucide-react';

const areas = [
  {
    num: '01',
    title: 'Web & Frontend Development',
    body: 'HTML, CSS, JavaScript — building practical, responsive digital products for the web.',
    icon: Code2,
  },
  {
    num: '02',
    title: 'Information Systems',
    body: 'Studying how technology and information systems solve practical problems at Telkom University.',
    icon: MonitorSmartphone,
  },
  {
    num: '03',
    title: 'Exploring',
    body: 'UI/UX design, Git, GitHub, deployment, and new technologies.',
    icon: Compass,
  },
];

export default function Building() {
  return (
    <section className="px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
            Currently Building & Learning
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Always learning, always building
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {areas.map((a) => {
            const Icon = a.icon;
            return (
              <div
                key={a.num}
                className="reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900 p-7 transition-all duration-500 ease-out hover:-translate-y-[4px] hover:border-white/20 hover:shadow-xl hover:shadow-black/40"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent-600/5 blur-2xl transition-opacity duration-300 group-hover:bg-accent-600/10"
                />
                <div className="relative flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-400">
                    <Icon size={20} />
                  </span>
                  <span className="text-3xl font-extrabold tabular-nums text-white/10">
                    {a.num}
                  </span>
                </div>
                <h3 className="relative mt-6 text-lg font-bold text-white">
                  {a.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-gray-400">
                  {a.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
