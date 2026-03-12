import Link from "next/link";

export const metadata = { title: "Studio — Digital & Social" };

export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* HERO */}
      <section className="mx-auto w-[min(1100px,92%)] pt-28 pb-14">
        <p className="text-xs uppercase tracking-[0.35em] text-white/45">
          Studio
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.02]">
          Gradimo web stranice koje izgledaju premium i donose rezultate.
        </h1>

        <p className="mt-6 max-w-3xl text-white/60 text-lg leading-relaxed">
          Digital & Social je studio fokusiran na moderne web stranice,
          booking sustave, landing stranice i digitalna rješenja za restorane,
          apartmane, vile i brendove koji žele profesionalan nastup online.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Pill>Web dizajn</Pill>
          <Pill>Booking sustavi</Pill>
          <Pill>Landing stranice</Pill>
          <Pill>SEO optimizacija</Pill>
          <Pill>Vizualni identitet</Pill>
        </div>
      </section>

      {/* TRUST */}
      <section className="mx-auto w-[min(1100px,92%)] pb-20">
        <p className="text-xs uppercase tracking-[0.35em] text-white/45">
          Radimo za
        </p>

        <div className="card-ui card-glow mt-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <Client>Restorani</Client>
            <Client>Apartmani</Client>
            <Client>Hoteli</Client>
            <Client>Turizam</Client>
            <Client>Startupi</Client>
            <Client>Brendovi</Client>
            <Client>Bookinzi</Client>
            <Client>Digitalni projekti</Client>
          </div>
        </div>
      </section>

      {/* VALUES + PROCESS */}
      <section className="mx-auto w-[min(1100px,92%)] pb-20">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* VALUES */}
          <div className="card-ui lg:col-span-5 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-white/45">
              Vrijednosti
            </p>

            <div className="mt-6 space-y-6">
              <ValueItem
                title="Brzina i jednostavnost"
                text="Stranica mora biti brza, pregledna i jednostavna za korištenje."
              />
              <ValueItem
                title="Premium dojam"
                text="Moderan dizajn, dobar raspored i profesionalan vizualni identitet."
              />
              <ValueItem
                title="Fokus na rezultat"
                text="Cilj nije samo lijepa stranica, nego više upita, rezervacija i klijenata."
              />
            </div>
          </div>

          {/* PROCESS */}
          <div className="card-ui lg:col-span-7 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-white/45">
              Proces rada
            </p>

            <div className="mt-6 space-y-6">
              <Step n="01" title="Dogovor i analiza">
                Definiramo cilj stranice, publiku i što točno treba postići.
              </Step>

              <Step n="02" title="Struktura i dizajn">
                Slažemo raspored sekcija, vizualni smjer i korisničko iskustvo.
              </Step>

              <Step n="03" title="Izrada i optimizacija">
                Gradimo stranicu, prilagođavamo je za mobitele i optimiziramo brzinu.
              </Step>

              <Step n="04" title="Objava i daljnji razvoj">
                Stranica ide online i spremna je za nove upite, rezervacije i prodaju.
              </Step>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="button-ui inline-flex items-center gap-2 rounded-full bg-white text-black px-7 py-3 font-semibold hover:opacity-90 transition"
              >
                Započni projekt →
              </Link>

              <Link
                href="/work"
                className="button-ui inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-white/80 hover:text-white hover:border-white/30 transition"
              >
                Pogledaj projekte →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BIG CTA */}
      <section className="mx-auto w-[min(1100px,92%)] pb-24">
        <div className="card-ui rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-12 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-white/45">
            Sljedeći korak
          </p>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold">
            Trebaš web stranicu koja izgleda profesionalno?
          </h2>

          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            Ako želiš moderan web koji ostavlja dobar dojam i vodi korisnike
            prema upitu, rezervaciji ili kupnji, krenimo raditi.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="button-ui rounded-full bg-white text-black px-8 py-3 font-semibold hover:opacity-90 transition"
            >
              Kontaktiraj nas →
            </Link>

            <Link
              href="/services"
              className="button-ui rounded-full border border-white/20 px-8 py-3 text-white/80 hover:text-white hover:border-white/40 transition"
            >
              Pogledaj usluge →
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-sm rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/75">
      {children}
    </span>
  );
}

function Client({ children }: { children: React.ReactNode }) {
  return (
    <div className="card-ui h-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-white/60 hover:text-white transition">
      {children}
    </div>
  );
}

function ValueItem({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <p className="text-lg font-semibold">{title}</p>
      <p className="mt-2 text-white/60">{text}</p>
    </div>
  );
}

function Step({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card-ui flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center shrink-0">
        {n}
      </div>

      <div>
        <p className="text-xl font-semibold">{title}</p>
        <p className="mt-2 text-white/60">{children}</p>
      </div>
    </div>
  );
}