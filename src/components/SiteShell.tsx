import Link from 'next/link';
import Image from 'next/image';
import DecryptToggle from './DecryptToggle';

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-white text-navy [html.decrypt_&]:bg-[#141d2b] [html.decrypt_&]:text-[#9fef00]">
      <div className="mx-auto w-full max-w-5xl px-6">

        {/* Nav row */}
        <div className="flex items-center justify-between gap-6 py-5">
          {/* Logo */}
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

          {/* Nav links */}
          <nav className="flex items-center gap-5 text-sm font-semibold">
            <Link className="hover:underline" href="/">home</Link>
            <span className="opacity-25">|</span>
            <Link className="hover:underline" href="/referenzen">Referenzen</Link>
            <span className="opacity-25">|</span>
            <Link className="hover:underline" href="/zu-mir">zu mir</Link>
          </nav>

          {/* Decrypt button */}
          <div className="shrink-0">
            <DecryptToggle />
          </div>
        </div>

        {/* Separator */}
        <div className="h-px w-full bg-navy/12 [html.decrypt_&]:bg-[#9fef00]/20" />

        {/* Content */}
        <main className="pb-16 pt-10">{children}</main>

        {/* Footer separator */}
        <div className="h-px w-full bg-navy/12 [html.decrypt_&]:bg-[#9fef00]/20" />

        <footer className="py-8 text-sm">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="font-bold">Kahlke CyberSystems</div>
              <div className="mt-1 text-navy/60 [html.decrypt_&]:text-[#9fef00]/60">
                Lars Kahlke · Zähringerstrasse 35 · 3012 Bern
              </div>
              <div className="mt-2">
                <a className="underline" href="mailto:larskah@kcyber.ch">larskah@kcyber.ch</a>
                <span className="mx-2 opacity-30">·</span>
                <a className="underline" href="tel:+41799438610">079 943 86 10</a>
              </div>
            </div>
            <div className="flex items-center gap-5 text-navy/60 [html.decrypt_&]:text-[#9fef00]/60">
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
