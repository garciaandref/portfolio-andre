import "./globals.css";
import RocketLoader from "./components/RocketLoader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-white">
        <RocketLoader />
        {children}
      </body>
    </html>
  );
}
