"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Hero() {
  const orb1 = useRef<HTMLDivElement | null>(null);
  const orb2 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;

      if (orb1.current) {
        orb1.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      if (orb2.current) {
        orb2.current.style.transform = `translate3d(${-x}px, ${-y}px, 0)`;
      }
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.10),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%224%22 height=%224%22%3E%3Cpath d=%22M0 0h1v1H0zM2 2h1v1H2z%22 fill=%22white%22 opacity=%220.45%22/%3E%3C/svg%3E')]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.85)_78%)]" />
      </div>

      {/* floating orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          ref={orb1}
          className="absolute -top-24 -left-24 h-[380px] w-[380px] rounded-full blur-3xl opacity-50 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_60%)]"
        />
        <div
          ref={orb2}
          className="absolute -bottom-28 -right-28 h-[460px] w-[460px] rounded-full blur-3xl opacity-40 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent_60%)]"
        />
      </div>

      <div className="relative mx-auto w-[min(1100px,92%)] pt-28 pb-20">
        <p className="text-xs uppercase tracking-[0.35em] text-white/50">
          Digital & Social • Web • Animacije • SEO
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.02]">
          Premium web stranice koje{" "}
          <span className="relative inline-block">
            <span className="absolute -inset-2 rounded-2xl bg-white/5 blur-xl" />
            <span className="relative">izgledaju vrhunski</span>
          </span>{" "}
          i donose klijente.
        </h1>

        <p className="mt-6 max-w-2xl text-white/60 text-lg leading-relaxed">
          Izrađujem web stranice u rangu velikih brendova: vrhunske animacije, brzina i SEO koji dovodi klijente.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:opacity-90 overflow-hidden"
          >
            <span className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-r from-black/0 via-black/10 to-black/0" />
            <span className="relative">Pokrenimo projekt</span>
            <span className="relative transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-white/80 backdrop-blur-xl transition hover:border-white/30 hover:text-white"
          >
            Pogledaj projekt <span className="opacity-70">→</span>
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          <Stat k="Brza stranica" v="Stranica se učitava za manje od 1 sekunde" />
          <Stat k="Učitavanje < 1s" v="Posjetitelji ne čekaju — sve radi odmah" />
          <Stat k="Više posjetitelja" v="SEO optimizacija za Google" />
          <Stat k="Više posjetitelja" v="Premium izgled i animacije" />
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
      <div className="text-2xl font-semibold">{k}</div>
      <div className="mt-1 text-sm text-white/55">{v}</div>
    </div>
  );
}