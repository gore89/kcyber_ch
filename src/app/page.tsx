import Image from 'next/image';
import SiteShell from '@/components/SiteShell';

export default function HomePage() {
  return (
    <SiteShell>
      {/* Quote */}
      <section className="text-center">
        <blockquote className="mx-auto max-w-2xl text-2xl font-black leading-snug md:text-4xl">
          „Sicherheit erschwinglich machen ist meine Mission"
        </blockquote>
      </section>

      {/* Hero: photo + text */}
      <section className="mx-auto mt-12 grid max-w-4xl gap-10 md:grid-cols-2 md:items-start">

        {/* Profile image — bounded, not fullscreen */}
        <div className="mx-auto w-full max-w-[280px]">
          <div className="relative h-[340px] overflow-hidden rounded-2xl border border-navy/15 bg-[#d9d9d9]/40 shadow [html.decrypt_&]:border-[#9fef00]/20 [html.decrypt_&]:bg-[#141d2b]">
            <Image
              src="/images/profile-light.svg"
              alt="Profilbild"
              fill
              className="object-cover [html.decrypt_&]:hidden"
              priority
            />
            <Image
              src="/images/profile-dark.svg"
              alt="Profilbild (Decrypt)"
              fill
              className="hidden object-cover [html.decrypt_&]:block"
              priority
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col justify-start pt-2">
          <h1 className="text-xl font-black tracking-tight md:text-2xl">
            IT-Security für KMU in der Schweiz
          </h1>
          <p className="mt-4 text-navy/80 [html.decrypt_&]:text-[#9fef00]/80">
            Ich helfe Praxen, Kanzleien und Kleinunternehmen, Risiken zu reduzieren – ohne Overkill.
            Von Security-Checks über Härtung bis Recovery, wenn's ernst wird.
          </p>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-navy/80 [html.decrypt_&]:text-[#9fef00]/80">
            <li>Security-Check &amp; Massnahmenplan</li>
            <li>Firewall/VPN, Backup/Restore, Patch- &amp; Rechtekonzept</li>
            <li>Incident Support (Ransomware/Recovery)</li>
            <li>DSG-Audit &amp; Awareness-Schulungen</li>
          </ul>

          <div className="mt-8">
            <a
              href="mailto:larskah@kcyber.ch"
              className="inline-block rounded-xl bg-navy px-6 py-3 text-sm font-black text-white shadow transition hover:opacity-90 [html.decrypt_&]:border [html.decrypt_&]:border-[#9fef00]/50 [html.decrypt_&]:bg-transparent [html.decrypt_&]:text-[#9fef00] [html.decrypt_&]:shadow-[0_0_12px_rgba(159,239,0,0.15)] [html.decrypt_&]:hover:bg-[#9fef00]/10"
            >
              Jetzt Kontakt herstellen
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
