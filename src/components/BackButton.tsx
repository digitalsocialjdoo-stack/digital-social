"use client";

import { useRouter } from "next/navigation";

export default function BackButton({ fallback = "/work" }: { fallback?: string }) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        if (window.history.length > 1) router.back();
        else router.push(fallback);
      }}
      className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-full
      border border-white/15 bg-white/5 backdrop-blur-xl
      text-white/80 hover:text-white transition-all duration-300
      hover:border-white/40 hover:bg-white/10 overflow-hidden"
    >
      <span
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
        bg-gradient-to-r from-white/10 via-white/5 to-white/10 blur-xl"
      />
      <span className="relative">←</span>
      <span className="relative text-sm font-medium tracking-wide">Nazad</span>
    </button>
  );
}