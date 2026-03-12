"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PinnedSection() {
  const wrapRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!wrapRef.current) return;

    const ctx = gsap.context(() => {
      // PIN cijela sekcija (headline lijevo)
      ScrollTrigger.create({
        trigger: "#pinned",
        start: "top top",
        end: "+=1200",
        pin: true,
        scrub: true,
      });

      // Fade/slide itemi dok scrollaš
      const items = gsap.utils.toArray<HTMLElement>(".pin-item");

      gsap.fromTo(
        items,
        { y: 26, opacity: 0, filter: "blur(8px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.18,
          scrollTrigger: {
            trigger: "#pinned",
            start: "top 60%",
          },
        }
      );
    }, wrapRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      id="pinned"
      ref={(el) => {
        wrapRef.current = el;
      }}
      className="relative bg-black text-white"
    >
      <div className="mx-auto w-[min(1100px,92%)] py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          {/* LEFT: pinned headline */}
          <div className="md:sticky md:top-24">
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">
              Why us
            </p>
            <h2 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.02]">
              Dizajn koji izgleda
              <span className="block text-white/60 font-semibold">
                kao ozbiljan brend.
              </span>
            </h2>
            <p className="mt-6 text-white/60 leading-relaxed max-w-md">
              Ne radimo “samo lijepo”. Radimo sistem: performanse, motion, UX i
              SEO — sve podešeno da konvertuje.
            </p>
          </div>

          {/* RIGHT: items */}
          <div className="space-y-6">
            <div className="pin-item rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-xl font-semibold">Performance first</h3>
              <p className="mt-2 text-white/60 leading-relaxed">
                Core Web Vitals, SSR/streaming, optimizovane slike i fonts.
              </p>
            </div>

            <div className="pin-item rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-xl font-semibold">Cinematic motion</h3>
              <p className="mt-2 text-white/60 leading-relaxed">
                Framer za UI, GSAP za scroll. Smooth, bez “dječijih” efekata.
              </p>
            </div>

            <div className="pin-item rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-xl font-semibold">SEO that sells</h3>
              <p className="mt-2 text-white/60 leading-relaxed">
                Struktura, meta, sitemap, content model — da Google radi za tebe.
              </p>
            </div>

            <div className="pin-item rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-xl font-semibold">Scalable system</h3>
              <p className="mt-2 text-white/60 leading-relaxed">
                Komponente, design tokens i CMS-ready arhitektura.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}