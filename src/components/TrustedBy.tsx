export default function TrustedBy() {
  const logos = [
    "Robinson",
    "Labineca",
    "Hotel",
    "Restaurant",
    "Digital",
    "Social",
    "Istra",
    "Booking",
  ];

  return (
    <section className="bg-black text-white">
      <div className="mx-auto w-[min(1100px,92%)] py-16">
        <p className="text-xs uppercase tracking-[0.35em] text-white/45">
          Trusted by
        </p>

        <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {logos.map((name) => (
              <span
                key={name}
                className="text-sm md:text-base font-semibold tracking-tight text-white/55 hover:text-white/80 transition"
              >
                {name}
              </span>
            ))}
          </div>

          <div className="mt-6 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          <p className="mt-5 text-center text-sm text-white/45">
            (Ovdje kasnije ubacujemo prave logotipe/brandove.)
          </p>
        </div>
      </div>
    </section>
  );
}