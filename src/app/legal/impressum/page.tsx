import SiteShell from '@/components/SiteShell';

export default function ImpressumPage() {
  return (
    <SiteShell>
      <h1 className="text-3xl font-black tracking-tight">Impressum</h1>
      <div className="mt-6 space-y-4 rounded-2xl border border-navy/15 bg-white/60 p-6 shadow-sm [html.decrypt_&]:border-decryptGreen2/25 [html.decrypt_&]:bg-decryptBg/60">
        <p className="opacity-85">
          <strong>Anbieter</strong>
          <br />
          Kahlke CyberSystems
          <br />
          Lars Kahlke
          <br />
          Zähringerstrasse 35
          <br />
          3012 Bern
          <br />
          Schweiz
        </p>
        <p className="opacity-85">
          <strong>Kontakt</strong>
          <br />
          E-Mail: <a className="underline" href="mailto:larskah@kcyber.ch">larskah@kcyber.ch</a>
          <br />
          Telefon: <a className="underline" href="tel:+41799438610">079 943 86 10</a>
        </p>
        <p className="text-sm opacity-70">
          Hinweis: Dieses Impressum ist ein Entwurf und ersetzt keine Rechtsberatung. Bitte Inhalte vor Veröffentlichung prüfen.
        </p>
      </div>
    </SiteShell>
  );
}
