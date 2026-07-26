import type { Metadata } from "next";
import "./globals.css";
import MotionLayer from "./motion-layer";
import { SITE_URL } from "./seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default:"Cécile Gimenez — Psychanalyste & Sophrologue à Fréjus", template:"%s | Cécile Gimenez à Fréjus" },
  description:"Cécile Gimenez, psychanalyste, sophrologue, somato-analyste et clinicienne en santé mentale à Fréjus. Enfants, adolescents et adultes, au cabinet ou en ligne.",
  keywords:["Cécile Gimenez","psychanalyste Fréjus","psychothérapie Fréjus","sophrologue Fréjus","somato-analyse Fréjus","clinicienne santé mentale Fréjus","psy enfant Fréjus","psy adolescent Fréjus","neuroatypie Fréjus","addictions TCA Fréjus","psy Saint-Raphaël","thérapeute Var","consultation psy en ligne","formation somato-analyse","retraite spirituelle Essaouira"],
  authors:[{name:"Cécile Gimenez",url:SITE_URL}],
  creator:"Cécile Gimenez",
  publisher:"Cécile Gimenez",
  category:"Santé mentale et accompagnement psychothérapeutique",
  openGraph:{title:"Cécile Gimenez · Psyché · Corps · Conscience",description:"Psychanalyse, sophrologie et somato-analyse à Fréjus et en ligne.",url:"/",siteName:"Cécile Gimenez",type:"website",locale:"fr_FR",images:[{url:"/og.png",width:1734,height:907,alt:"Cécile Gimenez — cabinet de psychothérapie à Fréjus"}]},
  twitter:{card:"summary_large_image",title:"Cécile Gimenez · Psyché · Corps · Conscience",description:"Psychanalyste et sophrologue à Fréjus.",images:["/og.png"]},
  robots:{index:true,follow:true,googleBot:{index:true,follow:true,"max-image-preview":"large","max-snippet":-1,"max-video-preview":-1}},
  icons:{icon:[{url:"/favicon.svg",type:"image/svg+xml",sizes:"any"}],shortcut:"/favicon.svg",apple:"/favicon.svg"}
};
const schema={"@context":"https://schema.org","@graph":[{"@type":"WebSite","@id":`${SITE_URL}/#website`,url:SITE_URL,name:"Cécile Gimenez",alternateName:"Cécile Gimenez · Psyché · Corps · Conscience",inLanguage:"fr-FR"},{"@type":["Person","ProfessionalService"],"@id":`${SITE_URL}/#cecile-gimenez`,name:"Cécile Gimenez",url:SITE_URL,image:`${SITE_URL}/cecile-gimenez-portrait.jpeg`,description:"Psychanalyste, sophrologue, somato-analyste, formatrice et clinicienne en santé mentale à Fréjus.",address:{"@type":"PostalAddress","streetAddress":"49 place du Couvent","addressLocality":"Fréjus","postalCode":"83600","addressRegion":"Var","addressCountry":"FR"},areaServed:[{"@type":"City","name":"Fréjus"},{"@type":"City","name":"Saint-Raphaël"},{"@type":"AdministrativeArea","name":"Var"},{"@type":"Country","name":"France"}],knowsAbout:["Psychanalyse","Sophrologie","Somato-analyse","Santé mentale","Neuroatypies","Addictions","Troubles des conduites alimentaires","Accompagnement des enfants et adolescents"],hasOfferCatalog:{"@type":"OfferCatalog","name":"Accompagnements","itemListElement":[{"@type":"Offer","itemOffered":{"@type":"Service","name":"Psychanalyse"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Sophrologie"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Somato-analyse"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Accompagnement clinique en santé mentale"}}]}}]};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="fr"><body><MotionLayer />{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} /></body></html>;
}
