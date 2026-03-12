import Image from "next/image";
import Link from "next/link";

const projects = [
  { title: "Restaurant Platform", tag: "Web + SEO", image: "/work/p1.png", slug: "restaurant-platform" },
  { title: "Hotel Booking UI", tag: "UX / Development", image: "/work/p2.png", slug: "hotel-booking-ui" },
  { title: "Luxury Brand Site", tag: "Design + Motion", image: "/work/p3.png", slug: "luxury-brand-site" },
  { title: "Startup Landing", tag: "Growth + Web", image: "/work/p4.png", slug: "startup-landing" },
];

export default function WorkGrid() {
  return (
    <section className="mx-auto w-[min(1100px,92%)] pb-24">
      <div className="mt-10 grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/work/${p.slug}`}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
            </div>

            <div className="p-7">
              <p className="text-xs uppercase tracking-[0.3em] text-white/55">
                {p.tag}
              </p>
              <h3 className="mt-3 text-2xl font-semibold">{p.title}</h3>

              <div className="mt-6 inline-flex items-center gap-2 text-sm text-white/70">
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  View case
                </span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}