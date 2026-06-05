import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./styles.css";
import "./global.css";
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
          <SpeedInsights />
          <Analytics />
        </main>
        <Footer />
        <script src="https://leadsmind-new-dashboard.vercel.app/api/lena/embed/4b6a9a9c-1634-4b91-95a4-0b51ef4ea780"></script>
      </body>
    </html>
  );
}
