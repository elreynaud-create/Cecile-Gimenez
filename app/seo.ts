import type { Metadata } from "next";

export const SITE_URL = "https://www.cecilegimenez.fr";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "Cécile Gimenez",
      locale: "fr_FR",
      type: "website",
      images: [{ url: "/og.png", width: 1734, height: 907, alt: "Cécile Gimenez — cabinet de psychothérapie à Fréjus" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  };
}
