"use client";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/385976008892?text=Pozdrav,%20želim%20više%20informacija%20o%20izradi%20web%20stranice."
      target="_blank"
      rel="noopener noreferrer"
      className="button-ui fixed bottom-5 right-5 z-[999] inline-flex items-center gap-3 rounded-full border border-white/15 bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
      aria-label="WhatsApp kontakt"
    >
      <span>💬</span>
      <span>WhatsApp</span>
    </a>
  );
}