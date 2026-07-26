import { NextResponse } from "next/server";

const clean = (value: unknown, max: number) =>
  String(value ?? "").replace(/[\u0000-\u001F\u007F]/g, " ").trim().slice(0, max);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (body.website) return NextResponse.json({ ok: true });

    const prenom = clean(body.prenom, 60);
    const telephone = clean(body.telephone, 30);
    const motif = clean(body.motif, 80);
    const format = clean(body.format, 80);
    const disponibilites = clean(body.disponibilites, 160);
    const message = clean(body.message, 800);

    if (!prenom || !telephone || body.consentement !== "oui") {
      return NextResponse.json({ error: "Données manquantes" }, { status: 400 });
    }

    const token = process.env.CONTACT_BOT_TOKEN;
    const chatId = process.env.CONTACT_CHAT_ID;
    if (!token || !chatId) {
      return NextResponse.json({ error: "Service non configuré" }, { status: 503 });
    }

    const text = [
      "Nouvelle demande de rendez-vous",
      "",
      `Prénom : ${prenom}`,
      `Téléphone : ${telephone}`,
      `Motif : ${motif}`,
      `Format : ${format}`,
      `Disponibilités : ${disponibilites || "Non précisées"}`,
      `Message : ${message || "Aucun message"}`,
    ].join("\n");

    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
      cache: "no-store",
    });

    if (!response.ok) throw new Error("Notification impossible");
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Envoi impossible" }, { status: 500 });
  }
}
