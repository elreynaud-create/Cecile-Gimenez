import Link from "next/link";
import { Arrow, AppointmentCard, Footer, Header, PracticeCard } from "./components";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero__orb" aria-hidden="true" />
          <div className="hero__grain" aria-hidden="true" />
          <div className="shell hero__grid">
            <div className="hero__copy">
              <p className="eyebrow reveal reveal--1">Cabinet de psychothérapie · Fréjus & en ligne</p>
              <h1 className="reveal reveal--2"><span className="hero__title-line">Retrouver le fil</span><br />de <em>soi</em>.</h1>
              <p className="hero__lead reveal reveal--3">Un accompagnement sensible et structuré pour comprendre ce qui se rejoue, apaiser ce qui déborde et retrouver une relation plus libre à soi.</p>
              <div className="hero__actions">
                <Link href="/rendez-vous" className="button">Prendre rendez-vous <Arrow /></Link>
                <Link href="/accompagnements" className="text-link">Découvrir l’approche</Link>
              </div>
              <div className="hero__trust" aria-label="Informations pratiques">
                <span>Adultes, adolescents & enfants</span><span>Cabinet confidentiel</span><span>Visioconférence</span>
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
                <p>Cécile Gimenez<br />Psychanalyste · Sophrologue<br />Clinicienne en santé mentale</p>
              </div>
            </div>
          </div>
          <div className="hero__marquee" aria-label="Domaines de pratique">
            <span>Psychanalyse</span><i>✦</i><span>Sophrologie</span><i>✦</i><span>Somato-analyse</span><i>✦</i><span>Formation</span><i>✦</i><span>Retraites</span>
          </div>
        </section>

        <section className="intro section shell">
          <div className="intro__heading">
            <p className="eyebrow">Une présence clinique, une écoute singulière</p>
            <h2>Mettre des mots.<br /><em>Remettre du mouvement.</em></h2>
            <div className="intro__aside">
              <span aria-hidden="true" />
              <p>Parce qu’être entendu permet parfois de se rencontrer. La thérapie devient alors un lieu de passage : de ce qui enferme vers ce qui remet en mouvement.</p>
            </div>
          </div>
          <figure className="intro__visual">
            <img
              src="/presence-clinique-ecoute.png"
              alt="Un espace d’écoute lumineux et apaisant, propice à la parole"
              width="1122"
              height="1402"
            />
            <figcaption><span>02</span><p>Un espace pour déposer,<br />comprendre et transformer.</p></figcaption>
          </figure>
          <div className="intro__text">
            <p>Je vous accueille dans un cadre confidentiel, stable et sans jugement. Ensemble, nous prenons le temps d’entendre ce qui demande à l’être, de reconnaître vos ressources et de construire un chemin qui respecte votre rythme.</p>
            <p>Mon approche intégrative relie la profondeur de la psychanalyse, l’attention au corps de la somato-analyse et les outils de régulation de la sophrologie. Elle ne propose pas de réponse toute faite : elle ouvre un espace où votre propre compréhension peut émerger.</p>
            <p>Chaque accompagnement est singulier. Il se construit au fil des séances, dans une attention portée à votre histoire, à vos ressentis et à ce qui se transforme peu à peu. L’objectif n’est pas de devenir quelqu’un d’autre, mais de retrouver davantage de liberté dans votre manière d’être, de choisir et d’avancer.</p>
            <Link href="/a-propos" className="text-link">En savoir plus sur mon parcours <Arrow /></Link>
          </div>
        </section>

        <section className="signals" aria-labelledby="signals-title">
          <div className="shell signals__inner">
            <div className="signals__heading">
              <p className="eyebrow">Quand consulter ?</p>
              <h2 id="signals-title">Lorsque quelque chose<br /><em>demande à changer.</em></h2>
            </div>
            <div className="signals__list">
              <article><span>01</span><h3>Anxiété & surcharge</h3><p>Le mental ne s’arrête plus, le sommeil se fragilise, le corps reste en état d’alerte.</p></article>
              <article><span>02</span><h3>Répétitions & blocages</h3><p>Les mêmes situations, relations ou réactions reviennent sans que vous puissiez les dénouer.</p></article>
              <article><span>03</span><h3>Passages de vie</h3><p>Une séparation, un deuil, une transition ou une perte de repères vient bouleverser l’équilibre.</p></article>
              <article><span>04</span><h3>Besoin de se retrouver</h3><p>Vous souhaitez mieux vous comprendre, habiter pleinement vos choix et retrouver de l’élan.</p></article>
            </div>
          </div>
        </section>

        <section className="practices section">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow">Les accompagnements</p>
              <div className="section-heading__split">
                <h2>Plusieurs chemins,<br /><em>une même présence.</em></h2>
                <p>Chaque accompagnement s’ajuste à votre histoire, à ce que vous traversez aujourd’hui et à la manière dont vous souhaitez avancer.</p>
              </div>
            </div>
            <div className="practice-grid">
              <PracticeCard number="01" title="Psychanalyse" text="Comprendre les répétitions, les conflits intérieurs et ce qui agit à notre insu." href="/accompagnements#psychanalyse" />
              <PracticeCard number="02" title="Sophrologie" text="Retrouver un équilibre par la respiration, la détente et la conscience corporelle." href="/accompagnements#sophrologie" />
              <PracticeCard number="03" title="Somato-analyse" text="Écouter la mémoire du corps et restaurer une relation vivante à soi." href="/accompagnements#somato" />
              <PracticeCard number="04" title="Santé mentale" text="Un accompagnement clinique pour les périodes de vulnérabilité psychique." href="/accompagnements#clinique" />
              <PracticeCard number="05" title="Spécialités" text="Une attention particulière aux fonctionnements neuroatypiques et aux situations où le mental, les émotions et le corps demandent un accompagnement ajusté." href="/accompagnements#specialites" featured tags={["neuroatypies","Anxiété","Trauma","Épuisement","Relations","Passages de vie"]} />
            </div>
          </div>
        </section>

        <section className="method section shell">
          <div className="method__aside"><p className="eyebrow">Le cadre thérapeutique</p><p className="method__index">03 repères</p></div>
          <div className="method__content">
            <h2>Un travail profond,<br /><em>à votre rythme.</em></h2>
            <div className="method__steps">
              <article><span>01</span><div><h3>Accueillir</h3><p>Créer un espace suffisamment sûr pour déposer ce qui pèse, sans avoir à préparer vos mots ni à savoir exactement par où commencer.</p></div></article>
              <article><span>02</span><div><h3>Comprendre</h3><p>Mettre en lumière les liens entre votre histoire, vos émotions, vos pensées et ce que votre corps exprime aujourd’hui.</p></div></article>
              <article><span>03</span><div><h3>Transformer</h3><p>Faire émerger de nouvelles façons d’être en relation, de poser vos limites et de choisir ce qui vous ressemble davantage.</p></div></article>
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
          <blockquote>Ce qui ne peut être mis en mots<br />se met souvent <em>en corps.</em></blockquote>
          <div className="note-card">
            <p className="eyebrow">Pour qui ?</p>
            <p>Adultes · Adolescents · Enfants · Professionnels</p>
            <p>En cabinet à Fréjus et en visioconférence, dans toute la France.</p>
          </div>
        </section>

        <section className="first-session">
          <div className="shell first-session__grid">
            <div><p className="eyebrow">Le premier rendez-vous</p><h2>Un premier temps<br /><em>pour faire connaissance.</em></h2></div>
            <div className="first-session__content">
              <p>Cette première séance permet de déposer ce qui vous amène, de préciser vos besoins et de découvrir ma manière de travailler. Vous n’avez rien à préparer : nous partons simplement de là où vous en êtes.</p>
              <div className="first-session__facts">
                <div><strong>01</strong><span>Écoute de votre demande</span></div>
                <div><strong>02</strong><span>Choix du cadre adapté</span></div>
              </div>
              <Link href="/rendez-vous" className="button">Préparer ce premier échange <Arrow /></Link>
            </div>
          </div>
        </section>

        <AppointmentCard />
      </main>
      <Footer />
    </>
  );
}
