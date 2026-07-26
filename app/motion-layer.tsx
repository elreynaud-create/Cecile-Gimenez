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
  ".retreat-moments__heading > *",
  ".retreat-moment",
  ".ritual-grid > div",
  ".training-grid article",
  ".training-intro > *",
  ".training-signature__grid > div",
  ".training-program__head > *",
  ".training-modules article",
  ".training-method__heading > *",
  ".training-method__steps article",
  ".certification > *",
  ".training-audience__inner > *",
  ".annual-retreats__intro > *",
  ".session-card",
  ".immersive-program__head > *",
  ".experience-grid article",
  ".freedom-section > *",
  ".retreat-conversion__inner > *",
  ".retreat-conversion__copy > *",
  ".testimonials__head > *",
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

    const header = document.querySelector<HTMLElement>(".site-header");
    const mobile = window.matchMedia("(max-width: 560px)");
    let lastScrollY = window.scrollY;

    const updateHeader = () => {
      if (!header || !mobile.matches) {
        header?.classList.remove("is-hidden-mobile");
        lastScrollY = window.scrollY;
        return;
      }

      const currentScrollY = Math.max(window.scrollY, 0);
      const difference = currentScrollY - lastScrollY;

      if (currentScrollY <= 12) {
        header.classList.remove("is-hidden-mobile");
      } else if (difference > 7 && currentScrollY > 100) {
        header.classList.add("is-hidden-mobile");
      } else if (difference < -7) {
        header.classList.remove("is-hidden-mobile");
      }

      if (Math.abs(difference) > 7) lastScrollY = currentScrollY;
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    mobile.addEventListener("change", updateHeader);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", progress);
      window.removeEventListener("scroll", updateHeader);
      mobile.removeEventListener("change", updateHeader);
      header?.classList.remove("is-hidden-mobile");
      root.classList.remove("motion-ready");
    };
  }, [pathname]);

  return <div className="scroll-progress" aria-hidden="true" />;
}
