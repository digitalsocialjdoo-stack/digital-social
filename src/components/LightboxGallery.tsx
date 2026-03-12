"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Item = { src: string; alt: string };

export default function LightboxGallery({ items }: { items: Item[] }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const current = useMemo(() => items[index], [items, index]);

  const close = () => setOpen(false);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, items.length]);

  return (
    <>
      {/* grid */}
      <div className="grid md:grid-cols-12 gap-4">
        {items.map((it, i) => (
          <button
            key={it.src}
            type="button"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            className={[
              "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5",
              "focus:outline-none focus:ring-2 focus:ring-white/30",
              i === 0 ? "md:col-span-7" : "md:col-span-5",
              i === 3 ? "md:col-span-12" : "",
            ].join(" ")}
          >
            <div className="relative aspect-[16/10] md:aspect-[16/9]">
              <Image
                src={it.src}
                alt={it.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent opacity-70" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-white/12 to-transparent" />
            </div>
          </button>
        ))}
      </div>

      {/* lightbox */}
      {open && current && (
        <div
          className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-md"
          onMouseDown={close}
        >
          <div
            className="absolute inset-0 mx-auto w-[min(1200px,92%)] py-10"
            onMouseDown={(e) => e.stopPropagation()}
          >
            {/* top bar */}
            <div className="flex items-center justify-between">
              <div className="text-xs uppercase tracking-[0.28em] text-white/50">
                Gallery • {index + 1}/{items.length}
              </div>

              <button
                type="button"
                onClick={close}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/80 hover:text-white hover:border-white/30 transition"
              >
                Close ✕
              </button>
            </div>

            {/* image */}
            <div className="mt-6 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <div className="relative aspect-[16/9]">
                <Image src={current.src} alt={current.alt} fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent" />
              </div>

              {/* controls */}
              <div className="absolute inset-y-0 left-0 flex items-center">
                <button
                  type="button"
                  onClick={prev}
                  className="m-3 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-white/80 hover:text-white hover:border-white/30 transition"
                >
                  ←
                </button>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center">
                <button
                  type="button"
                  onClick={next}
                  className="m-3 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-white/80 hover:text-white hover:border-white/30 transition"
                >
                  →
                </button>
              </div>
            </div>

            <p className="mt-4 text-white/60 text-sm">
              Tip: ESC zatvara, strelice mijenjaju.
            </p>
          </div>
        </div>
      )}
    </>
  );
}