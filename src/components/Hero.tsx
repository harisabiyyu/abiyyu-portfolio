import { ArrowDown, Github } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-16 md:pt-24"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 h-[36rem] w-[36rem] rounded-full bg-accent-600/10 blur-[120px] animate-glow-pulse"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -left-40 h-[28rem] w-[28rem] rounded-full bg-accent-800/20 blur-[120px]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        {/* Text */}
        <div className="flex flex-col items-start">
          <span
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-gray-300 animate-fade-up"
            style={{ animationDelay: '0.05s' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
            </span>
            D3 Information Systems Student • Telkom University
          </span>

          <h1
            className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white animate-fade-up sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '0.15s' }}
          >
            HARIS
            <br />
            ABIYYU
          </h1>

          <p
            className="mt-6 text-xl font-semibold text-white/90 animate-fade-up sm:text-2xl"
            style={{ animationDelay: '0.25s' }}
          >
            D3 Information Systems Student
            <span className="text-accent-400"> & </span>
            Web Developer
          </p>

          <p
            className="mt-5 max-w-xl text-base leading-relaxed text-gray-400 animate-fade-up sm:text-lg"
            style={{ animationDelay: '0.35s' }}
          >
            “I build practical digital experiences while continuously learning
            and exploring web development.”
          </p>

          <div
            className="mt-9 flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: '0.45s' }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-600/20 transition-all duration-300 hover:bg-accent-400 hover:shadow-accent-500/30"
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
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-gray-200 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </div>

        {/* Photo placeholder */}
        <div className="flex justify-center lg:justify-end">
          <div
            className="relative animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            <div
              aria-hidden
              className="absolute inset-0 rounded-[2rem] bg-accent-500/20 blur-3xl"
            />
            <div className="relative animate-float">
              <img
                src="/images/WhatsApp_Image_2026-08-15_at_18.29.27_(1).jpeg"
                alt="Haris Abiyyu"
                className="h-72 w-72 rounded-[2rem] border border-white/10 object-cover object-top shadow-2xl shadow-black/20 sm:h-80 sm:w-80"
                width="640"
                height="640"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
