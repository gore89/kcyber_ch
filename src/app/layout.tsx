import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import SiteShell from "@/components/SiteShell"; // <-- Hinzugefügt
import "./globals.css";

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
        <ThemeProvider>
          {/* SiteShell umschließt nun ALLE Unterseiten */}
          <SiteShell>
            {children}
          </SiteShell>
        </ThemeProvider>
      </body>
    </html>
  );
}