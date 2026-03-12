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
        { y: 22, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: root,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ".hero-img",
        { scale: 1.06, opacity: 0.9 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".hero-img",
            start: "top 80%",
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
            image: project.image,
          },
        ];

  return (
    <div ref={rootRef} className="mx-auto w-[min(1100px,92%)]">
      <div className="flex items-center justify-between">
        <BackButton fallback="/work" label="Nazad" />
        <span className="text-xs uppercase tracking-[0.28em] text-white/40">
          Projekt
        </span>
      </div>

      <div className="mt-10 grid items-start gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h1 className="reveal text-4xl font-extrabold leading-[1.02] tracking-tight md:text-6xl">
            {project.title}
          </h1>

          <p className="reveal mt-5 text-lg leading-relaxed text-white/60">
            {project.subtitle}
          </p>

          <div className="reveal card-ui mt-10 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">
              Pregled
            </p>
            <p className="mt-3 leading-relaxed text-white/70">{overviewText}</p>
          </div>

          <Link
            href="/contact"
            className="reveal button-ui mt-10 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:opacity-90"
          >
            Započni projekt →
          </Link>
        </div>

        <aside className="space-y-6 lg:col-span-5 lg:sticky lg:top-24">
          <div className="hero-img card-ui relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
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

          <div className="reveal card-ui rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">
              Tehnologija
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="reveal card-ui rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
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
        <div className="reveal flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">
              Priča projekta
            </p>
            <h3 className="mt-3 text-2xl font-semibold md:text-3xl">
              Istraži projekt →
            </h3>
            <p className="mt-3 max-w-xl text-white/55">
              Istraži ključne dijelove dizajna i korisničkog iskustva.
            </p>
          </div>

          <p className="hidden text-sm text-white/50 md:block">
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
            />
          ))}
        </div>
      </div>

      <div className="mt-14 grid gap-6 pb-10 md:grid-cols-2">
        {prevSlug ? (
          <Link
            href={`/work/${prevSlug}`}
            className="reveal card-ui group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">
              Prethodni projekt
            </p>
            <p className="mt-3 text-2xl font-semibold text-white/90 group-hover:text-white">
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
            className="reveal card-ui group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">
              Sljedeći projekt
            </p>
            <p className="mt-3 text-2xl font-semibold text-white/90 group-hover:text-white">
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

      <div className="flex justify-center pb-20">
        <BackButton fallback="/work" label="Nazad" />
      </div>
    </div>
  );
}

function StoryShot({
  k,
  title,
  text,
  image,
}: {
  k: string;
  title: string;
  text: string;
  image: string;
}) {
  return (
    <div className="card-ui card-glow min-w-[78vw] overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl md:min-w-[44vw]">
      <div className="relative h-[340px] md:h-[380px]">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_20%_10%,rgba(255,255,255,0.12),transparent_60%)] opacity-50" />

        <div className="absolute left-6 top-6">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/70">
            {k}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-7">
          <h4 className="text-2xl font-semibold leading-tight md:text-3xl">
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