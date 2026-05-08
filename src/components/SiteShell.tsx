'use client';

import Link from 'next/link';
import DecryptToggle from './DecryptToggle';
import Image from 'next/image';

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col px-6 py-8 md:px-16">
      {/* ── HEADER ── */}
      <header className="grid grid-cols-2 md:grid-cols-3 items-center mb-24 max-w-[1400px] mx-auto w-full">
        
        {/* Links: Decrypt Toggle */}
        <div className="flex justify-start">
          <DecryptToggle />
        </div>

        {/* Mitte: Nav-Links (Jetzt wirklich zentriert) */}
        <nav className="hidden md:flex justify-center gap-10 font-mono text-[10px] tracking-[0.2em] uppercase opacity-50">
          <Link href="/" className="hover:opacity-100 transition-opacity">home</Link>
          <Link href="/referenzen" className="hover:opacity-100 transition-opacity">Referenzen</Link>
          <Link href="/zu-mir" className="hover:opacity-100 transition-opacity">zu mir</Link>
        </nav>

        {/* Rechts: Wechselndes Logo */}
        <div className="flex justify-end">
          <Link href="/" className="relative w-16 h-16 md:w-20 md:h-20">
            {/* Normales Logo (Sichtbar wenn NICHT decrypt) */}
            <Image 
              src="/logo.png" 
              alt="Logo Kahlke CyberSystems" 
              fill 
              className="object-contain block [html.decrypt_&]:hidden" 
            />
            {/* Weißes Logo (Sichtbar NUR wenn decrypt) */}
            <Image 
              src="/logo_white_png.png" 
              alt="Logo Kahlke CyberSystems" 
              fill 
              className="object-contain hidden [html.decrypt_&]:block" 
            />
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[1400px] mx-auto">
        {children}
      </main>

      {/* ── FOOTER ── */}
      <footer className="mt-32 border-t border-black/5 pt-12 pb-10 text-[10px] opacity-40 max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div>
            <p className="font-bold text-xs mb-1 uppercase tracking-widest">Kahlke CyberSystems</p>
            <p>Lars Kahlke • Zähringerstrasse 35 • 3012 Bern</p>
            <p>larskah@kcyber.ch • 079 943 86 10</p>
          </div>
          
          <div className="flex flex-wrap gap-x-12 gap-y-4 md:justify-end uppercase font-bold tracking-[0.15em]">
            <Link href="/legal" className="hover:underline">Impressum</Link>
            <Link href="/privacy" className="hover:underline">Datenschutz</Link>
            <Link href="/kontakt" className="hover:underline">Kontakt</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}