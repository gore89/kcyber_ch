import Link from 'next/link';
import Image from 'next/image';
import DecryptToggle from './DecryptToggle';

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-[#eef0f3] text-[#2f3b4f] [html.decrypt_&]:bg-[#05070a] [html.decrypt_&]:text-[#3fa687]">
      <div className="mx-auto w-full max-w-5xl px-6">

        {/* ── HEADER ── */}
        <header className="flex items-center justify-between gap-6 py-5">
          {/* Decrypt button – top left */}
          <div className="shrink-0">
            <DecryptToggle />
          </div>

          {/* Nav – center */}
          <nav className="flex items-center gap-5 text-sm font-semibold">
            <Link href="/" className="hover:opacity-70">home</Link>
            <span className="opacity-20">|</span>
            <Link href="/referenzen" className="hover:opacity-70">Referenzen</Link>
            <span className="opacity-20">|</span>
            <Link href="/zu-mir" className="hover:opacity-70">zu mir</Link>
          </nav>

          {/* Logo – top right */}
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.png"
              alt="Kahlke CyberSystems"
              width={110}
              height={48}
              className="h-9 w-auto [html.decrypt_&]:hidden"
            />
            <Image
              src="/logo_white_svg.svg"
              alt="Kahlke CyberSystems"
              width={110}
              height={48}
              className="hidden h-9 w-auto [html.decrypt_&]:block"
            />
          </Link>
        </header>

        {/* ── SEPARATOR ── */}
        <div className="h-px w-full rounded-full bg-[#2f3b4f]/12 [html.decrypt_&]:bg-[#3fa687]/20" />

        {/* ── MAIN ── */}
        <main className="pb-20 pt-12">{children}</main>

        {/* ── FOOTER SEPARATOR ── */}
        <div className="h-px w-full rounded-full bg-[#2f3b4f]/12 [html.decrypt_&]:bg-[#3fa687]/20" />

        {/* ── FOOTER ── */}
        <footer className="py-10 text-sm text-[#2f3b4f]/70 [html.decrypt_&]:text-[#3fa687]/70">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="font-bold text-[#2f3b4f] [html.decrypt_&]:text-[#3fa687]">Kahlke CyberSystems</div>
              <div className="mt-1">Lars Kahlke · Zähringerstrasse 35 · 3012 Bern</div>
              <div className="mt-2 flex gap-3">
                <a href="mailto:larskah@kcyber.ch" className="underline underline-offset-2">larskah@kcyber.ch</a>
                <span className="opacity-30">·</span>
                <a href="tel:+41799438610" className="underline underline-offset-2">079 943 86 10</a>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <Link href="/legal/impressum" className="hover:underline">Impressum</Link>
              <Link href="/legal/datenschutz" className="hover:underline">Datenschutz</Link>
              <Link href="/kontakt" className="hover:underline">Kontakt</Link>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
