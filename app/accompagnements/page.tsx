import { AppointmentCard, PageHero, StandardPage } from "../components";

const items = [
  ["psychanalyse","01","Psychanalyse","Comprendre ce qui se rejoue","La cure analytique offre un espace où la parole peut se déployer librement. Elle aide à éclairer les conflits inconscients, les répétitions, les angoisses et les liens entre votre histoire et ce que vous vivez aujourd’hui."],
  ["sophrologie","02","Sophrologie","Apaiser et mobiliser ses ressources","Par la respiration, la relaxation dynamique et la visualisation, la sophrologie soutient la gestion du stress, du sommeil, des émotions, de la douleur et la préparation aux étapes importantes."],
  ["somato","03","Somato-analyse","Retrouver l’intelligence du corps","Le corps garde la trace de ce qui n’a pas toujours pu être pensé ou exprimé. La somato-analyse associe parole, sensations et vécu émotionnel pour restaurer une circulation plus libre."],
  ["clinique","04","Clinique en santé mentale","Traverser les périodes de vulnérabilité","Un accompagnement ajusté aux états anxieux, dépressifs, aux traumatismes, aux épuisements, aux deuils et aux moments de crise, en lien avec les autres professionnels de santé lorsque nécessaire."]
];
export default function Accompagnements() {
  return <StandardPage><PageHero eyebrow="L’approche clinique" title={<>Prendre soin de la psyché,<br /><em>écouter le corps.</em></>} lead="Une pratique intégrative, adaptée à votre histoire, à votre rythme et à ce qui vous amène aujourd’hui." />
    <section className="shell section service-list">{items.map(([id,n,t,s,d])=><article id={id} key={id} className="service-row"><span className="service-row__num">{n}</span><div><p className="eyebrow">{t}</p><h2>{s}</h2></div><p>{d}</p></article>)}</section>
    <section className="shell info-band"><p><strong>Cadre des séances</strong><br />Consultations individuelles · Adultes et adolescents · Fréjus ou visioconférence · Durée et fréquence définies ensemble.</p><p><strong>Important</strong><br />Cet accompagnement ne remplace pas une prise en charge médicale ou un service d’urgence.</p></section><AppointmentCard /></StandardPage>;
}
