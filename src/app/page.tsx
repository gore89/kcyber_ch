'use client';

import Image from 'next/image';
import SiteShell from '@/components/SiteShell';
import { useTheme } from '@/context/ThemeContext';

export default function HomePage() {
  const { isDecrypt } = useTheme();

  return (
    <SiteShell>
      {/* ── HERO ── */}
      {/* md:grid-cols-[450px_1fr] sorgt dafür, dass das Bild links genau 450px bekommt und der Text den Rest */}
      <section className="grid gap-20 md:grid-cols-[450px_1fr] md:items-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
        
        {/* Profile image (Links, fest definiert in der Grösse) */}
        <div className="relative h-[650px] w-full overflow-hidden rounded-3xl 
          shadow-[0_40px_100px_rgba(47,59,79,0.18)]
          [html.decrypt_&]:shadow-[0_0_50px_rgba(63,166,135,0.25)]
          transition-all duration-700 ease-out"
        >
          <Image
            src="/images/_MG_3327.jpg" 
            alt="Lars Kahlke - Professional IT Security Consultant Bern"
            fill
            className="object-cover transition-opacity duration-700 [html.decrypt_&]:opacity-0"
            priority
          />
          <Image
            src="/images/_MG_3285.jpg" 
            alt="Lars Kahlke - Cybersecurity Expert Hacker Mode"
            fill
            className="absolute inset-0 object-cover opacity-0 transition-opacity duration-700 [html.decrypt_&]:opacity-100"
            priority
          />
        </div>

        {/* Motto & Beschreibung rechts daneben */}
        <div className="flex flex-col">
          <h1 className="glow text-5xl font-black leading-[0.9] tracking-tighter text-[#2f3b4f] [html.decrypt_&]:text-[#3fa687] md:text-9xl">
            Massge- <br /> schneiderte <br /> IT-Security.
          </h1>
          <p className="mt-12 text-xl md:text-2xl leading-relaxed text-[#2f3b4f]/70 [html.decrypt_&]:text-[#3fa687]/80 max-w-2xl">
            Ich helfe Ärzten, Kanzleien und Schweizer KMU dabei, Risiken zu minimieren – ohne bürokratischen Overkill. Prävention, Härtung und schnelle Hilfe im Ernstfall.
          </p>
          
          <div className="mt-16">
            {/* ── CTA BUTTON FIX ── */}
            {/* Hier ist jetzt text-white und eine stärkere Shadow */}
            <a
              href="mailto:larskah@kcyber.ch"
              className="inline-block rounded-2xl bg-[#2f3b4f] px-12 py-6 text-xl font-black text-white shadow-[0_20px_50px_rgba(47,59,79,0.3)] transition-all hover:scale-105 hover:bg-[#3d4f68] [html.decrypt_&]:border [html.decrypt_&]:border-[#3fa687]/50 [html.decrypt_&]:bg-transparent [html.decrypt_&]:text-[#3fa687] [html.decrypt_&]:shadow-[0_0_30px_rgba(63,166,135,0.25)] [html.decrypt_&]:hover:bg-[#3fa687]/10"
            >
              Erstgespräch vereinbaren →
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVICES (cleanere Liste) ── */}
      <section className="mt-48 mb-32">
        <h2 className="glow text-3xl font-black tracking-tighter opacity-15 mb-20 uppercase">Services</h2>
        <div className="grid gap-x-20 gap-y-16 sm:grid-cols-2">
          {[
            { title: 'Security-Audit', desc: 'Analyse der Infrastruktur, Risikobewertung und konkreter Massnahmenplan.' },
            { title: 'Infrastructure Hardening', desc: 'Firewalls, VPNs und Backups – so konfiguriert, dass sie wirklich halten.' },
            { title: 'Incident Response', desc: 'Hackerangriff oder Datenverlust? Ich leite die Recovery ein.' },
            { title: 'Compliance & Training', desc: 'Vorbereitung auf das Schweizer DSG und Team-Schulungen.' },
          ].map((item) => (
            <div key={item.title} className="group border-t border-black/10 pt-12 [html.decrypt_&]:border-[#3fa687]/20">
              <h3 className="text-2xl font-black [html.decrypt_&]:text-[#3fa687] mb-5 tracking-tight">{item.title}</h3>
              <p className="text-lg opacity-60 leading-relaxed max-w-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}