import Link from "next/link";

export const metadata = { title: "Kontakt — Digital & Social" };

export default function ContactPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="mx-auto w-[min(1100px,92%)] pt-28 pb-14">
        <p className="text-xs uppercase tracking-[0.35em] text-white/45">
          Kontakt
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight">
          Pokrenimo projekt.
        </h1>

        <p className="mt-6 max-w-3xl text-white/60 text-lg leading-relaxed">
          Pošalji kratki brief. Dobit ćeš jasan odgovor: plan, cijenu i okvirni rok.
        </p>
      </section>

      {/* GRID */}
      <section className="mx-auto w-[min(1100px,92%)] pb-20">

        <div className="grid lg:grid-cols-12 gap-8 items-start">

          {/* LEFT INFO */}
          <div className="lg:col-span-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

            <p className="text-xs uppercase tracking-[0.35em] text-white/45">
              Kontakt podaci
            </p>

            <div className="mt-6 space-y-6">

              <InfoRow
                title="Email"
                value="info@digitalisocial.com"
              />

              <InfoRow
                title="Lokacija"
                value="Istra, Hrvatska"
              />

              <InfoRow
                title="Telefon"
                value="+385 97 600 8692"
              />

              <InfoRow
                title="WhatsApp"
                value="Brzi chat dostupan"
              />

            </div>

            {/* CALL / WHATSAPP */}
            <div className="mt-6 flex flex-wrap gap-3">

              <a
                href="tel:+385976008692"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/85 transition hover:border-white/20 hover:bg-white hover:text-black"
              >
                Nazovi nas
              </a>

              <a
                href="https://wa.me/385976008692"
                target="_blank"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/85 transition hover:border-white/20 hover:bg-white hover:text-black"
              >
                WhatsApp
              </a>

            </div>

            <div className="mt-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            <div className="mt-8">

              <p className="text-sm text-white/55">
                Najbrži odgovor dobiješ ako napišeš:
              </p>

              <ul className="mt-4 space-y-2 text-white/70">
                <li>• što želiš napraviti</li>
                <li>• okvirni rok</li>
                <li>• okvirni budžet</li>
              </ul>

            </div>

          </div>

          {/* FORM */}
          <div className="lg:col-span-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10">

            <p className="text-xs uppercase tracking-[0.35em] text-white/45">
              Upit za projekt
            </p>

            <form
              action="https://formspree.io/f/mnjgvqal"
              method="POST"
              className="mt-8 space-y-6"
            >

              <div className="grid md:grid-cols-2 gap-6">

                <Field
                  label="Ime"
                  name="name"
                  placeholder="Tvoje ime"
                />

                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="email@example.com"
                />

              </div>

              <div className="grid md:grid-cols-2 gap-6">

                <Field
                  label="Tvrtka / Brand"
                  name="company"
                  placeholder="Naziv tvrtke"
                />

                <Field
                  label="Budžet"
                  name="budget"
                  placeholder="npr. 1500€ – 5000€"
                />

              </div>

              <div className="grid md:grid-cols-2 gap-6">

                <Field
                  label="Rok"
                  name="timeline"
                  placeholder="npr. 2–4 tjedna"
                />

                <Field
                  label="Usluga"
                  name="service"
                  placeholder="Web / SEO / Dizajn"
                />

              </div>

              <div>

                <label className="block text-sm text-white/70 mb-2">
                  Detalji projekta
                </label>

                <textarea
                  name="message"
                  placeholder="Opiši projekt, cilj i što želiš postići..."
                  className="w-full min-h-[180px] rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white placeholder:text-white/30 outline-none focus:border-white/25 transition"
                />

              </div>

              <div className="flex flex-wrap items-center gap-4">

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-black px-7 py-3 font-semibold hover:opacity-90 transition"
                >
                  Pošalji upit →
                </button>

                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-white/80 hover:text-white hover:border-white/30 transition"
                >
                  Pogledaj projekte →
                </Link>

              </div>

            </form>

          </div>

        </div>

      </section>

    </main>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-sm text-white/70 mb-2">
        {label}
      </label>

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white placeholder:text-white/30 outline-none focus:border-white/25 transition"
      />
    </div>
  );
}

function InfoRow({ title, value }: { title: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.28em] text-white/45">
        {title}
      </p>

      <p className="mt-2 text-white/80">
        {value}
      </p>
    </div>
  );
}
