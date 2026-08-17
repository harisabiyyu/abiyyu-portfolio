import { Github, Mail, MessageCircle } from 'lucide-react';

const contacts = [
  {
    label: 'Email',
    href: 'mailto:harisabiyyu50@gmail.com',
    icon: Mail,
    handle: 'harisabiyyu50@gmail.com',
    note: 'Best for internship inquiries',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/harisabiyyu',
    icon: Github,
    handle: 'github.com/harisabiyyu',
    note: 'View code & projects',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/qr/RS24HY7VZTMCL1',
    icon: MessageCircle,
    handle: '+62 857-1808-5235',
    note: 'Quick messaging & chat',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <div className="reveal">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
            Get In Touch
          </p>
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Interested in working together?
            <br />
            <span className="text-accent-400">Let's connect.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg">
            I am actively seeking web development internship opportunities and open to discussing projects. Feel free to reach out through any channel below.
          </p>
        </div>

        <div className="reveal mt-12 flex flex-wrap items-center justify-center gap-4">
          {contacts.map((c) => {
            const Icon = c.icon;
            return (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={c.label}
                className="group flex min-w-[260px] items-center gap-3.5 rounded-2xl border border-white/10 bg-ink-900 px-5 py-4 text-left transition-all duration-300 ease-out hover:-translate-y-[3px] hover:border-white/20 hover:shadow-lg hover:shadow-black/40"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-400 transition-colors group-hover:text-accent-300">
                  <Icon size={20} />
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-semibold text-white">
                    {c.label}
                  </span>
                  <span className="text-xs font-medium text-gray-300">{c.handle}</span>
                  <span className="mt-0.5 text-[11px] text-gray-500">{c.note}</span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
