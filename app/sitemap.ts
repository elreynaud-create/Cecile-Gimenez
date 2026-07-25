import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const pages=["","/accompagnements","/retraites","/formations","/a-propos","/rendez-vous"];
  return pages.map((p)=>({url:`https://votre-domaine.fr${p}`,lastModified:new Date(),changeFrequency:p===""?"weekly":"monthly",priority:p===""?1:.8}));
}
