"use client";

import { useRouter } from "next/navigation";

type BackButtonProps = {
  fallback?: string;
  label?: string;
};

export default function BackButton({
  fallback = "/",
  label = "Nazad",
}: BackButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(fallback)}
      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-white/80 transition hover:border-white/30 hover:text-white"
    >
      ← {label}
    </button>
  );
}
