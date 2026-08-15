import { Github, Mail, MessageCircle } from 'lucide-react';

const contacts = [
  {
    label: 'GitHub',
    href: 'https://github.com',
    icon: Github,
    handle: '@harisabiyyu',
  },
  {
    label: 'Email',
    href: 'mailto:haris@example.com',
    icon: Mail,
    handle: 'haris@example.com',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/620000000000',
    icon: MessageCircle,
    handle: 'Chat on WhatsApp',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <div className="reveal">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
            Contact
          </p>
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Have an idea?
            <br />
            <span className="text-accent-400">Let's build it.</span>
          </h2>
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
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-900 px-5 py-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-400 transition-colors group-hover:text-accent-300">
                  <Icon size={18} />
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-semibold text-white">
                    {c.label}
                  </span>
                  <span className="text-xs text-gray-500">{c.handle}</span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
