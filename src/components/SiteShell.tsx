import Link from 'next/link';
import Image from 'next/image';
import DecryptToggle from './DecryptToggle';

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-white text-navy [html.decrypt_&]:bg-decryptBg [html.decrypt_&]:text-neutral">
      <div className="mx-auto w-full max-w-5xl px-4 py-8">
        <header className="relative rounded-3xl border border-navy/15 bg-white/90 p-6 shadow-sm [html.decrypt_&]:border-decryptGreen2/25 [html.decrypt_&]:bg-decryptBg/70">
          <div className="flex items-start justify-between gap-4">
            <div className="shrink-0">
              <DecryptToggle />
            </div>

            <nav className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-navy [html.decrypt_&]:text-neutral">
              <Link className="hover:underline" href="/">home</Link>
              <span className="">|</span>
              <Link className="hover:underline" href="/referenzen">Referenzen</Link>
              <span className="">|</span>
              <Link className="hover:underline" href="/zu-mir">zu mir</Link>
            </nav>

            <div className="shrink-0">
              <Image src="/logo.svg" alt="Kahlke CyberSystems Logo" width={140} height={60} className="h-10 w-auto" />
            </div>
          </div>

          <div className="mt-6 h-px w-full bg-navy/10 [html.decrypt_&]:bg-decryptGreen2/25" />
        </header>

        <main className="mt-10">{children}</main>

        <footer className="mt-14 border-t border-navy/15 pt-8 text-sm [html.decrypt_&]:border-decryptGreen2/25">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="font-bold">Kontakt</div>
              <div className="text-navy [html.decrypt_&]:text-neutral/80">
                Lars Kahlke · Zähringerstrasse 35 · 3012 Bern
              </div>
              <div className="mt-2">
                <a className="underline" href="mailto:larskah@kcyber.ch">larskah@kcyber.ch</a>
                <span className=""> · </span>
                <a className="underline" href="tel:+41799438610">079 943 86 10</a>
              </div>
            </div>
            <div className="flex gap-4">
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
