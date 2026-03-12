import Link from "next/link";

export const metadata = { title: "Usluge — Digital & Social" };

export default function ServicesPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <section className="mx-auto w-[min(1100px,92%)] pt-28 pb-14">
        <p className="text-xs uppercase tracking-[0.35em] text-white/45">
          Usluge
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight">
          Web stranice koje izgledaju vrhunski i donose rezultate.
        </h1>

        <p className="mt-6 max-w-3xl text-white/60 text-lg leading-relaxed">
          Izrađujemo moderne web stranice, booking sustave, landing stranice i
          vizualna rješenja s fokusom na brzinu, korisničko iskustvo i prodaju.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white text-black px-7 py-3 font-semibold hover:opacity-90 transition"
          >
            Započni projekt →
          </Link>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3
            text-white/80 hover:text-white hover:border-white/30 transition"
          >
            Pogledaj projekte →
          </Link>
        </div>
      </section>

      <section className="mx-auto w-[min(1100px,92%)] pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          <ServiceCard
            n="01"
            title="Izrada web stranica"
            desc="Brze, moderne i profesionalne web stranice prilagođene tvom brendu i poslovanju."
            bullets={[
              "prilagodba za mobitele i tablete",
              "moderan i pregledan dizajn",
              "brzo učitavanje stranice",
            ]}
          />

          <ServiceCard
            n="02"
            title="Booking i rezervacije"
            desc="Jednostavni sustavi za rezervaciju apartmana, vila, hotela i usluga."
            bullets={[
              "jasan prikaz smještaja ili ponude",
              "lakši pregled termina",
              "jednostavniji proces rezervacije",
            ]}
          />

          <ServiceCard
            n="03"
            title="Landing stranice za prodaju"
            desc="Stranice fokusirane na upite, rezervacije, prijave korisnika i veću konverziju."
            bullets={[
              "jasna struktura sadržaja",
              "fokus na prodaju i konverziju",
              "prilagođeno kampanjama i oglašavanju",
            ]}
          />

          <ServiceCard
            n="04"
            title="SEO i optimizacija"
            desc="Optimizacija stranice kako bi bila brža, preglednija i vidljivija na Googleu."
            bullets={[
              "osnovna SEO optimizacija",
              "bolja struktura sadržaja",
              "optimizacija brzine i korisničkog iskustva",
            ]}
          />
        </div>
      </section>

      <section className="mx-auto w-[min(1100px,92%)] pb-20">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-10 md:p-14">
          <p className="text-xs uppercase tracking-[0.35em] text-white/45">
            Proces rada
          </p>

          <div className="mt-8 grid md:grid-cols-4 gap-6">
            <Step
              n="01"
              title="Dogovor"
              text="Definiramo cilj, ponudu i izgled stranice."
            />
            <Step
              n="02"
              title="Dizajn"
              text="Slažemo strukturu, vizualni identitet i korisničko iskustvo."
            />
            <Step
              n="03"
              title="Izrada"
              text="Gradimo stranicu, optimiziramo je i testiramo."
            />
            <Step
              n="04"
              title="Objava"
              text="Stranica ide online i spremna je za klijente."
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(1100px,92%)] pb-20">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-10 md:p-14">
          <div className="absolute inset-0 opacity-60 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(255,255,255,0.10),transparent_60%)]" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.35em] text-white/45">
              Sljedeći korak
            </p>

            <h2 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
              Trebaš web stranicu koja izgleda profesionalno?
            </h2>

            <p className="mt-5 max-w-2xl text-white/60 text-lg">
              Javi se i zajedno ćemo složiti rješenje koje odgovara tvom poslu.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white text-black px-7 py-3 font-semibold hover:opacity-90 transition"
              >
                Kontaktiraj nas →
              </Link>

              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3
                text-white/80 hover:text-white hover:border-white/30 transition"
              >
                Pogledaj projekte →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto w-[min(1100px,92%)] py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/50">
          <div>© {new Date().getFullYear()} Digital & Social</div>

          <div className="flex gap-6">
            <Link href="/">Početna</Link>
            <Link href="/work">Projekti</Link>
            <Link href="/contact">Kontakt</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ServiceCard({
  n,
  title,
  desc,
  bullets,
}: {
  n: string;
  title: string;
  desc: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.28em] text-white/45">
          {n}
        </span>
        <span className="text-xs uppercase tracking-[0.28em] text-white/45">
          Usluga
        </span>
      </div>

      <h3 className="mt-5 text-2xl font-semibold">{title}</h3>
      <p className="mt-3 text-white/60">{desc}</p>

      <div className="mt-6 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <ul className="mt-6 space-y-2 text-white/70">
        {bullets.map((b) => (
          <li key={b}>• {b}</li>
        ))}
      </ul>
    </div>
  );
}

function Step({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <div className="card-ui card-glw rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="text-xs uppercase tracking-[0.28em] text-white/45">
        {n}
      </div>
      <div className="mt-3 text-lg font-semibold">{title}</div>
      <p className="mt-2 text-white/60 text-sm">{text}</p>
    </div>
  );
}