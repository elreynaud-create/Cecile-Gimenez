import Link from "next/link";
import { ArrowIcon } from "./arrow-icon";
import { SiteHeader } from "./site-header";
export { SiteHeader as Header };

export function Arrow() { return <ArrowIcon />; }

export function Footer() {
  return (
    <footer>
      <div className="shell footer-grid">
        <div className="brand brand--light"><span className="brand__mark">C</span><span><strong>Cécile Gimenez</strong><small>Psyché · Corps · Conscience</small></span></div>
        <div><p className="footer-title">Explorer</p><Link href="/accompagnements">Accompagnements</Link><Link href="/retraites">Retraites</Link><Link href="/formations">Formations</Link></div>
        <div><p className="footer-title">Cabinet</p><Link href="/a-propos">À propos</Link><Link href="/rendez-vous">Prendre rendez-vous</Link><a href="tel:+33625936035">06 25 93 60 35</a></div>
        <div><p className="footer-title">Zone de consultation</p><p>Fréjus · Saint-Raphaël<br />Var · Côte d’Azur<br />Consultations en ligne</p></div>
      </div>
      <div className="shell footer-bottom"><span>© 2026 · Tous droits réservés</span><span>Confidentialité · Mentions légales</span></div>
    </footer>
  );
}

export function PracticeCard({number,title,text,href,featured=false,tags=[]}:{number:string;title:string;text:string;href:string;featured?:boolean;tags?:string[]}) {
  return <Link href={href} className={featured ? "practice-card practice-card--featured" : "practice-card"}><span>{number}</span><div className="practice-symbol" aria-hidden="true">{number === "01" ? "◯" : number === "02" ? "⌁" : number === "03" ? "∿" : "✦"}</div><h3>{title}</h3><p>{text}</p>{tags.length > 0 && <div className="practice-card__tags">{tags.map(tag=><span key={tag}>{tag}</span>)}</div>}<b>Découvrir <Arrow /></b><i aria-hidden="true" /></Link>;
}

export function PageHero({eyebrow,title,lead}:{eyebrow:string;title:React.ReactNode;lead:string}) {
  return <section className="page-hero"><div className="shell"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="page-hero__lead">{lead}</p></div></section>;
}

export function AppointmentCard() {
  return <section className="appointment"><div className="shell appointment__inner"><div><p className="eyebrow light">Faire le premier pas</p><h2>Et si nous commencions<br />par <em>en parler ?</em></h2></div><div><div className="appointment__map"><iframe title="Carte du cabinet — 49 place du Couvent, 83600 Fréjus" src="https://www.google.com/maps?q=49%20place%20du%20Couvent%2C%2083600%20Fr%C3%A9jus&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><a href="https://www.google.com/maps/search/?api=1&query=49%20place%20du%20Couvent%2C%2083600%20Fr%C3%A9jus" target="_blank" rel="noreferrer">49 place du Couvent · 83600 Fréjus <Arrow /></a></div><p>Un premier échange permet de préciser votre demande et de sentir si cet accompagnement vous convient.</p><Link href="/rendez-vous" className="button button--light">Demander un rendez-vous <Arrow /></Link></div></div></section>;
}

export function StandardPage({children}:{children:React.ReactNode}) {
  return <><SiteHeader /><main>{children}</main><Footer /></>;
}
