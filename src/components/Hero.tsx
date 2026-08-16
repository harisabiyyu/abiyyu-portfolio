import { ArrowDown, Github } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-16 md:pt-24"
    >
      {/* Ambient background depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 -z-10 h-[38rem] w-[38rem] rounded-full bg-accent-600/[0.07] blur-[140px] animate-glow-pulse"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 -left-24 -z-10 h-[32rem] w-[32rem] rounded-full bg-accent-500/[0.04] blur-[130px]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        {/* Text */}
        <div className="flex flex-col items-start">
          <span
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-gray-300 backdrop-blur-sm shadow-sm animate-fade-up"
            style={{ animationDelay: '0.08s' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
            </span>
            D3 Information Systems Student • Telkom University
          </span>

          <h1
            className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white animate-fade-up sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '0.18s' }}
          >
            HARIS
            <br />
            ABIYYU
          </h1>

          <p
            className="mt-6 text-xl font-semibold text-white/90 animate-fade-up sm:text-2xl"
            style={{ animationDelay: '0.28s' }}
          >
            D3 Information Systems Student
            <span className="text-accent-400"> & </span>
            Web Developer
          </p>

          <p
            className="mt-5 max-w-xl text-base leading-relaxed text-gray-400 animate-fade-up sm:text-lg"
            style={{ animationDelay: '0.38s' }}
          >
            “I build practical digital experiences while continuously learning
            and exploring web development.”
          </p>

          <div
            className="mt-9 flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: '0.48s' }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-600/25 transition-all duration-300 ease-out hover:-translate-y-[3px] hover:bg-accent-400 hover:brightness-105 hover:shadow-[0_0_24px_rgba(91,108,255,0.35)] active:translate-y-0"
            >
              Explore My Work
              <ArrowDown
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-gray-200 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-[3px] hover:border-white/25 hover:bg-white/[0.07] hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] active:translate-y-0"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </div>

        {/* Photo presentation */}
        <div className="flex justify-center lg:justify-end">
          <div
            className="group relative animate-fade-slide-right"
            style={{ animationDelay: '0.2s' }}
          >
            {/* Soft purple/blue ambient glow */}
            <div
              aria-hidden
              className="absolute -inset-1 rounded-[2.25rem] bg-gradient-to-tr from-accent-600/25 via-accent-500/15 to-transparent blur-2xl opacity-75 transition-opacity duration-500 group-hover:opacity-100"
            />
            <div className="relative animate-float rounded-[2rem] p-0.5 bg-gradient-to-b from-white/15 via-white/5 to-white/10 shadow-2xl shadow-black/50 transition-transform duration-500 ease-out group-hover:scale-[1.02]">
              <div className="overflow-hidden rounded-[1.9rem] bg-ink-900 ring-1 ring-white/10">
                <img
                  src={`${import.meta.env.BASE_URL}images/portfolio.jpeg`}
                  alt="Haris Abiyyu"
                  className="h-[21rem] w-[17.5rem] object-cover object-[center_16%] sm:h-[25rem] sm:w-[20.5rem]"
                  width="640"
                  height="780"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
