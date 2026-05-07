import Link from 'next/link';
import Image from 'next/image';
import DecryptToggle from './DecryptToggle';

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-[#f8f8f8] text-navy [html.decrypt_&]:bg-[#141d2b] [html.decrypt_&]:text-[#9fef00]">
      <div className="mx-auto w-full max-w-5xl px-4">

        {/* ── TOPBAR / NAV ── */}
        <div className="flex items-center justify-between gap-4 py-4">
          <div className="shrink-0">
            <DecryptToggle />
          </div>

          <nav className="flex items-center gap-5 text-sm font-semibold text-navy [html.decrypt_&]:text-[#9fef00]">
            <Link className="hover:underline" href="/">home</Link>
            <span className="opacity-30">|</span>
            <Link className="hover:underline" href="/referenzen">Referenzen</Link>
            <span className="opacity-30">|</span>
            <Link className="hover:underline" href="/zu-mir">zu mir</Link>
          </nav>

          <div className="shrink-0">
            <Image
              src="/logo.png"
              alt="Kahlke CyberSystems"
              width={120}
              height={52}
              className="h-10 w-auto [html.decrypt_&]:hidden"
            />
            <Image
              src="/logo_white_svg.svg"
              alt="Kahlke CyberSystems"
              width={120}
              height={52}
              className="hidden h-10 w-auto [html.decrypt_&]:block"
            />
          </div>
        </div>

        {/* ── SEPARATOR LINE ── */}
        <div className="h-px w-full rounded-full bg-navy/15 [html.decrypt_&]:bg-[#9fef00]/20" />

        {/* ── MAIN CONTENT ── */}
        <main className="pb-16 pt-10">{children}</main>

        {/* ── FOOTER ── */}
        <div className="h-px w-full rounded-full bg-navy/15 [html.decrypt_&]:bg-[#9fef00]/20" />
        <footer className="py-8 text-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="font-bold">Kahlke CyberSystems</div>
              <div className="mt-1 opacity-70">
                Lars Kahlke · Zähringerstrasse 35 · 3012 Bern
              </div>
              <div className="mt-2">
                <a className="underline" href="mailto:larskah@kcyber.ch">larskah@kcyber.ch</a>
                <span className="mx-2 opacity-40">·</span>
                <a className="underline" href="tel:+41799438610">079 943 86 10</a>
              </div>
            </div>
            <div className="flex items-center gap-5 opacity-70">
              <Link className="hover:underline" href="/legal/impressum">Impressum</Link>
              <Link className="hover:underline" href="/legal/datenschutz">Datenschutz</Link>
              <Link className="hover:underline" href="/kontakt">Kontakt</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
