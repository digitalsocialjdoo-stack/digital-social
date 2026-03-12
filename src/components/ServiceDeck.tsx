import Link from "next/link";

const items = [
  {
    title: "Premium Web",
    desc: "Next.js + TypeScript. Brzina, SEO, skalabilnost. Fokus: konverzija.",
    pill: "Performance",
    href: "/services#web",
  },
  {
    title: "Motion & Interactions",
    desc: "Micro-interactions, scroll scenes, high-end feel. Elegantno, ne naporno.",
    pill: "Framer + GSAP",
    href: "/services#motion",
  },
  {
    title: "SEO & Growth",
    desc: "Tehnički SEO + content structure + tracking. Google voli — klijenti dolaze.",
    pill: "SEO System",
    href: "/services#seo",
  },
  {
    title: "Design System",
    desc: "Tipografija, spacing, UI kit. Sve izgleda kao brend, ne kao template.",
    pill: "UI/UX",
    href: "/services#design",
  },
];

export default function ServiceDeck() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto w-[min(1100px,92%)] pb-20">
        <div className="mt-14 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/45">
              What we do
            </p>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
              Services that feel premium.
            </h2>
            <p className="mt-4 max-w-2xl text-white/60">
              Minimalno “priče”. Maksimalno rezultat + osjećaj kvalitete.
            </p>
          </div>

          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl px-5 py-3
            text-white/80 hover:text-white hover:border-white/30 transition"
          >
            Get quote <span className="opacity-70">→</span>
          </Link>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {items.map((it) => (
            <Link
              key={it.title}
              href={it.href}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7
              hover:bg-white/10 hover:border-white/20 transition"
            >
              {/* hover shine */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700
                bg-[radial-gradient(900px_circle_at_20%_10%,rgba(255,255,255,0.10),transparent_60%)]"
              />

              <div className="relative flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    {it.pill}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold">{it.title}</h3>
                  <p className="mt-3 text-white/60 leading-relaxed">{it.desc}</p>
                </div>

                <span className="relative mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80
                  transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </div>

              {/* bottom line */}
              <div className="absolute left-8 right-8 bottom-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}