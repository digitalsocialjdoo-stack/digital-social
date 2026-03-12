import Link from "next/link";

export default function BigCTA() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto w-[min(1100px,92%)] pb-24">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-10 md:p-14">
          <div className="absolute inset-0 opacity-60 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(255,255,255,0.10),transparent_60%)]" />
          <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%224%22 height=%224%22%3E%3Cpath d=%22M0 0h1v1H0zM2 2h1v1H2z%22 fill=%22white%22 opacity=%220.45%22/%3E%3C/svg%3E')]" />

          <div className="relative">
            <p className="text-xs uppercase tracking-[0.35em] text-white/45">
              Let’s build
            </p>
            <h2 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
              Ready to look premium and convert?
            </h2>
            <p className="mt-5 max-w-2xl text-white/60 text-lg leading-relaxed">
              Pošalji brief. Dobijaš plan + cijenu + timeline. Brzo, jasno, bez
              gluposti.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white text-black px-7 py-3 font-semibold hover:opacity-90 transition"
              >
                Start a project →
              </Link>

              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3
                text-white/80 hover:text-white hover:border-white/30 transition"
              >
                See work →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}