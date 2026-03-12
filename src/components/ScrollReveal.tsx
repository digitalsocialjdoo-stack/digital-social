"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal() {
  useEffect(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".service-card");

    gsap.fromTo(
      cards,
      { y: 30, opacity: 0, filter: "blur(6px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: "#services",
          start: "top 70%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}