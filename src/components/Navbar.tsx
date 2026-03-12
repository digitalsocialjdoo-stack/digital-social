"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="container-main flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-sm sm:text-base font-semibold tracking-wide text-white"
        >
          Digital & Social
        </Link>

        <nav className="hidden md:flex items-center gap-8 whitespace-nowrap text-sm text-white/75">
          <Link href="/work" className="hover:text-white transition">
            Projekti
          </Link>
          <Link href="/services" className="hover:text-white transition">
            Usluge
          </Link>
          <Link href="/about" className="hover:text-white transition">
            Studio
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Kontakt
          </Link>
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="button-ui inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black hover:opacity-90 transition"
          >
            Započni projekt →
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80"
          aria-label="Otvori izbornik"
        >
          {open ? "Zatvori" : "Meni"}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/95">
          <div className="container-main py-4 flex flex-col gap-4 text-white/80">
            <Link href="/work" onClick={() => setOpen(false)}>
              Projekti
            </Link>
            <Link href="/services" onClick={() => setOpen(false)}>
              Usluge
            </Link>
            <Link href="/about" onClick={() => setOpen(false)}>
              Studio
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Kontakt
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="button-ui mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black"
            >
              Započni projekt →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
