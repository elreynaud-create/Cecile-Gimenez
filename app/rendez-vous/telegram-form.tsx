"use client";
import { FormEvent, useState } from "react";
import { ArrowIcon } from "../arrow-icon";
export function TelegramForm() {
  const [status,setStatus]=useState("");
  function submit(e:FormEvent<HTMLFormElement>){
    e.preventDefault();
    const data=new FormData(e.currentTarget);
    const msg=`Bonjour, je souhaite demander un rendez-vous.\n\nPrénom : ${data.get("prenom")}\nTéléphone : ${data.get("telephone")}\nMotif : ${data.get("motif")}\nFormat souhaité : ${data.get("format")}\nDisponibilités : ${data.get("disponibilites")}\nMessage : ${data.get("message")}`;
    navigator.clipboard?.writeText(msg);
    setStatus("Votre message a été copié. Telegram va s’ouvrir.");
    window.open(`https://t.me/share/url?url=&text=${encodeURIComponent(msg)}`,"_blank","noopener,noreferrer");
  }
  return <form className="contact-form" onSubmit={submit}><div className="field-row"><label>Prénom<input name="prenom" required autoComplete="given-name" /></label><label>Téléphone<input name="telephone" required type="tel" autoComplete="tel" /></label></div><label>Votre demande<select name="motif" defaultValue="Première consultation"><option>Première consultation</option><option>Sophrologie</option><option>Retraite spirituelle</option><option>Formation / supervision</option><option>Autre demande</option></select></label><label>Format souhaité<select name="format"><option>Cabinet à Fréjus</option><option>Visioconférence</option><option>Sans préférence</option></select></label><label>Disponibilités<input name="disponibilites" placeholder="Ex. mardi après 17h, vendredi matin…" /></label><label>Quelques mots<textarea name="message" rows={4} placeholder="Votre demande, sans donnée médicale sensible…" /></label><label className="consent"><input type="checkbox" required /> J’accepte que ces informations soient utilisées pour me recontacter.</label><button className="button" type="submit">Envoyer via Telegram <ArrowIcon /></button>{status&&<p className="form-status" role="status">{status}</p>}</form>;
}
