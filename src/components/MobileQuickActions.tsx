"use client";

export default function MobileQuickActions() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
      <div className="flex items-center gap-3 rounded-full border border-white/10 bg-black/70 backdrop-blur-xl px-3 py-3 shadow-[0_20px_80px_-30px_rgba(0,0,0,0.9)]">
        <a
          href="tel:+385976008892"
          className="inline-flex items-center justify-center rounded-full bg-white text-black px-5 py-3 font-semibold hover:opacity-90 transition"
        >
          Call
        </a>

        <a
          href="https://wa.me/385976008892"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-white/85 hover:text-white hover:border-white/30 transition"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}