import Link from 'next/link';
import DecryptToggle from './DecryptToggle';

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-neutral/40 text-navy [html.decrypt_&]:bg-decryptBg [html.decrypt_&]:text-neutral">
      <header className="mx-auto w-full max-w-6xl px-4 py-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-3">
            <DecryptToggle />
            <Link href="/" className="text-lg font-black tracking-tight">
              Kahlke <span className="opacity-80">CyberSystems</span>
            </Link>
          </div>

          <nav className="flex flex-wrap items-center justify-end gap-3 text-sm font-semibold">
            <Link className="hover:underline" href="/">Home</Link>
            <Link className="hover:underline" href="/site/referenzen">Referenzen</Link>
            <Link className="hover:underline" href="/site/ueber-mich">Über mich</Link>
            <Link className="hover:underline" href="/site/kontakt">Kontakt</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 pb-16">{children}</main>

      <footer className="border-t border-navy/15 [html.decrypt_&]:border-decryptGreen2/25">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 text-sm">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <div className="font-bold">Kahlke CyberSystems</div>
              <div className="opacity-80">Massgeschneiderte IT-Security für KMU</div>
            </div>
            <div>
              <div className="font-bold">Kontakt</div>
              <div className="opacity-80">
                Lars Kahlke<br />
                Zähringerstrasse 35<br />
                3012 Bern
              </div>
              <div className="mt-2">
                <a className="underline" href="mailto:larskah@kcyber.ch">larskah@kcyber.ch</a>
                <div className="opacity-80">079 943 86 10</div>
              </div>
            </div>
            <div className="flex items-start gap-4 md:justify-end">
              <Link className="hover:underline" href="/legal/impressum">Impressum</Link>
              <Link className="hover:underline" href="/legal/datenschutz">Datenschutz</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
