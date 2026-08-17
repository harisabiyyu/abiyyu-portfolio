import { GraduationCap, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="reveal">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
            About Me
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Passionate about building for the web
          </h2>
        </div>

        <div className="reveal mt-8 grid gap-8 md:grid-cols-[1.5fr_1fr] md:gap-10">
          <div className="space-y-4 text-base leading-relaxed text-gray-300 sm:text-lg">
            <p>
              I am an <span className="font-semibold text-white">Information Systems student at Telkom University</span> with a dedicated focus on frontend web development.
            </p>
            <p>
              I enjoy turning ideas, business needs, and real-world requirements into responsive, usable, and well-structured websites. Through projects like the <span className="font-semibold text-white">Garuda Taekwondo Club</span> website and <span className="font-semibold text-white">TaskNest</span>, I have practiced building clean user interfaces, organizing responsive layouts, and managing client-side state.
            </p>
            <p className="text-gray-400">
              I am actively seeking <span className="text-accent-300 font-medium">web development internship opportunities</span> where I can collaborate with experienced developers, contribute to real-world products, and continue strengthening my engineering skills.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {/* Education Card */}
            <div className="rounded-2xl border border-white/10 bg-ink-900 p-6 shadow-lg">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-400">
                  <GraduationCap size={20} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Education
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-white">
                    D3 Information Systems
                  </p>
                </div>
              </div>
              <div className="mt-4 border-t border-white/5 pt-4">
                <p className="text-sm font-medium text-gray-200">Telkom University</p>
                <p className="mt-0.5 text-xs text-gray-500">2026 – Present</p>
              </div>
            </div>

            {/* Quick Strengths Card */}
            <div className="rounded-2xl border border-white/10 bg-ink-900/60 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-emerald-400">
                  <BookOpen size={18} />
                </span>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Current Focus
                </p>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-gray-300">
                  Frontend Development
                </span>
                <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-gray-300">
                  Responsive Web Apps
                </span>
                <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-gray-300">
                  Requirements Analysis
                </span>
                <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-gray-300">
                  Internship Readiness
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
