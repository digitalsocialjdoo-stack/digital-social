import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto w-[min(1100px,92%)] py-14">
        <div className="flex flex-col gap-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <div>© 2026 Digital & Social</div>

          <div className="flex items-center gap-8">
            <Link href="/" className="hover:text-white transition">
              Početna
            </Link>
            <Link href="/work" className="hover:text-white transition">
                Projekti  
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}