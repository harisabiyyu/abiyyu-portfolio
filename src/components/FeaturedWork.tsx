import { ArrowUpRight, Github, Target, Compass, Layers, CheckCircle2, Calendar, Trophy, ShoppingBag, UserCheck } from 'lucide-react';

const techs = ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Responsive Design', 'Vercel'];

const keyFeatures = [
  {
    icon: Calendar,
    title: 'Training Schedules & Programs',
    desc: 'Structured breakdown of training sessions and classes categorized for different age groups and skill levels.',
  },
  {
    icon: Trophy,
    title: 'Achievements & Milestones',
    desc: 'Dedicated showcase highlighting the club’s competition medals, tournament history, and athlete achievements.',
  },
  {
    icon: ShoppingBag,
    title: 'Merchandise & Uniform Catalog',
    desc: 'Product display section presenting official club uniforms, doboks, sparring gear, and accessories.',
  },
  {
    icon: UserCheck,
    title: 'Registration & Contact Channels',
    desc: 'Direct registration access and contact links to streamline new member onboarding and parent inquiries.',
  },
];

const caseStudySteps = [
  {
    icon: Target,
    step: '01',
    title: 'Problem / Goal',
    description:
      'The club needed a centralized, accessible digital platform to replace fragmented social media and manual chat inquiries, making training schedules, programs, achievements, and registration information easily discoverable for parents and prospective students.',
  },
  {
    icon: Compass,
    step: '02',
    title: 'My Approach',
    description:
      'Analyzed the club’s core communication needs and organized the content into an intuitive hierarchy. Developed a mobile-first responsive layout with clean semantic HTML and modular CSS to ensure fast loading and smooth navigation on any device.',
  },
  {
    icon: Layers,
    step: '03',
    title: 'What I Built',
    description:
      'Implemented responsive landing sections, class schedule tables, an achievements gallery, a merchandise catalog view, and direct inquiry/registration links with interactive mobile navigation.',
  },
  {
    icon: CheckCircle2,
    step: '04',
    title: 'Result',
    description:
      'Successfully delivered and deployed a live, functional website on Vercel (garudataekwondoclub.vercel.app) that serves as the official public information hub for members and prospective joiners.',
  },
];

export default function FeaturedWork() {
  return (
    <section id="projects" className="relative px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="reveal mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent-300">
            FLAGSHIP PROJECT
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Featured Real-World Project
          </h2>
          <p className="mt-2 text-base text-gray-400">
            A practical web development project built to address real organizational communication needs.
          </p>
        </div>

        {/* Main Flagship Card */}
        <article className="reveal group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900 p-6 transition-all duration-500 ease-out hover:border-white/20 hover:shadow-2xl hover:shadow-accent-600/10 sm:p-8 lg:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-accent-600/10 blur-3xl transition-opacity duration-500 group-hover:bg-accent-600/15"
          />

          <div className="relative grid items-start gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
            {/* Left: details */}
            <div className="flex flex-col">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                  Real-World Project
                </span>
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-gray-300">
                  Role: Frontend Developer
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                Garuda Taekwondo Club
              </h3>

              <p className="mt-4 text-base leading-relaxed text-gray-300 sm:text-lg">
                Responsive website built to present the club's information, training programs, schedules, achievements, merchandise, and registration channels in a clear and accessible way.
              </p>

              {/* Tech stack badges */}
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Tech Stack
                </p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {techs.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features Overview */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  What I Built & Key Features
                </p>
                <div className="mt-3.5 grid gap-3.5 sm:grid-cols-2">
                  {keyFeatures.map((f) => {
                    const Icon = f.icon;
                    return (
                      <div
                        key={f.title}
                        className="rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors hover:border-white/10 hover:bg-white/[0.04]"
                      >
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
                    );
                  })}
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href="https://garudataekwondoclub.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-2.5 rounded-xl bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-600/20 transition-all duration-300 ease-out hover:-translate-y-[2px] hover:bg-accent-400 hover:brightness-105 hover:shadow-[0_0_24px_rgba(91,108,255,0.35)] active:translate-y-0"
                >
                  Live Website
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  />
                </a>
                <a
                  href="https://github.com/IshikawaUta/taekwondo_garuda_club"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-gray-200 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-white/25 hover:bg-white/[0.07] hover:text-white active:translate-y-0"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </div>
            </div>

            {/* Right: preview image & status card */}
            <div className="flex flex-col gap-4">
              <div className="group/img relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-ink-800 transition-all duration-500 ease-out group-hover:scale-[1.01] group-hover:border-white/20 shadow-xl">
                <img
                  src={`${import.meta.env.BASE_URL}images/garudataekwondo.png`}
                  alt="Garuda Taekwondo Club website preview"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
                  loading="lazy"
                  width="1200"
                  height="750"
                />
              </div>

              <div className="rounded-xl border border-white/10 bg-ink-950/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Project Summary
                </p>
                <div className="mt-2.5 grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-gray-500">Target Audience:</span>
                    <p className="font-medium text-gray-200">Club Members & Parents</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Deployment:</span>
                    <p className="font-medium text-emerald-400">Live on Vercel</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Layout:</span>
                    <p className="font-medium text-gray-200">Mobile-First Responsive</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Contribution:</span>
                    <p className="font-medium text-gray-200">Frontend Implementation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study Breakdown */}
          <div className="mt-12 border-t border-white/10 pt-10">
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent-400">
                Development Process
              </span>
              <h4 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                Project Case Study
              </h4>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {caseStudySteps.map((c) => {
                const Icon = c.icon;
                return (
                  <div
                    key={c.step}
                    className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-ink-950/50 p-5 transition-all duration-300 hover:border-white/20 hover:bg-ink-950"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent-500/20 bg-accent-500/10 text-accent-300">
                          <Icon size={18} />
                        </span>
                        <span className="text-xs font-bold tabular-nums text-white/30">
                          {c.step}
                        </span>
                      </div>
                      <h5 className="mt-4 text-sm font-bold text-white">
                        {c.title}
                      </h5>
                      <p className="mt-2 text-xs leading-relaxed text-gray-400">
                        {c.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
