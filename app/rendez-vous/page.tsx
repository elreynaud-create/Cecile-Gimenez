import { PageHero, StandardPage } from "../components";
import { ContactForm } from "./contact-form";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Prendre rendez-vous au cabinet à Fréjus",
  description: "Demandez un premier rendez-vous avec Cécile Gimenez au 49 place du Couvent à Fréjus, ou choisissez une consultation en visioconférence.",
  path: "/rendez-vous",
});

export default function RendezVous() {
  return <StandardPage><PageHero eyebrow="Premier contact" title={<>Prendre rendez-vous,<br /><em>simplement.</em></>} lead="Décrivez votre demande en quelques mots. Elle sera transmise de façon confidentielle afin que Cécile puisse vous recontacter." />
    <section className="shell section contact-grid"><div><p className="eyebrow">Le premier échange</p><h2>Quelques lignes<br />pour commencer.</h2><p>Je vous répondrai pour convenir d’un court échange téléphonique ou d’un premier rendez-vous. N’inscrivez pas d’informations médicales sensibles dans le message.</p><div className="contact-details"><p><strong>Téléphone</strong><br /><a href="tel:+33625936035">06 25 93 60 35</a></p><p><strong>Consultations</strong><br />Au cabinet à Fréjus · En ligne</p><p><strong>Réponse</strong><br />Habituellement sous 48 heures ouvrées</p></div></div><ContactForm /></section>
    <section className="shell emergency"><strong>En cas d’urgence</strong><p>Ce formulaire n’est pas un service d’urgence. En cas de danger immédiat, contactez le 15 ou le 112.</p></section></StandardPage>;
}
