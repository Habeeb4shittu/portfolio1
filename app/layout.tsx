import type { Metadata } from "next";
import "./styles.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Habeeb's Portfolio",
  description: "Portfolio website for Habeebllah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
