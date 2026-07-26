import type { MetadataRoute } from "next";
import { SITE_URL } from "./seo";
export default function sitemap(): MetadataRoute.Sitemap {
  const pages=["","/accompagnements","/retraites","/formations","/a-propos","/rendez-vous"];
  return pages.map((p)=>({url:`${SITE_URL}${p}`,lastModified:new Date(),changeFrequency:p===""?"weekly":"monthly",priority:p==="" ? 1 : p==="/accompagnements" ? .9 : .8}));
}
