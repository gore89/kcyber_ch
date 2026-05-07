import Image from 'next/image';
import Link from 'next/link';
import SiteShell from '@/components/SiteShell';

export default function HomePage() {
  return (
    <SiteShell>
      <section className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center rounded-full border border-navy/20 bg-white/70 px-3 py-1 text-xs font-semibold text-navy/90 [html.decrypt_&]:border-decryptGreen2/30 [html.decrypt_&]:bg-decryptBg/60 [html.decrypt_&]:text-decryptGreen2">
            IT-Security KMU Schweiz
          </div>
          <h1 className="text-3xl font-black tracking-tight md:text-5xl">
            Massgeschneiderte IT-Security für KMU –<br />
            <span className="opacity-90">professioneller Schutz für Ärzte, Kanzleien und Kleinunternehmen.</span>
          </h1>
          <p className="max-w-prose opacity-80">
            Seriös, pragmatisch und technisch tief: Security-Checks, Härtung, Recovery, Awareness – damit dein Betrieb auch morgen noch läuft.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:larskah@kcyber.ch"
              className="rounded-xl bg-navy px-4 py-2 text-sm font-bold text-white shadow hover:opacity-95 [html.decrypt_&]:bg-decryptGreen1"
            >
              Erstgespräch anfragen
            </a>
            <Link
              href="/site/referenzen"
              className="rounded-xl border border-navy/20 bg-white/60 px-4 py-2 text-sm font-bold hover:bg-white [html.decrypt_&]:border-decryptGreen2/30 [html.decrypt_&]:bg-decryptBg/60"
            >
              Case Studies ansehen
            </Link>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl border border-navy/15 bg-white/60 shadow-sm [html.decrypt_&]:border-decryptGreen2/25 [html.decrypt_&]:bg-decryptBg/60">
          <Image
            src="/images/profile-light.svg"
            alt="Profilbild (Placeholder)"
            fill
            className="object-cover [html.decrypt_&]:hidden"
            priority
          />
          <Image
            src="/images/profile-dark.svg"
            alt="Profilbild (Placeholder, Decrypt)"
            fill
            className="hidden object-cover [html.decrypt_&]:block"
            priority
          />
        </div>
      </section>

      <section className="mt-14 grid gap-6 md:grid-cols-3">
        {[
          {
            title: 'Security-Check',
            body: 'Schnelle Standortbestimmung: Risiken, Quick Wins, Prioritäten – ohne Buzzword-Bingo.',
          },
          {
            title: 'Härtung & Betrieb',
            body: 'Firewall, VPN, EDR/AV, Backup-Strategien, Patch- & Rechtekonzept – sauber umgesetzt.',
          },
          {
            title: 'Recovery & Incident Support',
            body: 'Wenn es brennt: Analyse, Wiederherstellung, Lessons Learned und echte Resilienz.',
          },
        ].map((c) => (
          <div
            key={c.title}
            className="rounded-2xl border border-navy/15 bg-white/60 p-6 shadow-sm [html.decrypt_&]:border-decryptGreen2/25 [html.decrypt_&]:bg-decryptBg/60"
          >
            <div className="text-lg font-black">{c.title}</div>
            <p className="mt-2 opacity-80">{c.body}</p>
          </div>
        ))}
      </section>
    </SiteShell>
  );
}
