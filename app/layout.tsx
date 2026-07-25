import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://votre-domaine.fr"),
  title: { default:"Cécile — Psychanalyste & Sophrologue à Fréjus", template:"%s | Cécile à Fréjus" },
  description:"Psychanalyste, sophrologue et somato-analyste à Fréjus. Consultations en cabinet et en ligne, santé mentale, formations et retraites spirituelles.",
  keywords:["psychanalyste Fréjus","psychothérapie Fréjus","sophrologue Fréjus","somato-analyse Var","psy Saint-Raphaël","thérapeute Côte d’Azur","santé mentale Var","retraite spirituelle Essaouira"],
  alternates:{canonical:"/"},
  openGraph:{title:"Cécile · Psyché · Corps · Conscience",description:"Un espace de parole, de conscience et de transformation à Fréjus et en ligne.",type:"website",locale:"fr_FR",images:[{url:"/og.png",width:1734,height:907,alt:"Cécile — Psychanalyste et Sophrologue à Fréjus"}]},
  twitter:{card:"summary_large_image",title:"Cécile · Psyché · Corps · Conscience",description:"Psychanalyste et sophrologue à Fréjus.",images:["/og.png"]},
  robots:{index:true,follow:true},
  icons:{icon:"/favicon.svg"}
};
const schema={"@context":"https://schema.org","@type":["Person","ProfessionalService"],name:"Cécile",description:"Psychanalyste, sophrologue, somato-analyste, formatrice et clinicienne en santé mentale.",areaServed:["Fréjus","Saint-Raphaël","Var","Alpes-Maritimes","Côte d’Azur"],address:{"@type":"PostalAddress","addressLocality":"Fréjus","postalCode":"83600","addressCountry":"FR"}};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="fr"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} /></body></html>;
}
