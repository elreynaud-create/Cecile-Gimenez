"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowIcon } from "./arrow-icon";

const links = [
  ["01", "Accompagnements", "/accompagnements"],
  ["02", "Retraites", "/retraites"],
  ["03", "Formations", "/formations"],
  ["04", "À propos", "/a-propos"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", close);
    };
  }, [open]);

  return (
    <>
      <header className={`site-header${open ? " menu-open" : ""}`}>
        <div className="brand">
          <Link href="/" className="brand__desktop-mark" aria-label="Accueil">
            <span className="brand__mark">C</span>
          </Link>
          <button
            className="brand__menu"
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="brand__mark">C</span>
            <span className="brand__menu-hint" aria-hidden="true">Touchez pour ouvrir</span>
          </button>
          <Link href="/" aria-label="Accueil">
            <strong>Cécile Gimenez</strong>
            <small>Psychanalyste</small>
          </Link>
        </div>
        <nav aria-label="Navigation principale">
          {links.map(([, label, href]) => <Link href={href} key={href}>{label}</Link>)}
        </nav>
        <Link href="/rendez-vous" className="nav-cta">Rendez-vous <ArrowIcon /></Link>
      </header>

      <button
        className={`mobile-menu__backdrop${open ? " is-open" : ""}`}
        type="button"
        aria-label="Fermer le menu"
        tabIndex={open ? 0 : -1}
        onClick={() => setOpen(false)}
      />
      <aside id="mobile-navigation" className={`mobile-menu${open ? " is-open" : ""}`} aria-hidden={!open}>
        <p className="eyebrow">Explorer</p>
        <nav aria-label="Menu mobile">
          {links.map(([number, label, href]) => (
            <Link href={href} key={href} tabIndex={open ? 0 : -1}>
              <span>{number}</span>
              <strong>{label}</strong>
              <ArrowIcon />
            </Link>
          ))}
        </nav>
        <div className="mobile-menu__footer">
          <a href="tel:+33625936035">06 25 93 60 35</a>
          <Link href="/rendez-vous" tabIndex={open ? 0 : -1}>Prendre rendez-vous <ArrowIcon /></Link>
        </div>
      </aside>
    </>
  );
}
