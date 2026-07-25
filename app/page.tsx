import Link from "next/link";
import { Arrow, AppointmentCard, Footer, Header, PracticeCard } from "./components";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero__orb" aria-hidden="true" />
          <div className="shell hero__grid">
            <div className="hero__copy">
              <p className="eyebrow">Cabinet de psychothérapie · Fréjus & en ligne</p>
              <h1>Retrouver le fil<br />de <em>soi</em>.</h1>
              <p className="hero__lead">Un espace de parole, de conscience et de transformation où le corps et la psyché se rencontrent.</p>
              <div className="hero__actions">
                <Link href="/rendez-vous" className="button">Prendre rendez-vous <Arrow /></Link>
                <Link href="/accompagnements" className="text-link">Découvrir l’approche</Link>
              </div>
            </div>
            <div className="portrait-card">
              <div className="portrait-art">
                <span className="portrait-line one" />
                <span className="portrait-line two" />
                <span className="portrait-line three" />
                <span className="portrait-sun" />
              </div>
              <div className="portrait-caption">
                <span>01</span>
                <p>Clinicienne en santé mentale<br />Psychanalyste · Sophrologue</p>
              </div>
            </div>
          </div>
          <div className="hero__marquee" aria-label="Domaines de pratique">
            <span>Psychanalyse</span><i>✦</i><span>Sophrologie</span><i>✦</i><span>Somato-analyse</span><i>✦</i><span>Formation</span><i>✦</i><span>Retraites</span>
          </div>
        </section>

        <section className="intro section shell">
          <div>
            <p className="eyebrow">Une écoute singulière</p>
            <h2>Mettre des mots.<br /><em>Remettre du mouvement.</em></h2>
          </div>
          <div className="intro__text">
            <p>Chaque histoire mérite une écoute attentive, sans jugement. Je vous accompagne dans un cadre sécurisant pour traverser les moments de rupture, apaiser les symptômes et ouvrir de nouveaux possibles.</p>
            <p>Mon approche intégrative associe la profondeur de la psychanalyse, l’attention au corps de la somato-analyse et les outils de régulation de la sophrologie.</p>
            <Link href="/a-propos" className="text-link">En savoir plus sur mon parcours <Arrow /></Link>
          </div>
        </section>

        <section className="practices section">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow">Les accompagnements</p>
              <h2>Plusieurs chemins,<br /><em>une même présence.</em></h2>
            </div>
            <div className="practice-grid">
              <PracticeCard number="01" title="Psychanalyse" text="Comprendre les répétitions, les conflits intérieurs et ce qui agit à notre insu." href="/accompagnements#psychanalyse" />
              <PracticeCard number="02" title="Sophrologie" text="Retrouver un équilibre par la respiration, la détente et la conscience corporelle." href="/accompagnements#sophrologie" />
              <PracticeCard number="03" title="Somato-analyse" text="Écouter la mémoire du corps et restaurer une relation vivante à soi." href="/accompagnements#somato" />
              <PracticeCard number="04" title="Santé mentale" text="Un accompagnement clinique pour les périodes de vulnérabilité psychique." href="/accompagnements#clinique" />
            </div>
          </div>
        </section>

        <section className="retreat-feature">
          <div className="retreat-feature__image" role="img" aria-label="Villa Maya près d’Essaouira" />
          <div className="retreat-feature__copy">
            <p className="eyebrow light">Cercle · Retraites spirituelles</p>
            <h2>Quitter le bruit.<br /><em>Entendre l’essentiel.</em></h2>
            <p>Des immersions intimes à Villa Maya, près d’Essaouira, mêlant rebirth, kundalini, méditation et exploration somatique.</p>
            <Link href="/retraites" className="button button--light">Explorer les retraites <Arrow /></Link>
          </div>
        </section>

        <section className="section shell two-col">
          <div className="quote-mark">“</div>
          <blockquote>Ce qui ne peut être mis en mots<br />se met souvent <em>en corps.</em></blockquote>
          <div className="note-card">
            <p className="eyebrow">Pour qui ?</p>
            <p>Adultes · Adolescents · Professionnels</p>
            <p>En cabinet à Fréjus et en visioconférence, dans toute la France.</p>
          </div>
        </section>

        <AppointmentCard />
      </main>
      <Footer />
    </>
  );
}
