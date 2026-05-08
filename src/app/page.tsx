'use client';

import Image from 'next/image';
import SiteShell from '@/components/SiteShell';
import { useTheme } from '@/context/ThemeContext';

export default function HomePage() {
  const { isDecrypt } = useTheme();

  return (
    <SiteShell>
      {/* ── HERO ── */}
      {/* 3. & 4. Bild links, Text rechts daneben mit viel Platz */}
      <section className="grid gap-16 md:grid-cols-[320px_1fr] md:items-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
        
        {/* Profile image – Nach links gerückt */}
        <div className="group">
          <div className="relative h-[420px] w-full overflow-hidden rounded-3xl 
            shadow-[0_20px_50px_rgba(47,59,79,0.12)]
            [html.decrypt_&]:shadow-[0_0_40px_rgba(63,166,135,0.2)]
            transition-all duration-700 ease-out group-hover:-translate-y-2"
          >
            <Image
              src="/images/_MG_3327.jpg" 
              alt="Lars Kahlke"
              fill
              className="object-cover transition-opacity duration-700 [html.decrypt_&]:opacity-0"
              priority
            />
            <Image
              src="/images/_MG_3285.jpg" 
              alt="Lars Kahlke Security"
              fill
              className="absolute inset-0 object-cover opacity-0 transition-opacity duration-700 [html.decrypt_&]:opacity-100"
              priority
            />
          </div>
        </div>

        {/* Motto & Beschreibung rechts daneben */}
        <div className="flex flex-col">
          <h1 className="glow text-5xl font-black leading-[1.0] tracking-tighter text-[#2f3b4f] [html.decrypt_&]:text-[#3fa687] md:text-8xl">
            Massgeschneiderte <br /> IT-Security für KMU.
          </h1>
          <p className="mt-10 text-xl leading-relaxed text-[#2f3b4f]/70 [html.decrypt_&]:text-[#3fa687]/80 max-w-2xl">
            Ich helfe Ärzten, Kanzleien und Schweizer KMU dabei, Risiken zu minimieren – ohne bürokratischen Overkill. 
            Prävention, Härtung und schnelle Hilfe im Ernstfall.
          </p>
          <div className="mt-12">
            {/* CTA Button - Schrift jetzt weiss */}
            <a
              href="mailto:larskah@kcyber.ch"
              className="inline-block rounded-2xl bg-[#2f3b4f] px-10 py-5 text-base font-black text-white shadow-xl transition-all hover:scale-105 [html.decrypt_&]:border [html.decrypt_&]:border-[#3fa687]/50 [html.decrypt_&]:bg-transparent [html.decrypt_&]:text-[#3fa687]"
            >
              Erstgespräch vereinbaren →
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="mt-32 mb-20">
        <h2 className="glow text-2xl font-black tracking-tight opacity-30 mb-10">Sicherheits-Services</h2>
        <div className="grid gap-12 sm:grid-cols-2">
          {[
            { title: 'Security-Audit', desc: 'Analyse der Infrastruktur, Risikobewertung und konkreter Massnahmenplan.' },
            { title: 'Infrastructure Hardening', desc: 'Firewalls, VPNs und Backups – so konfiguriert, dass sie wirklich halten.' },
            { title: 'Incident Response', desc: 'Hackerangriff oder Datenverlust? Ich leite die Recovery ein.' },
            { title: 'Compliance & Training', desc: 'Vorbereitung auf das Schweizer DSG und Team-Schulungen.' },
          ].map((item) => (
            <div key={item.title} className="group border-t border-black/5 pt-8 [html.decrypt_&]:border-[#3fa687]/20">
              <h3 className="text-xl font-black [html.decrypt_&]:text-[#3fa687]">{item.title}</h3>
              <p className="mt-3 text-base opacity-70">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}