'use client';

import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';

export default function HomePage() {
  const { isDecrypt } = useTheme();

  return (
    <>
      {/* ── HERO ── */}
      {/* md:justify-items-center sorgt dafür, dass das Bild mittig sitzt */}
      <section className="grid gap-12 md:grid-cols-[300px_1fr] md:items-center md:justify-items-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
        
        {/* Profile image – floating card */}
        {/* mx-auto zentriert auf Mobile, md:mx-0 entfernt es auf Desktop, da das Grid es mittig hält */}
        <div className="mx-auto w-full max-w-[300px] md:mx-0 group flex justify-center">
          <div className="relative h-[380px] w-full overflow-hidden rounded-3xl 
            /* Light Mode Shadow */
            shadow-[0_20px_50px_rgba(47,59,79,0.15),0_10px_20px_rgba(47,59,79,0.05)]
            /* Decrypt Mode Glow */
            [html.decrypt_&]:shadow-[0_0_40px_rgba(63,166,135,0.25)]
            /* Interaction - Nur noch Translate, keine Rotation */
            transition-all duration-700 ease-out group-hover:-translate-y-3"
          >
            <Image
              src="/images/_MG_3327.jpg" 
              alt="Lars Kahlke - Professional"
              fill
              className="object-cover transition-opacity duration-700 [html.decrypt_&]:opacity-0"
              priority
            />
            <Image
              src="/images/_MG_3285.jpg" 
              alt="Lars Kahlke - Security Expert"
              fill
              className="absolute inset-0 object-cover opacity-0 transition-opacity duration-700 [html.decrypt_&]:opacity-100"
              priority
            />
          </div>
        </div>

        {/* Hero Text Content */}
        <div className="flex flex-col justify-center">
          <h1 className="glow text-4xl font-black leading-[1.05] tracking-tight text-[#2f3b4f] [html.decrypt_&]:text-[#3fa687] md:text-7xl">
            Massgeschneiderte <br /> IT-Security für KMU.
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-[#2f3b4f]/75 [html.decrypt_&]:text-[#3fa687]/80 max-w-xl">
            Ich helfe Ärzten, Kanzleien und Schweizer KMU dabei, Risiken zu minimieren – ohne bürokratischen Overkill. 
            Prävention, Härtung und schnelle Hilfe im Ernstfall.
          </p>
          <div className="mt-10">
            <a
              href="mailto:larskah@kcyber.ch"
              className="inline-block rounded-2xl bg-[#2f3b4f] px-10 py-5 text-base font-black text-white shadow-[0_15px_30px_rgba(47,59,79,0.2)] transition-all hover:scale-105 hover:shadow-[0_20px_40px_rgba(47,59,79,0.3)] [html.decrypt_&]:border [html.decrypt_&]:border-[#3fa687]/50 [html.decrypt_&]:bg-transparent [html.decrypt_&]:text-[#3fa687] [html.decrypt_&]:shadow-[0_0_25px_rgba(63,166,135,0.2)] [html.decrypt_&]:hover:bg-[#3fa687]/10"
            >
              Erstgespräch vereinbaren →
            </a>
          </div>
        </div>
      </section>

      {/* ── LEISTUNGEN ── */}
      <section className="mt-28 mb-20">
        <h2 className="glow text-2xl font-black tracking-tight text-[#2f3b4f] [html.decrypt_&]:text-[#3fa687] md:text-3xl">
          Sicherheits-Services
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {[
            {
              title: 'Security-Audit',
              desc: 'Gnadenlose Analyse Ihrer IT-Infrastruktur. Wir finden die Lücken, bevor es andere tun.',
            },
            {
              title: 'Infrastructure Hardening',
              desc: 'Firewalls, VPNs und Backups – so konfiguriert, dass sie im Ernstfall wirklich halten.',
            },
            {
              title: 'Incident Response',
              desc: 'Hackerangriff oder Datenverlust? Ich leite die Recovery ein und sichere Beweise.',
            },
            {
              title: 'Compliance & Training',
              desc: 'Vorbereitung auf das Schweizer DSG und Sensibilisierung Ihres Teams gegen Phishing.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group relative rounded-3xl bg-white p-10 shadow-[0_4px_25px_rgba(47,59,79,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(47,59,79,0.1)] [html.decrypt_&]:border [html.decrypt_&]:border-[#3fa687]/20 [html.decrypt_&]:bg-[#0d1117]/80 [html.decrypt_&]:backdrop-blur-xl"
            >
              <h3 className="text-xl font-black text-[#2f3b4f] [html.decrypt_&]:text-[#3fa687]">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#2f3b4f]/70 [html.decrypt_&]:text-[#3fa687]/70">
                {item.desc}
              </p>
              {/* Glow-Effekt im Decrypt Mode bei Hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none [html.decrypt_&]:shadow-[inset_0_0_20px_rgba(63,166,135,0.1)]" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}