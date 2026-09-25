import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Website Designer & Website Developer | Ajibola Gbenga Joseph",
  description: "Ajibola Gbenga Joseph is a professional website designer and website developer with 5+ years experience. I build custom websites that look great, load fast, and convert visitors into clients. Available worldwide.",
  keywords: "website designer, website developer, website design, website development, web designer, web developer, professional website designer, professional website developer, freelance website designer, freelance website developer, hire website designer, hire website developer, custom website design, custom website development, website designer Nigeria, website developer Nigeria, affordable website designer, business website designer, e-commerce website designer, landing page designer, responsive website designer, WordPress website designer, React website developer, website redesign",
  authors: [{ name: "Ajibola Gbenga Joseph" }],
  openGraph: {
    siteName: "Ajibola Gbenga Joseph",
    title: "Website Designer & Website Developer | Ajibola Gbenga Joseph",
    description: "Professional website designer and website developer. Custom websites, e-commerce, landing pages and web apps that convert. Based in Nigeria, serving clients worldwide.",
    url: "https://ajibolagbengajoseph.site/",
    images: [
      {
        url: "https://ajibolagbengajoseph.site/me.webp",
        alt: "Ajibola Gbenga Joseph — Website Designer & Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Designer & Developer | Ajibola Gbenga Joseph",
    description: "Professional website designer and developer. Custom websites, e-commerce, landing pages and web apps that convert. Based in Nigeria, serving clients worldwide.",
    images: ["https://ajibolagbengajoseph.site/me.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
