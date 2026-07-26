"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const REVEAL_SELECTOR = [
  ".section .eyebrow",
  ".section h2",
  ".section-heading__split > p",
  ".intro__aside",
  ".intro__visual",
  ".intro__text",
  ".signals__heading > *",
  ".signals__list article",
  ".practice-card",
  ".method__aside",
  ".method__steps article",
  ".retreat-feature__image",
  ".retreat-feature__copy > *",
  ".two-col > *",
  ".first-session__grid > div",
  ".appointment__inner > div",
  ".page-hero .shell > *",
  ".service-row",
  ".gallery > *",
  ".retreat-intro > *",
  ".ritual-grid > div",
  ".training-grid article",
  ".manifesto .shell > *",
  ".about-grid > *",
  ".contact-grid > *",
  ".footer-grid > div",
  ".footer-bottom",
].join(",");

const STAGGER_GROUPS = [
  ".signals__list",
  ".practice-grid",
  ".method__steps",
  ".ritual-grid",
  ".training-grid",
  ".footer-grid",
];

export default function MotionLayer() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");

    const items = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
    const groups = STAGGER_GROUPS.flatMap((selector) =>
      Array.from(document.querySelectorAll<HTMLElement>(`${selector} > *`)),
    );

    items.forEach((element) => element.classList.add("scroll-reveal"));

    groups.forEach((element) => {
      const siblings = Array.from(element.parentElement?.children ?? []);
      element.style.setProperty("--reveal-order", String(siblings.indexOf(element)));
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -9% 0px", threshold: 0.12 },
    );

    items.forEach((element) => observer.observe(element));

    const progress = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      root.style.setProperty("--scroll-progress", String(available > 0 ? window.scrollY / available : 0));
    };

    progress();
    window.addEventListener("scroll", progress, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", progress);
      root.classList.remove("motion-ready");
    };
  }, [pathname]);

  return <div className="scroll-progress" aria-hidden="true" />;
}
