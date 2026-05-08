import Image from 'next/image';
import SiteShell from '@/components/SiteShell';

export default function HomePage() {
  return (
    <SiteShell>
      {/* ── HERO ── */}
      <section className="grid gap-10 md:grid-cols-[280px_1fr] md:items-center">
        
        {/* Profile image – floating card */}
        <div className="mx-auto w-full max-w-[280px] md:mx-0 group">
          <div className="relative h-[340px] overflow-hidden rounded-2xl 
            /* Light Mode: Tieferer, weicherer Schatten */
            shadow-[0_20px_50px_rgba(47,59,79,0.15),0_10px_20px_rgba(47,59,79,0.05)]
            /* Decrypt Mode: Intensiverer Glow */
            [html.decrypt_&]:shadow-[0_0_40px_rgba(63,166,135,0.25)]
            /* Interaktion: Leichtes Schweben beim Drüberfahren */
            transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_30px_60px_rgba(47,59,79,0.2)]
            [html.decrypt_&]:group-hover:shadow-[0_0_50px_rgba(63,166,135,0.4)]"
          >
            <Image
              src="/images/_MG_3327.jpg" 
              alt="Lars Kahlke - Professional"
              fill
              className="object-cover transition-opacity duration-500 [html.decrypt_&]:opacity-0"
              priority
            />
            <Image
              src="/images/_MG_3285.jpg" 
              alt="Lars Kahlke - Security Mode"
              fill
              className="absolute inset-0 object-cover opacity-0 transition-opacity duration-500 [html.decrypt_&]:opacity-100"
              priority
            />
          </div>
        </div>

        {/* Hero Text Content */}
        <div className="flex flex-col justify-center">
          <h1 className="glow text-4xl font-black leading-[1.1] tracking-tight text-[#2f3b4f] [html.decrypt_&]:text-[#3fa687] md:text-6xl">
            Massgeschneiderte IT-Security für KMU.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[#2f3b4f]/75 [html.decrypt_&]:text-[#3fa687]/80 max-w-2xl">
            Ich helfe Ärzten, Kanzleien und Kleinunternehmen in der Schweiz dabei, Risiken zu reduzieren – ohne Overkill. 
            Von Security-Checks über Härtung bis Recovery, wenn es ernst wird.
          </p>
          <div className="mt-8">
            <a
              href="mailto:larskah@kcyber.ch"
              className="inline-block rounded-xl bg-[#2f3b4f] px-8 py-4 text-base font-black text-white shadow-[0_10px_25px_rgba(47,59,79,0.25)] transition-all hover:scale-105 hover:opacity-90 [html.decrypt_&]:border [html.decrypt_&]:border-[#3fa687]/50 [html.decrypt_&]:bg-transparent [html.decrypt_&]:text-[#3fa687] [html.decrypt_&]:shadow-[0_0_20px_rgba(63,166,135,0.2)] [html.decrypt_&]:hover:bg-[#3fa687]/10"
            >
              Erstgespräch vereinbaren →
            </a>
          </div>
        </div>
      </section>

      {/* ── LEISTUNGEN ── */}
      <section className="mt-24">
        <h2 className="glow text-2xl font-black tracking-tight text-[#2f3b4f] [html.decrypt_&]:text-[#3fa687] md:text-3xl">
          Sicherheits-Leistungen
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {[
            {
              title: 'Security-Check',
              desc: 'Analyse der Infrastruktur, Risikobewertung und konkreter Massnahmenplan – ohne Berater-Blabla.',
            },
            {
              title: 'Firewall / VPN / Backup',
              desc: 'Konfiguration, Härtung und Patch-Management für eine verlässliche Basisabsicherung.',
            },
            {
              title: 'Incident Response',
              desc: 'Ransomware oder Datenverlust? Ich unterstütze bei Analyse, Recovery und Prävention.',
            },
            {
              title: 'DSG-Audit & Schulung',
              desc: 'Datenschutz nach Schweizer DSG und Awareness-Training für Ihr gesamtes Team.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl bg-white p-8 shadow-[0_4px_20px_rgba(47,59,79,0.08)] transition-all hover:shadow-[0_12px_30px_rgba(47,59,79,0.12)] [html.decrypt_&]:border [html.decrypt_&]:border-[#3fa687]/20 [html.decrypt_&]:bg-[#0d1117]/80 [html.decrypt_&]:shadow-[0_0_20px_rgba(63,166,135,0.05)] [html.decrypt_&]:backdrop-blur-md"
            >
              <h3 className="text-lg font-black text-[#2f3b4f] [html.decrypt_&]:text-[#3fa687] transition-colors">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#2f3b4f]/70 [html.decrypt_&]:text-[#3fa687]/70">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}