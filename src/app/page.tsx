import Image from 'next/image';
import SiteShell from '@/components/SiteShell';

export default function HomePage() {
  return (
    <SiteShell>

      {/* ── HERO ── */}
      <section className="grid gap-10 md:grid-cols-[280px_1fr] md:items-start">

        {/* Profile image – floating card */}
        <div className="mx-auto w-full max-w-[280px] md:mx-0">
          <div className="relative h-[340px] overflow-hidden rounded-2xl shadow-[0_8px_32px_rgba(47,59,79,0.18)] [html.decrypt_&]:shadow-[0_0_32px_rgba(63,166,135,0.2)]">
            <Image
              src="/images/profile-light.svg"
              alt="Lars Kahlke"
              fill
              className="object-cover [html.decrypt_&]:hidden"
              priority
            />
            <Image
              src="/images/profile-dark.svg"
              alt="Lars Kahlke"
              fill
              className="hidden object-cover [html.decrypt_&]:block"
              priority
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center">
          <h1 className="glow text-3xl font-black leading-tight tracking-tight md:text-5xl">
            Massgeschneiderte IT-Security für KMU – professioneller Schutz für Ärzte, Kanzleien und Kleinunternehmen.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-[#2f3b4f]/75 [html.decrypt_&]:text-[#3fa687]/80">
            Ich helfe KMU in der Schweiz dabei, Risiken zu reduzieren – ohne Overkill.
            Von Security-Checks über Härtung bis Recovery, wenn es ernst wird.
          </p>
          <div className="mt-8">
            <a
              href="mailto:larskah@kcyber.ch"
              className="inline-block rounded-xl bg-[#2f3b4f] px-7 py-3 text-sm font-black text-white shadow-[0_4px_18px_rgba(47,59,79,0.3)] transition hover:opacity-90 [html.decrypt_&]:border [html.decrypt_&]:border-[#3fa687]/50 [html.decrypt_&]:bg-transparent [html.decrypt_&]:text-[#3fa687] [html.decrypt_&]:shadow-[0_0_16px_rgba(63,166,135,0.25)] [html.decrypt_&]:hover:bg-[#3fa687]/10"
            >
              Erstgespräch vereinbaren →
            </a>
          </div>
        </div>
      </section>

      {/* ── LEISTUNGEN ── */}
      <section className="mt-16">
        <h2 className="glow text-xl font-black tracking-tight md:text-2xl">Was ich tue</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {[
            {
              title: 'Security-Check',
              desc: 'Analyse der Infrastruktur, Risikobewertung und konkreter Massnahmenplan – ohne Berater-Blabla.',
            },
            {
              title: 'Firewall / VPN / Backup',
              desc: 'Konfiguration, Härtung und Patch-Management für verlässliche Basisabsicherung.',
            },
            {
              title: 'Incident Response',
              desc: 'Ransomware, Datenverlust, Einbruch – ich helfe bei Analyse, Recovery und Lessons Learned.',
            },
            {
              title: 'DSG-Audit & Schulung',
              desc: 'Datenschutz-Grundlagen nach CH DSG und Awareness-Training für Ihr Team.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(47,59,79,0.1)] [html.decrypt_&]:border [html.decrypt_&]:border-[#3fa687]/20 [html.decrypt_&]:bg-[#0d1117]/80 [html.decrypt_&]:shadow-[0_0_20px_rgba(63,166,135,0.08)] [html.decrypt_&]:[backdrop-filter:blur(8px)]"
            >
              <h3 className="font-black text-[#2f3b4f] [html.decrypt_&]:text-[#3fa687]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#2f3b4f]/70 [html.decrypt_&]:text-[#3fa687]/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </SiteShell>
  );
}
