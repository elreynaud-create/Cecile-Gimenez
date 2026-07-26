import Link from "next/link";
import { AppointmentCard, Arrow, PageHero, StandardPage } from "../components";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Formation de somato-analyste — 150 heures",
  description: "Formation professionnelle de somato-analyste en 150 heures : psychanalyse, somato-analyse, sophrologie, respiration psycho-organique, clinique et mémoire.",
  path: "/formations",
});

const modules = [
  ["01","Fondements de la somato-analyse","Comprendre les liens entre psyché, corps, émotions et histoire personnelle. Poser les repères théoriques, cliniques et éthiques qui soutiennent la pratique."],
  ["02","Écoute psychanalytique","Travailler la qualité de présence, la parole, le transfert, les répétitions et ce qui agit à l’insu du sujet, sans réduire l’expérience à une interprétation toute faite."],
  ["03","Mémoire du corps","Explorer la manière dont les vécus s’inscrivent dans les sensations, les tensions, les postures et les mouvements. Apprendre à accueillir ces manifestations avec précision."],
  ["04","Respiration & psycho-organique","Mobiliser le souffle, l’attention corporelle et les processus psycho-organiques comme voies d’exploration, de régulation et de remise en mouvement."],
  ["05","Sophrologie & régulation","Intégrer des outils de respiration, de relaxation dynamique, de visualisation et de conscience corporelle dans un cadre clinique cohérent."],
  ["06","Posture du praticien","Construire un cadre sécurisant, ajuster la distance relationnelle, reconnaître ses limites, orienter lorsque nécessaire et développer une pratique responsable."],
  ["07","Clinique & situations complexes","Élaborer des situations concrètes : anxiété, trauma, épuisement, somatisations, neuroatypies, addictions, TCA, deuils et passages de vie."],
  ["08","Pratique, supervision & intégration","Expérimenter, conduire des séances, recevoir un retour précis sur sa posture et relier les différentes approches dans une pratique personnelle et structurée."],
];

export default function Formations() {
  return (
    <StandardPage>
      <PageHero
        eyebrow="Formation professionnelle · 150 heures"
        title={<>Devenir<br /><span className="training-hero__profession">somato-analyste.</span></>}
        lead="Un parcours clinique et expérientiel pour apprendre à écouter ce qui se dit par les mots, le corps, le souffle et la relation."
      />

      <section className="training-intro section shell">
        <div className="training-intro__title">
          <p className="eyebrow">Une formation intégrative</p>
          <h2>Relier la psyché.<br />Écouter le corps.<br /><em>Affiner sa présence.</em></h2>
        </div>
        <div className="training-intro__copy">
          <p className="training-intro__lead">Se former à la somato-analyse, c’est apprendre à entendre une personne dans toutes ses dimensions : son histoire, sa parole, ses émotions, ses sensations, son souffle et sa manière d’entrer en relation.</p>
          <p>Le parcours articule la profondeur de la psychanalyse, l’écoute corporelle de la somato-analyse, les outils de la sophrologie, l’approche psycho-organique et le travail respiratoire. Ces disciplines ne sont pas juxtaposées : elles sont reliées dans une méthode cohérente, au service d’un accompagnement sensible, structuré et responsable.</p>
          <p>La formation accorde autant d’importance aux connaissances qu’à l’expérience. Elle invite chaque participant à développer une compréhension clinique solide, une conscience fine de sa posture et une manière de travailler qui lui soit propre.</p>
        </div>
      </section>

      <section className="training-signature">
        <div className="shell training-signature__grid">
          <div><strong>150</strong><span>heures de formation</span></div>
          <div><strong>08</strong><span>axes d’apprentissage</span></div>
          <div><strong>01</strong><span>mémoire professionnel</span></div>
          <div><strong>∞</strong><span>une pratique en évolution</span></div>
        </div>
      </section>

      <section className="training-program section">
        <div className="shell training-program__head">
          <div><p className="eyebrow">Le programme</p><h2>De la compréhension<br /><em>à la pratique clinique.</em></h2></div>
          <p>Une progression conçue pour acquérir des repères, expérimenter les outils, élaborer les situations rencontrées et construire une posture professionnelle juste.</p>
        </div>
        <div className="shell training-modules">
          {modules.map(([number,title,text])=><article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="training-method">
        <div className="shell training-method__inner">
          <div className="training-method__heading">
            <p className="eyebrow light">Une pédagogie vivante</p>
            <h2>Comprendre.<br />Expérimenter.<br /><em>Intégrer.</em></h2>
          </div>
          <div className="training-method__steps">
            <article><span>01</span><div><h3>Apports théoriques</h3><p>Des concepts transmis avec clarté pour comprendre les processus psychiques, corporels et relationnels à l’œuvre dans l’accompagnement.</p></div></article>
            <article><span>02</span><div><h3>Expérience personnelle</h3><p>Des pratiques vécues de l’intérieur pour ne pas seulement connaître les outils, mais comprendre ce qu’ils mobilisent et les manier avec discernement.</p></div></article>
            <article><span>03</span><div><h3>Mises en situation</h3><p>Des entraînements progressifs à la conduite de séance, à l’écoute, au questionnement, à l’observation et à l’ajustement de la posture.</p></div></article>
            <article><span>04</span><div><h3>Analyse de pratique</h3><p>Un travail collectif d’élaboration pour transformer les difficultés rencontrées en compréhension clinique et en ressources professionnelles.</p></div></article>
          </div>
        </div>
      </section>

      <section className="certification section shell">
        <div className="certification__card">
          <p className="eyebrow">Validation du parcours</p>
          <span className="certification__seal" aria-hidden="true">150 H</span>
          <h2>Certificat de<br /> <em>somato-analyste</em></h2>
          <p>Le certificat est délivré à l’issue des 150 heures, sous réserve de l’assiduité, de l’engagement dans les pratiques, de la validation des compétences attendues et de la présentation d’un mémoire professionnel.</p>
        </div>
        <div className="certification__details">
          <p className="certification__opening">Le mémoire permet de relier les apprentissages à une question clinique choisie, d’affirmer une pensée personnelle et de témoigner de la capacité à articuler théorie, expérience et pratique.</p>
          <div className="certification__criteria">
            <div><strong>01</strong><span>Présence et participation au parcours</span></div>
            <div><strong>02</strong><span>Intégration des repères cliniques et éthiques</span></div>
            <div><strong>03</strong><span>Mises en pratique et analyse de séances</span></div>
            <div><strong>04</strong><span>Rédaction et présentation du mémoire</span></div>
          </div>
          <p className="training-clarification">Les modalités précises, prérequis, calendrier et critères de certification sont communiqués dans le programme détaillé avant toute inscription.</p>
        </div>
      </section>

      <section className="training-audience">
        <div className="shell training-audience__inner">
          <div><p className="eyebrow light">À qui s’adresse la formation ?</p><h2>À celles et ceux<br />qui veulent accompagner<br /><em>avec profondeur.</em></h2></div>
          <div className="training-audience__list">
            <span>Professionnels de l’accompagnement</span>
            <span>Thérapeutes et praticiens du corps</span>
            <span>Soignants et professionnels de la relation</span>
            <span>Personnes en reconversion professionnelle</span>
            <span>Praticiens souhaitant enrichir leur approche</span>
          </div>
          <div className="training-audience__cta">
            <p>Un échange préalable permet d’explorer votre parcours, vos attentes et la cohérence de cette formation avec votre projet professionnel.</p>
            <div className="offer-price"><span>Tarif de la formation</span><strong>2 750 €</strong><small>Parcours complet · 150 heures</small></div>
            <Link href="/rendez-vous?motif=formation" className="button button--light">Recevoir le programme complet <Arrow /></Link>
          </div>
        </div>
      </section>

      <AppointmentCard />
    </StandardPage>
  );
}
