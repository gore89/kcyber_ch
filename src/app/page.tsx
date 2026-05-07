import Image from 'next/image';
import SiteShell from '@/components/SiteShell';

export default function HomePage() {
  return (
    <SiteShell>
      <section className="text-center">
        <blockquote className="mx-auto max-w-2xl text-2xl font-black leading-snug md:text-4xl">
          „… Sicherheit erschwinglich machen ist meine Mission“
        </blockquote>
      </section>

      <section className="mx-auto mt-10 grid max-w-4xl gap-8 md:grid-cols-2 md:items-start">
        <div className="mx-auto w-full max-w-sm">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-navy/15 bg-neutral/30 shadow-sm [html.decrypt_&]:border-decryptGreen2/25 [html.decrypt_&]:bg-decryptBg/40">
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
        </div>

        <div className="text-left">
          <h1 className="text-xl font-black tracking-tight md:text-2xl">IT-Security für KMU in der Schweiz</h1>
          <p className="mt-4 text-navy/90 [html.decrypt_&]:text-neutral/85">
            Ich helfe Praxen, Kanzleien und Kleinunternehmen dabei, Risiken zu reduzieren – ohne Overkill.
            Von Security-Checks über Härtung bis Recovery, wenn’s ernst wird.
          </p>
          <ul className="mt-5 list-disc space-y-2 pl-5 opacity-85">
            <li>Security-Check & Massnahmenplan</li>
            <li>Firewall/VPN, Backup/Restore, Rechte & Patch-Management</li>
            <li>Incident Support (Ransomware/Recovery) + Lessons Learned</li>
            <li>DSG-Audit & Awareness</li>
          </ul>
        </div>
      </section>

      <div className="mt-12 flex justify-center">
        <a
          href="mailto:larskah@kcyber.ch"
          className="rounded-xl bg-navy px-6 py-3 text-base font-black text-white shadow hover:opacity-95 [html.decrypt_&]:bg-decryptGreen1"
        >
          Jetzt Kontakt herstellen
        </a>
      </div>
    </SiteShell>
  );
}
