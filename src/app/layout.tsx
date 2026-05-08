import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

// Hier kannst du deine SEO-Daten anpassen
export const metadata: Metadata = {
  title: "Kahlke Cyber Systems | IT-Security für KMU",
  description: "Professioneller Schutz für Ärzte, Kanzleien und Kleinunternehmen in der Schweiz.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        {/* Der ThemeProvider muss ALLES umschließen, was im Body liegt */}
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}