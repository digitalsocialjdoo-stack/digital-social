import Link from "next/link";

export const metadata = { title: "Services" };

const items = [
  {
    id: "web",
    title: "Premium Web",
    pill: "Performance",
    desc: "Next.js + TypeScript + Tailwind. Brzina, SEO i skalabilnost. Fokus: konverzija.",
    bullets: ["SSR/SEO setup", "Performance budget", "Clean UI system", "Analytics & events"],
  },
  {
    id: "motion",
    title: "Motion & Interactions",
    pill: "Framer + GSAP",
    desc: "Micro-interactions i scroll scene koje izgledaju skupo — bez napora i bez lag-a.",
    bullets: ["Micro interactions", "ScrollTrigger scenes", "Page polish", "Motion guidelines"],
  },
  {
    id: "seo",
    title: "SEO & Growth",
    pill: "SEO System",
    desc: "Tehnički SEO + struktura sadržaja + tracking. Google voli — klijenti dolaze.",
    bullets: ["Technical SEO", "On-page structure", "Schema basics", "Tracking/UTM plan"],
  },
  {
    id: "design",
    title: "Design System",
    pill: "UI/UX",
    desc: "Tipografija, spacing, UI kit. Sve izgleda kao brend, ne kao template.",
    bullets: ["Typography scale", "Component kit", "Layout rhythm", "Brand consistency"],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.10),transparent_55%)]" />
          <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%224%22 height=%224%22%3E%3Cpath d=%22M0 0h1v1H0zM2 2h1v1H2z%22 fill=%22white%22 opacity=%220.45%22/%3E%3C/svg%3E')]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.90)_78%)]" />
        </div>

        <div className="mx-auto w-[min(1100px,92%)] pt-28 pb-14 relative">
          <p className="text-xs uppercase tracking-[0.35em] text-white/45">
            Services
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.02]">
            Usluge koje{" "}
            <span className="relative inline-block">
              <span className="absolute -inset-2 rounded-2xl bg-white/5 blur-xl" />
              <span className="relative">izgledaju skupo</span>
            </span>
            .
          </h1>

          <p className="mt-6 max-w-2xl text-white/60 text-lg leading-relaxed">
            Minimalno “priče”. Maksimalno rezultat + osjećaj kvalitete. Sve što
            radimo je performance-first, SEO-ready i motion-polished.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-3 rounded-full bg-white text-black px-6 py-3 font-semibold
              hover:opacity-90 transition overflow-hidden"
            >
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-black/0 via-black/10 to-black/0" />
              <span className="relative">Get a Quote</span>
              <span className="relative transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl px-6 py-3
              text-white/80 hover:text-white hover:border-white/30 transition"
            >
              View Work <span className="opacity-70">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* DECK (isto kao slika 1, samo na services page) */}
      <section className="bg-black text-white">
        <div className="mx-auto w-[min(1100px,92%)] pb-16">
          <div className="grid md:grid-cols-2 gap-6">
            {items.map((it) => (
              <a
                key={it.id}
                href={`#${it.id}`}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7
                hover:bg-white/10 hover:border-white/20 transition"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700
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

                <div className="absolute left-8 right-8 bottom-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILS (premium sekcije, ne plain tekst) */}
      <section className="bg-black text-white">
        <div className="mx-auto w-[min(1100px,92%)] pb-24">
          <div className="space-y-12">
            {items.map((it) => (
              <div
                key={it.id}
                id={it.id}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                  <div className="max-w-2xl">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                      {it.pill}
                    </p>
                    <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">
                      {it.title}
                    </h2>
                    <p className="mt-4 text-white/60 leading-relaxed">
                      {it.desc}
                    </p>
                  </div>

                  <div className="w-full md:max-w-sm">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                      Included
                    </p>
                    <ul className="mt-4 space-y-2 text-white/70">
                      {it.bullets.map((b) => (
                        <li key={b}>• {b}</li>
                      ))}
                    </ul>

                    <Link
                      href={`/contact?service=${encodeURIComponent(it.title)}`}
                      className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white text-black px-6 py-3 font-semibold hover:opacity-90 transition"
                    >
                      Start {it.title} →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA bottom */}
          <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 text-center">
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Ready to build something premium?
            </h3>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              Pošalji brief. Dobićeš plan, cijenu i timeline — bez gluposti.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white text-black px-7 py-3 font-semibold hover:opacity-90 transition"
              >
                Contact → 
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-white/80 hover:text-white hover:border-white/30 transition"
              >
                See work →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}