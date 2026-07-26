import Link from "next/link";
import { AppointmentCard, Arrow, PageHero, StandardPage } from "../components";
export default function Retraites() {
  return <StandardPage><PageHero eyebrow="Cercle · Retraites spirituelles" title={<>Un voyage immobile<br />au cœur du <em>vivant.</em></>} lead="Des espaces-temps confidentiels pour ralentir, se déposer et renouer avec une présence plus profonde." />
    <section className="gallery shell"><div className="gallery__large" /><div className="gallery__stack"><div className="gallery__small one" /><div className="gallery__small two" /></div></section>
    <section className="retreat-moments section shell" aria-labelledby="retreat-moments-title">
      <div className="retreat-moments__heading">
        <p className="eyebrow">Vivre la retraite</p>
        <h2 id="retreat-moments-title">Des instants<br /><em>hors du temps.</em></h2>
        <p>De la profondeur des pratiques à la douceur des soirées, chaque moment participe au voyage.</p>
      </div>
      <div className="retreat-moments__grid">
        <figure className="retreat-moment retreat-moment--practice"><img src="/retreat-practice.jpg" alt="Femmes allongées pendant un temps de pratique corporelle à Villa Maya" /><figcaption><span>01</span><p>Se déposer<br /><em>dans le corps</em></p></figcaption></figure>
        <figure className="retreat-moment retreat-moment--terrace"><img src="/retreat-terrace.jpeg" alt="Terrasse et piscine de Villa Maya au crépuscule" /><figcaption><span>02</span><p>Habiter la douceur<br /><em>du soir</em></p></figcaption></figure>
        <figure className="retreat-moment retreat-moment--fire"><img src="/retreat-fire.jpeg" alt="Cercle de femmes réuni autour du feu dans le jardin" /><figcaption><span>03</span><p>Se relier<br /><em>autour du feu</em></p></figcaption></figure>
      </div>
    </section>
    <section className="shell section retreat-intro"><div><p className="eyebrow">Villa Maya · Essaouira</p><h2>Rebirth &<br /><em>Kundalini</em></h2></div><div><p>Dans un écrin de pierre et de nature près de Sidi Kaouki, Cercle propose des retraites en petit groupe. Le programme articule souffle conscient, kundalini, méditation, exploration somatique, temps de parole et intégration.</p><p>Chaque proposition est encadrée avec attention. Une rencontre préalable permet de vérifier que l’expérience correspond à votre situation.</p><Link href="/rendez-vous?motif=retraite" className="button">Recevoir le programme <Arrow /></Link></div></section>
    <section className="ritual"><div className="shell ritual-grid">{["Souffle","Mouvement","Silence","Cercle"].map((x,i)=><div key={x}><span>0{i+1}</span><h3>{x}</h3><p>{["Rebirth et respiration consciente","Kundalini et pratique somatique","Méditation et temps d’intégration","Parole, écoute et lien au groupe"][i]}</p></div>)}</div></section>
    <section className="shell image-credit">Photographies de Villa Maya, Sidi Kaouki — utilisées pour la maquette. Autorisation de diffusion à confirmer avant mise en ligne publique.</section><AppointmentCard /></StandardPage>;
}
