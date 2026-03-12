"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Tilt from "react-parallax-tilt";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Platforma za naručivanje hrane",
    tag: "Web + SEO",
    note: "Jednostavno online naručivanje za restorane i dostavu.",
    image: "/work/p1.png",
    slug: "restaurant-platform",
    badge: "Studija projekta",
  },
  {
    title: "Vile i apartmani",
    tag: "UX / Rezervacije",
    note: "Profesionalna prezentacija smještaja i jednostavan booking sustav.",
    image: "/work/p2.png",
    slug: "hotel-booking-ui",
    badge: "Rezervacije",
  },
  {
    title: "Premium vizualni sustav",
    tag: "Dizajn + Animacija",
    note: "Moderan vizualni identitet i luksuzan dojam brenda.",
    image: "/work/p3.png",
    slug: "luxury-brand-site",
    badge: "Vizualni identitet",
  },
  {
    title: "Landing stranica za startup",
    tag: "Web + Prodaja",
    note: "Stranica optimizirana za prijave korisnika i veću konverziju.",
    image: "/work/p4.png",
    slug: "startup-landing",
    badge: "Konverzije",
  },
];

export default function HorizontalWork({
  variant = "home",
}: {
  variant?: "home" | "work";
}) {
  const wrapRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const scroller = wrap.querySelector(".h-scroll") as HTMLElement | null;
    if (!scroller) return;

    const ctx = gsap.context(() => {
      const build = () => {
        const totalWidth = scroller.scrollWidth - window.innerWidth;
        if (totalWidth <= 0) return;

        gsap.set(scroller, { x: 0 });

        ScrollTrigger.getAll().forEach((t) => t.kill());

        gsap.to(scroller, {
          x: -totalWidth,
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top top",
            end: () => `+=${totalWidth}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => setProgress(self.progress),
          },
        });

        ScrollTrigger.refresh();
      };

      build();

      const onResize = () => build();
      window.addEventListener("resize", onResize);

      return () => window.removeEventListener("resize", onResize);
    }, wrap);

    return () => ctx.revert();
  }, []);

  const list = variant === "home" ? projects.slice(0, 3) : projects;

  const handleGlowMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
  };

  return (
    <section ref={wrapRef} className="relative bg-black text-white">
      <div className="mx-auto w-[min(1100px,92%)] pt-8 pb-8">
        <p className="text-xs uppercase tracking-[0.3em] text-white/45">
          Projekti
        </p>

        <h2 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
          Odabrani projekti
        </h2>

        <p className="mt-4 max-w-2xl text-white/60">
          Skrolaj dolje — projekti se pomiču horizontalno.
        </p>
      </div>

      <div className="h-scroll flex gap-8 px-[4vw] pb-14">
        {list.map((p) => (
          <Tilt
            key={p.slug}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable
            glareMaxOpacity={0.18}
            glareColor="white"
            glarePosition="all"
            scale={1.02}
            transitionSpeed={900}
            className="min-w-[82vw] md:min-w-[52vw]"
          >
            <Link
              href={`/work/${p.slug}`}
              onMouseMove={handleGlowMove}
              className="work-card card-ui card-glow group relative block overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="relative h-[66vh] w-full">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="work-card-media object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                <div className="work-card-overlay absolute inset-0 opacity-0 bg-gradient-to-br from-white/18 to-transparent" />

                <div className="absolute left-6 top-6">
                  <span className="inline-flex items-center rounded-full border border-white/15 bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/75 backdrop-blur-xl">
                    {p.badge}
                  </span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <p className="text-xs uppercase tracking-[0.3em] text-white/65">
                  {p.tag}
                </p>

                <h3 className="work-card-title mt-3 text-3xl md:text-4xl font-semibold">
                  {p.title}
                </h3>

                <p className="work-card-note mt-3 text-white/60">{p.note}</p>

                <div className="mt-7 inline-flex items-center gap-2 text-sm text-white/80">
                  <span>Pogledaj projekt</span>
                  <span className="work-card-arrow">→</span>
                </div>
              </div>
            </Link>
          </Tilt>
        ))}
      </div>

      <div className="h-[22vh]" />
    </section>
  );
}
