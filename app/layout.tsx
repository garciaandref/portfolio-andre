import "./globals.css";
import RocketLoader from "./components/RocketLoader";
import type { Metadata } from "next";
import FlyingShip from "./components/FlyingShip";
import BackToTop from "./components/BackToTop";

export const metadata: Metadata = {
  title: "André Garcia | Developer Portfolio",
  description:
    "Portfólio de desenvolvedor com projetos em Next.js, animações avançadas e integração com GitHub.",
  icons: {
    icon: "/icon.png", // ou favicon.ico
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-white antialiased">
        <FlyingShip />
        <RocketLoader />
        <BackToTop />
        {children}
      </body>
    </html>
  );
}
