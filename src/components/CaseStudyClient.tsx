"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import BackButton from "./BackButton";

gsap.registerPlugin(ScrollTrigger);

type StoryItem = {
  k: string;
  title: string;
  text: string;
  image?: string;
};

type Project = {
  title: string;
  subtitle: string;
  image: string;
  stack: string[];
  results: string[];
  overview?: string;
  story?: StoryItem[];
};

export default function CaseStudyClient({
  project,
  prevSlug,
  nextSlug,
}: {
  project: Project;
  prevSlug: string | null;
  nextSlug: string | null;
}) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const storyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".reveal");

      gsap.fromTo(
        items,
        { y: 30, opacity: 0, filter: "blur(12px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: root,
            start: "top 75%",
          },
        }
      );
    }, root);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  useEffect(() => {
    const el = storyRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (e.shiftKey) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const overviewText =
    project.overview ||
    "Ovaj projekt fokusiran je na jasno korisničko iskustvo, moderan dizajn i bolju prezentaciju usluge. Cilj je bio stvoriti bržu, pregledniju i učinkovitiju stranicu koja korisnika lakše vodi do željene radnje.";

  const storyItems =
    project.story && project.story.length > 0
      ? project.story
      : [
          {
            k: "Projekt",
            title: "Jasna struktura",
            text: "Sadržaj je organiziran tako da korisnik lakše dolazi do informacija.",
            image: project.image,
          },
          {
            k: "UX",
            title: "Bolje iskustvo",
            text: "Moderniji raspored elemenata i jednostavnije korištenje stranice.",
            image: project.image,
          },
          {
            k: "Dizajn",
            title: "Snažniji dojam",
            text: "Vizualni identitet podiže profesionalnost i vrijednost brenda.",
            image: project.image,
          },
          {
            k: "Rezultat",
            title: "Veća učinkovitost",
            text: "Stranica jasnije vodi korisnika prema upitu, rezervaciji ili kupnji.",
            image: p1.png.image,
          },
        ];

  const handleGlowMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
  };

  return (
    <div ref={rootRef} className="container-main pt-24 md:pt-28">
      <div className="flex items-center justify-between gap-4">
        <BackButton fallback="/work" />
        <span className="text-xs uppercase tracking-[0.28em] text-white/40">
          Projekt
        </span>
      </div>

      <div className="mt-10 grid lg:grid-cols-12 gap-8 md:gap-10 items-start">
        <div className="lg:col-span-7">
          <h1 className="reveal text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.02]">
            {project.title}
          </h1>

          <p className="reveal mt-5 text-white/60 text-base md:text-lg leading-relaxed">
            {project.subtitle}
          </p>

          <div
            onMouseMove={handleGlowMove}
            className="reveal card-ui card-glow mt-8 md:mt-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6 md:p-7"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">
              Pregled
            </p>
            <p className="mt-3 text-white/70 leading-relaxed">{overviewText}</p>
          </div>

          <Link
            href="/contact"
            className="reveal button-ui inline-flex mt-8 md:mt-10 items-center gap-2 rounded-full bg-white text-black px-6 py-3 font-semibold hover:opacity-90 transition"
          >
            Započni projekt →
          </Link>
        </div>

        <aside className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
          <div
            onMouseMove={handleGlowMove}
            className="hero-img card-ui card-glow relative overflow-hidden rounded-3xl border border-white/10 bg-white/5"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </div>
          </div>

          <div
            onMouseMove={handleGlowMove}
            className="reveal card-ui card-glow rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">
              Tehnologija
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="text-sm rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/80"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div
            onMouseMove={handleGlowMove}
            className="reveal card-ui card-glow rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">
              Rezultati
            </p>
            <ul className="mt-4 space-y-2 text-white/70">
              {project.results.map((r) => (
                <li key={r}>• {r}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <div className="mt-14">
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">
              Priča projekta
            </p>
            <h3 className="mt-3 text-2xl md:text-3xl font-semibold">
              Istraži projekt →
            </h3>
            <p className="mt-3 text-white/55 max-w-xl">
              Istraži ključne dijelove dizajna i korisničkog iskustva.
            </p>
          </div>

          <p className="hidden md:block text-sm text-white/50">
            Pomak mišem = pregled projekta
          </p>
        </div>

        <div
          ref={storyRef}
          className="reveal mt-6 flex gap-5 overflow-x-auto overflow-y-hidden scroll-smooth pb-4"
        >
          {storyItems.map((item, index) => (
            <StoryShot
              key={`${item.k}-${index}`}
              k={item.k}
              title={item.title}
              text={item.text}
              image={item.image || project.image}
              onMouseMove={handleGlowMove}
            />
          ))}
        </div>
      </div>

      <div className="mt-14 pb-10 grid md:grid-cols-2 gap-6">
        {prevSlug ? (
          <Link
            href={`/work/${prevSlug}`}
            onMouseMove={handleGlowMove}
            className="reveal card-ui card-glow group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">
              Prethodni projekt
            </p>
            <p className="mt-3 text-xl md:text-2xl font-semibold text-white/90 group-hover:text-white">
              ← {formatSlug(prevSlug)}
            </p>
            <div className="mt-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <p className="mt-5 text-sm text-white/60">
              Vrati se na prethodni projekt.
            </p>
          </Link>
        ) : (
          <div />
        )}

        {nextSlug ? (
          <Link
            href={`/work/${nextSlug}`}
            onMouseMove={handleGlowMove}
            className="reveal card-ui card-glow group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">
              Sljedeći projekt
            </p>
            <p className="mt-3 text-xl md:text-2xl font-semibold text-white/90 group-hover:text-white">
              {formatSlug(nextSlug)} →
            </p>
            <div className="mt-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <p className="mt-5 text-sm text-white/60">
              Nastavi na sljedeći projekt.
            </p>
          </Link>
        ) : (
          <div />
        )}
      </div>

      <div className="pb-20 flex justify-center">
        <BackButton fallback="/work" />
      </div>
    </div>
  );
}

function StoryShot({
  k,
  title,
  text,
  image,
  onMouseMove,
}: {
  k: string;
  title: string;
  text: string;
  image: string;
  onMouseMove: (e: React.MouseEvent<HTMLElement>) => void;
}) {
  return (
    <div
      onMouseMove={onMouseMove}
      className="card-ui card-glow min-w-[86vw] sm:min-w-[78vw] md:min-w-[44vw] overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      <div className="relative h-[260px] sm:h-[320px] md:h-[380px]">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
        <div className="absolute inset-0 opacity-50 bg-[radial-gradient(800px_circle_at_20%_10%,rgba(255,255,255,0.12),transparent_60%)]" />

        <div className="absolute left-6 top-6">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/70">
            {k}
          </span>
        </div>

        <div className="absolute left-0 right-0 bottom-0 p-5 sm:p-6 md:p-7">
          <h4 className="text-2xl md:text-3xl font-semibold leading-tight">
            {title}
          </h4>
          <p className="mt-2 text-sm text-white/60">{text}</p>
        </div>
      </div>
    </div>
  );
}

function formatSlug(slug: string) {
  if (slug === "restaurant-platform") return "platforma za naručivanje hrane";
  if (slug === "hotel-booking-ui") return "vile i apartmani";
  if (slug === "luxury-brand-site") return "premium vizualni sustav";
  if (slug === "startup-landing") return "landing stranica za startup";
  return slug.replaceAll("-", " ");
}

