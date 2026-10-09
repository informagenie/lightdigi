import type { Metadata, Viewport } from "next";
import { fontVariables } from "@/src/lib/fonts";
import { socialLinks } from "@/src/data/social";
import "./globals.scss";

const siteTitle = "Light Digital Consulting - Agence de communication digitale";
const siteDescription =
  "Light Digital Consulting accompagne les marques en stratégie digitale, communication, web, contenus et activation, en RDC, en Afrique et à l'international.";

export const metadata: Metadata = {
  metadataBase: new URL("https://lightdigital-consult.cd"),
  title: {
    default: siteTitle,
    template: "%s | Light Digital Consulting"
  },
  description: siteDescription,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "fr_CD",
    url: "/",
    siteName: "Light Digital Consulting",
    title: siteTitle,
    description: siteDescription
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090706"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Light Digital Consulting",
    url: "https://lightdigital-consult.cd",
    logo: "https://lightdigital-consult.cd/brand/light-digital-logo.png",
    areaServed: ["CD", "Africa", "International"],
    sameAs: socialLinks.map((link) => link.href)
  };

  return (
    <html lang="fr" className={fontVariables}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
