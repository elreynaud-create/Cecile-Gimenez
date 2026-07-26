import Link from "next/link";

export function Arrow() { return <span aria-hidden="true">↗</span>; }

export function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Accueil">
        <span className="brand__mark">C</span>
        <span><strong>Cécile Gimenez</strong><small>Psychanalyste</small></span>
      </Link>
      <nav aria-label="Navigation principale">
        <Link href="/accompagnements">Accompagnements</Link>
        <Link href="/retraites">Retraites</Link>
        <Link href="/formations">Formations</Link>
        <Link href="/a-propos">À propos</Link>
      </nav>
      <Link href="/rendez-vous" className="nav-cta">Rendez-vous <Arrow /></Link>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="shell footer-grid">
        <div className="brand brand--light"><span className="brand__mark">C</span><span><strong>Cécile Gimenez</strong><small>Psyché · Corps · Conscience</small></span></div>
        <div><p className="footer-title">Explorer</p><Link href="/accompagnements">Accompagnements</Link><Link href="/retraites">Retraites</Link><Link href="/formations">Formations</Link></div>
        <div><p className="footer-title">Cabinet</p><Link href="/a-propos">À propos</Link><Link href="/rendez-vous">Prendre rendez-vous</Link><a href="https://t.me/share/url?url=&text=Bonjour%2C%20je%20souhaite%20prendre%20rendez-vous." target="_blank" rel="noreferrer">Telegram</a></div>
        <div><p className="footer-title">Zone de consultation</p><p>Fréjus · Saint-Raphaël<br />Var · Côte d’Azur<br />Consultations en ligne</p></div>
      </div>
      <div className="shell footer-bottom"><span>© 2026 · Tous droits réservés</span><span>Confidentialité · Mentions légales</span></div>
    </footer>
  );
}

export function PracticeCard({number,title,text,href}:{number:string;title:string;text:string;href:string}) {
  return <Link href={href} className="practice-card"><span>{number}</span><div className="practice-symbol" aria-hidden="true">{number === "01" ? "◯" : number === "02" ? "⌁" : number === "03" ? "∿" : "✦"}</div><h3>{title}</h3><p>{text}</p><b>Découvrir <Arrow /></b><i aria-hidden="true" /></Link>;
}

export function PageHero({eyebrow,title,lead}:{eyebrow:string;title:React.ReactNode;lead:string}) {
  return <section className="page-hero"><div className="shell"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="page-hero__lead">{lead}</p></div></section>;
}

export function AppointmentCard() {
  return <section className="appointment"><div className="shell appointment__inner"><div><p className="eyebrow light">Faire le premier pas</p><h2>Et si nous commencions<br />par <em>en parler ?</em></h2></div><div><p>Un premier échange permet de préciser votre demande et de sentir si cet accompagnement vous convient.</p><Link href="/rendez-vous" className="button button--light">Demander un rendez-vous <Arrow /></Link></div></div></section>;
}

export function StandardPage({children}:{children:React.ReactNode}) {
  return <><Header /><main>{children}</main><Footer /></>;
}
