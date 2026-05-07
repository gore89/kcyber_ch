import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://kcyber.ch'),
  title: {
    default: 'Kahlke CyberSystems – IT-Security für KMU',
    template: '%s | Kahlke CyberSystems',
  },
  description:
    'Massgeschneiderte IT-Security für KMU in der Schweiz – professioneller Schutz für Ärzte, Kanzleien und Kleinunternehmen.',
  keywords: [
    'IT-Security KMU Schweiz',
    'Cybersecurity Spezialist',
    'IT-Sicherheit Bern',
    'Firewall Härtung',
    'Ransomware Recovery',
    'DSG Audit',
  ],
  openGraph: {
    title: 'Kahlke CyberSystems – IT-Security für KMU',
    description:
      'Professioneller Schutz für Ärzte, Kanzleien und Kleinunternehmen. Security-Checks, Härtung, Recovery und Awareness.',
    type: 'website',
    locale: 'de_CH',
    url: 'https://kcyber.ch',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
