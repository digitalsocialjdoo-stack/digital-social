"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/work", label: "Projekti" },
  { href: "/services", label: "Usluge" },
  { href: "/about", label: "Studio" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto w-[min(1100px,92%)]">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl">
          <nav className="grid grid-cols-3 items-center px-5 py-4">
            {/* LEFT: brand */}
            <div className="flex items-center">
              <Link
                href="/"
                className="text-sm font-semibold tracking-tight text-white/90 hover:text-white transition"
              >
                Digital&Social
              </Link>
            </div>

            {/* CENTER: nav */}
            <div className="flex items-center justify-center gap-2 md:gap-3">
              {links.map((l) => {
                const active = pathname === l.href || pathname.startsWith(l.href + "/");
                return (
                  <NavItem key={l.href} href={l.href} active={active}>
                    {l.label}
                  </NavItem>
                );
              })}
              {/* Contact kao tab (nije CTA), da ima smisla u navigaciji */}
              <NavItem
                href="/contact"
                active={pathname === "/contact"}
              >
                Kontakt
              </NavItem>
            </div>

            {/* RIGHT: CTA */}
            <div className="flex items-center justify-end">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 font-semibold
                hover:opacity-90 transition overflow-hidden"
              >
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-black/0 via-black/10 to-black/0" />
                <span className="relative">Započni projekt</span>
                <span className="relative transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

function NavItem({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={[
        "relative overflow-hidden rounded-full px-4 py-2 text-sm transition",
        "text-white/70 hover:text-white",
        "border border-transparent hover:border-white/15",
        "bg-transparent hover:bg-white/5",
        "active:scale-[0.98]",
        active ? "text-white border-white/15 bg-white/5" : "",
      ].join(" ")}
    >
      {/* shimmer sweep */}
      <span
        className={[
          "pointer-events-none absolute inset-0 opacity-0",
          "bg-gradient-to-r from-transparent via-white/20 to-transparent",
          "-translate-x-full hover:translate-x-full hover:opacity-100",
          "transition-all duration-700",
        ].join(" ")}
      />

      {/* active underline */}
      <span
        className={[
          "pointer-events-none absolute left-3 right-3 bottom-[6px] h-px",
          "bg-gradient-to-r from-transparent via-white/35 to-transparent",
          active ? "opacity-100" : "opacity-0",
          "transition-opacity duration-300",
        ].join(" ")}
      />

      <span className="relative">{children}</span>
    </Link>
  );
}