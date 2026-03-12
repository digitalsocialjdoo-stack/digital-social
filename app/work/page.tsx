import HorizontalWork from "../../src/components/HorizontalWork";
import Link from "next/link";

export const metadata = { title: "Projekti — Digital & Social" };

export default function WorkPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* intro */}
      <section className="mx-auto w-[min(1100px,92%)] pt-28 pb-8">
        <p className="text-xs uppercase tracking-[0.35em] text-white/45">
          Projekti
        </p>

        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              Odabrani projekti.
            </h1>

            <p className="mt-4 max-w-2xl text-white/60 text-lg">
              Pregled projekata i studija slučaja koje možeš otvoriti klikom na karticu.
            </p>
          </div>

          <Link
            href="/"
            className="text-sm text-white/60 hover:text-white transition"
          >
            ← Nazad na početnu
          </Link>
        </div>
      </section>

      <HorizontalWork variant="work" />
    </main>
  );
}