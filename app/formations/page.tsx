import Link from "next/link";
import { AppointmentCard, Arrow, PageHero, StandardPage } from "../components";
import Testimonials from "./testimonials";
export default function Formations() {
  return <StandardPage><PageHero eyebrow="Transmission & supervision" title={<>Former des praticiens<br /><em>pleinement présents.</em></>} lead="Des formations ancrées dans la clinique, le corps et une éthique exigeante de l’accompagnement." />
    <section className="shell section training-grid"><article><span>01</span><h2>Formation continue</h2><p>Modules pour thérapeutes, soignants et professionnels de l’accompagnement : écoute clinique, posture, transfert, corporéité, trauma et régulation.</p></article><article><span>02</span><h2>Analyse de pratique</h2><p>Des espaces collectifs pour élaborer les situations complexes, soutenir la pensée clinique et prévenir l’épuisement professionnel.</p></article><article><span>03</span><h2>Supervision individuelle</h2><p>Un travail confidentiel autour de la pratique, des impasses rencontrées et de la juste position du professionnel.</p></article></section>
    <section className="manifesto"><div className="shell"><p className="eyebrow light">Pédagogie</p><h2>Expérimenter.<br />Élaborer.<br /><em>Transmettre.</em></h2><p>Des apports théoriques rigoureux, des mises en situation et une attention constante à ce qui se vit dans la relation.</p></div></section>

    <section className="annual-retreats section">
      <div className="shell">
        <div className="annual-retreats__intro">
          <div><p className="eyebrow">Deux rendez-vous par an</p><h2>Deux retraites.<br /><em>Deux expériences uniques.</em></h2></div>
          <p>Chaque année, deux sessions sont proposées à Villa Maya, près d’Essaouira : une retraite exclusivement réservée aux femmes et une retraite mixte, ouverte aux femmes comme aux hommes. Deux formats intimes, pensés pour se déposer, se reconnecter et vivre une transformation profonde dans un cadre exceptionnel.</p>
        </div>
        <div className="session-grid">
          <article className="session-card session-card--women">
            <span>Session 01 · Femmes</span>
            <h3>Le Cercle<br />des femmes</h3>
            <p>Un espace entre femmes pour déposer les rôles, écouter le corps, renouer avec son énergie et retrouver une puissance douce. La parole, le mouvement, le soin et le silence se répondent au fil d’une expérience profondément soutenante.</p>
            <ul><li>Groupe intime et confidentiel</li><li>Pratiques adaptées au rythme de chacune</li><li>Temps de cercle et d’intégration</li></ul>
          </article>
          <article className="session-card session-card--mixed">
            <span>Session 02 · Mixte</span>
            <h3>Le Cercle<br />du vivant</h3>
            <p>Une retraite ouverte aux femmes et aux hommes pour explorer une relation plus consciente à soi, au corps et aux autres. Un espace où les différences deviennent une richesse et où chacun peut avancer avec liberté, respect et authenticité.</p>
            <ul><li>Femmes et hommes</li><li>Équilibre entre pratiques et temps libres</li><li>Cadre sécurisant et bienveillant</li></ul>
          </article>
        </div>
      </div>
    </section>

    <section className="immersive-program">
      <div className="shell immersive-program__head"><p className="eyebrow light">Une expérience complète</p><h2>Prendre soin.<br /><em>Respirer. Ressentir.</em></h2><p>Le programme est une invitation, jamais une contrainte. Chacun participe selon son énergie, ses besoins et ce qu’il se sent prêt à explorer.</p></div>
      <div className="shell experience-grid">
        {[["01","Soins & massages","Des temps de soin pour relâcher les tensions, habiter pleinement le corps et retrouver une sensation profonde d’apaisement."],["02","Danse & mouvement","Une exploration libre et guidée pour laisser circuler l’énergie, retrouver de la spontanéité et remettre le vivant en mouvement."],["03","Méditation","Des pratiques accessibles pour ralentir le mental, cultiver la présence et ouvrir un espace intérieur plus vaste."],["04","Kundalini","Un travail énergétique mêlant respiration, mouvement, son et attention pour réveiller la vitalité et la conscience corporelle."],["05","Rebirth","Une respiration consciente et accompagnée pour traverser les émotions, libérer ce qui demande à l’être et retrouver un nouvel élan."],["06","Yoga","Des séances adaptées au groupe pour délier le corps, soutenir l’ancrage et préparer les temps d’exploration intérieure."],["07","Reconnexion à soi","Des temps d’écriture, de silence, de partage et d’intégration pour écouter ses besoins et retrouver son propre chemin."],["08","Cercle de parole","Un espace confidentiel, sans jugement, où la parole peut se déposer et être accueillie dans toute sa singularité."]].map(([n,t,p])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}
      </div>
    </section>

    <section className="freedom-section section shell">
      <div><p className="eyebrow">La liberté fait partie du voyage</p><h2>Votre retraite,<br /><em>à votre manière.</em></h2></div>
      <div className="freedom-section__copy"><p>Une retraite spirituelle n’est pas un programme à réussir. Entre les pratiques, chacun reste libre de se reposer, de profiter de la maison ou de partir découvrir les environs. Il est possible de vivre pleinement le groupe tout en respectant son propre besoin d’espace.</p><div className="freedom-list"><span>Quad dans les paysages</span><span>Surf sur la côte</span><span>Visite d’Essaouira</span><span>Plage & nature</span><span>Repos à la villa</span><span>Temps pour soi</span></div><p className="freedom-section__closing">Vous pouvez suivre chaque proposition, choisir seulement certains temps ou simplement vous laisser porter. L’essentiel est de revenir à vous.</p><Link href="/rendez-vous?motif=retraite" className="button">Découvrir les prochaines dates <Arrow /></Link></div>
    </section>

    <Testimonials />
    <AppointmentCard />
  </StandardPage>;
}
