import SiteShell from '@/components/SiteShell';

export default function DatenschutzPage() {
  return (
    <SiteShell>
      <h1 className="text-3xl font-black tracking-tight">Datenschutzerklärung</h1>
      <div className="mt-6 space-y-5 rounded-2xl border border-navy/15 bg-white/60 p-6 text-sm shadow-sm [html.decrypt_&]:border-decryptGreen2/25 [html.decrypt_&]:bg-decryptBg/60">
        <p className="opacity-85">
          Diese Datenschutzerklärung informiert darüber, wie personenbezogene Daten auf dieser Website bearbeitet werden.
          Es handelt sich um einen Entwurf (Schweiz/DSG) und sollte vor Veröffentlichung geprüft/angepasst werden.
        </p>

        <section className="space-y-2">
          <h2 className="text-base font-black">1. Verantwortlicher</h2>
          <p className="opacity-85">
            Lars Kahlke, Zähringerstrasse 35, 3012 Bern, Schweiz. Kontakt: <a className="underline" href="mailto:larskah@kcyber.ch">larskah@kcyber.ch</a>
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-black">2. Zugriffsdaten / Server-Logs</h2>
          <p className="opacity-85">
            Beim Besuch der Website können durch den Hosting-Provider (z.B. Vercel) technische Daten wie IP-Adresse, Zeitpunkt, aufgerufene Seiten,
            Browser/OS und Referrer in Server-Logs erfasst werden. Diese Daten dienen dem sicheren Betrieb und der Fehleranalyse.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-black">3. Kontaktaufnahme</h2>
          <p className="opacity-85">
            Wenn du per E-Mail Kontakt aufnimmst, werden die von dir übermittelten Daten (z.B. E-Mail-Adresse, Inhalt der Nachricht) zur Bearbeitung der Anfrage verwendet.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-black">4. Cookies / Tracking</h2>
          <p className="opacity-85">
            Diese Website setzt standardmässig keine Marketing-Tracking-Cookies ein. Falls zukünftig Analyse- oder Drittanbieter-Tools eingebunden werden,
            wird diese Erklärung entsprechend ergänzt.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-black">5. Deine Rechte</h2>
          <p className="opacity-85">
            Du kannst Auskunft, Berichtigung und (soweit anwendbar) Löschung verlangen. Für Anfragen genügt eine Nachricht an die oben genannte Kontaktadresse.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-black">6. Änderungen</h2>
          <p className="opacity-85">Diese Datenschutzerklärung kann bei Bedarf angepasst werden.</p>
        </section>
      </div>
    </SiteShell>
  );
}
