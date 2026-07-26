"use client";

import { FormEvent, useEffect, useState } from "react";
import { ArrowIcon } from "../arrow-icon";

type Testimonial = { name: string; text: string; sample?: boolean };

const samples: Testimonial[] = [
  { name: "Élodie", text: "Un espace rare pour ralentir, retrouver mon corps et repartir avec une énergie profondément différente.", sample: true },
  { name: "Sarah", text: "J’ai aimé l’équilibre entre les pratiques, les temps de partage et la liberté de vivre la retraite à mon rythme.", sample: true },
  { name: "Camille", text: "La maison, les soins et la qualité de l’accompagnement ont créé une vraie parenthèse de reconnexion.", sample: true },
  { name: "Inès", text: "Une expérience intense et douce à la fois, portée par un cadre sécurisant et beaucoup de bienveillance.", sample: true },
];

export default function Testimonials() {
  const [comments, setComments] = useState<Testimonial[]>([]);
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("cecile-retreat-comments");
    if (saved) setComments(JSON.parse(saved));
  }, []);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const next = {
      name: String(form.get("name") ?? "").trim(),
      text: String(form.get("comment") ?? "").trim(),
    };
    if (!next.name || !next.text) return;
    const updated = [...comments, next];
    setComments(updated);
    window.localStorage.setItem("cecile-retreat-comments", JSON.stringify(updated));
    event.currentTarget.reset();
    setSent(true);
  }

  const displayed = [...samples, ...comments];

  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <div className="shell testimonials__head">
        <div>
          <p className="eyebrow light">Paroles de participantes</p>
          <h2 id="testimonials-title">Ce qu’elles<br /><em>en retiennent.</em></h2>
        </div>
        <div className="testimonials__action">
          <p>Vous avez participé à une retraite ? Partagez quelques mots sur votre expérience.</p>
          <button className="button button--light" type="button" onClick={() => setOpen(!open)}>
            Ajouter un commentaire <span aria-hidden="true">{open ? "−" : "+"}</span>
          </button>
        </div>
      </div>

      {open && (
        <form className="testimonial-form shell" onSubmit={submit}>
          <label>Votre prénom<input name="name" required maxLength={40} /></label>
          <label>Votre commentaire<textarea name="comment" required maxLength={500} rows={4} /></label>
          <button className="button" type="submit">Publier mon commentaire <ArrowIcon /></button>
          {sent && <p className="form-status" role="status">Merci, votre commentaire a bien été ajouté sur cet appareil.</p>}
        </form>
      )}

      <div className="testimonials__viewport">
        <div className="testimonials__track">
          {[...displayed, ...displayed].map((item, index) => (
            <article className="testimonial-card" key={`${item.name}-${index}`}>
              <span aria-hidden="true">“</span>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
