import { PageHero, StandardPage } from "../components";
import { TelegramForm } from "./telegram-form";
export default function RendezVous() {
  return <StandardPage><PageHero eyebrow="Premier contact" title={<>Prendre rendez-vous,<br /><em>simplement.</em></>} lead="Décrivez en quelques mots votre demande. Un message Telegram prêt à envoyer sera généré de façon confidentielle." />
    <section className="shell section contact-grid"><div><p className="eyebrow">Le premier échange</p><h2>Quelques lignes<br />pour commencer.</h2><p>Je vous répondrai pour convenir d’un court échange téléphonique ou d’un premier rendez-vous. N’inscrivez pas d’informations médicales sensibles dans le message.</p><div className="contact-details"><p><strong>Consultations</strong><br />Au cabinet à Fréjus · En ligne</p><p><strong>Réponse</strong><br />Habituellement sous 48 heures ouvrées</p></div></div><TelegramForm /></section>
    <section className="shell emergency"><strong>En cas d’urgence</strong><p>Ce formulaire n’est pas un service d’urgence. En cas de danger immédiat, contactez le 15 ou le 112.</p></section></StandardPage>;
}
