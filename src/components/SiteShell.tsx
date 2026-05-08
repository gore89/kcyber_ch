'use client';

import Link from 'next/link';
import DecryptToggle from './DecryptToggle';

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col px-6 py-8 md:px-12">
      {/* ── HEADER ── */}
      <header className="flex items-center justify-between mb-16">
        <div className="flex-1">
          <DecryptToggle />
        </div>

        {/* 1. Navigations-Links zentriert */}
        <nav className="hidden md:flex flex-1 justify-center gap-8 font-mono text-sm tracking-tighter opacity-70">
          <Link href="/" className="hover:opacity-100 transition-opacity">home</Link>
          <Link href="/referenzen" className="hover:opacity-100 transition-opacity">Referenzen</Link>
          <Link href="/zu-mir" className="hover:opacity-100 transition-opacity">zu mir</Link>
        </nav>

        {/* 2. Logo vergrößert (W-16 statt W-12) */}
        <div className="flex-1 flex justify-end">
          <div className="w-16 h-16 relative">
             {/* Hier dein Logo-SVG oder Image einsetzen */}
             <div className="w-full h-full bg-[#2f3b4f] rounded-lg [html.decrypt_&]:bg-[#3fa687]" />
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full">
        {children}
      </main>

      {/* ── FOOTER ── */}
      <footer className="mt-20 border-t border-black/5 pt-10 pb-6 text-[10px] opacity-50">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="font-bold">Kahlke CyberSystems</p>
            <p>Lars Kahlke • Zähringerstrasse 35 • 3012 Bern</p>
            <p>larskah@kcyber.ch • 079 943 86 10</p>
          </div>
          
          {/* 5. Impressum, Datenschutz, Kontakt weiter auseinander */}
          <div className="flex gap-8 md:justify-end">
            <Link href="/legal" className="hover:underline">Impressum</Link>
            <Link href="/privacy" className="hover:underline">Datenschutz</Link>
            <Link href="/kontakt" className="hover:underline">Kontakt</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}