"use client";
import { FormEvent, useState } from "react";
import { ArrowIcon } from "../arrow-icon";
export function ContactForm() {
  const [status,setStatus]=useState("");
  const [sending,setSending]=useState(false);
  async function submit(e:FormEvent<HTMLFormElement>){
    e.preventDefault();
    setSending(true);
    setStatus("");
    const data=new FormData(e.currentTarget);
    const payload=Object.fromEntries(data.entries());
    try {
      const response=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});
      if(!response.ok) throw new Error();
      setStatus("Merci. Votre demande a bien été transmise. Cécile vous recontactera prochainement.");
      e.currentTarget.reset();
    } catch {
      setStatus("L’envoi n’a pas abouti. Vous pouvez joindre directement Cécile au 06 25 93 60 35.");
    } finally {
      setSending(false);
    }
  }
  return <form className="contact-form" onSubmit={submit}><input className="contact-honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" /><div className="field-row"><label>Prénom<input name="prenom" required maxLength={60} autoComplete="given-name" /></label><label>Téléphone<input name="telephone" required maxLength={30} type="tel" autoComplete="tel" /></label></div><label>Votre demande<select name="motif" defaultValue="Première consultation"><option>Première consultation</option><option>Sophrologie</option><option>Retraite spirituelle</option><option>Formation / supervision</option><option>Autre demande</option></select></label><label>Format souhaité<select name="format"><option>Cabinet à Fréjus</option><option>Visioconférence</option><option>Sans préférence</option></select></label><label>Disponibilités<input name="disponibilites" maxLength={160} placeholder="Ex. mardi après 17h, vendredi matin…" /></label><label>Quelques mots<textarea name="message" maxLength={800} rows={4} placeholder="Votre demande, sans donnée médicale sensible…" /></label><label className="consent"><input name="consentement" value="oui" type="checkbox" required /> J’accepte que ces informations soient utilisées pour me recontacter.</label><button className="button" type="submit" disabled={sending}>{sending?"Envoi en cours…":"Envoyer ma demande"} <ArrowIcon /></button>{status&&<p className="form-status" role="status">{status}</p>}</form>;
}
