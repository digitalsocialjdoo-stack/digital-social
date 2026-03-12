import Hero from "../src/components/Hero";
import HorizontalWork from "../src/components/HorizontalWork";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Hero />

      <section className="container-main pt-10 pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Brza stranica"
            text="Brzo učitavanje i bolje korisničko iskustvo."
          />
          <StatCard
            title="Više upita"
            text="Jasna struktura koja vodi korisnika prema kontaktu."
          />
          <StatCard
            title="Moderan dizajn"
            text="Premium izgled prilagođen brendu i publici."
          />
          <StatCard
            title="SEO osnova"
            text="Bolja vidljivost na Googleu i lokalnim pretragama."
          />
        </div>
      </section>

      <HorizontalWork variant="home" />

      <section className="container-main pb-20">
        <div className="card-ui card-glow rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 md:p-12 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-white/45">
            Sljedeći korak
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Trebaš web stranicu koja izgleda profesionalno?
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-white/60 text-base md:text-lg">
            Ako želiš moderan web koji ostavlja dobar dojam i vodi korisnike
            prema upitu, rezervaciji ili kupnji, krenimo raditi.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="button-ui inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-black hover:opacity-90 transition"
            >
              Započni projekt →
            </a>

            <a
              href="/work"
              className="button-ui inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-white/80 hover:text-white hover:border-white/30 transition"
            >
              Pogledaj projekte →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function StatCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="card-ui card-glow rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-white/60">{text}</p>
    </div>
  );
}
