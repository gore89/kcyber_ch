import SiteShell from '@/components/SiteShell';

export default function KontaktPage() {
  return (
    <SiteShell>
      <h1 className="text-3xl font-black tracking-tight">Kontakt</h1>
      <p className="mt-3 max-w-prose opacity-80">
        Schreib mir kurz, was du absichern willst (Branche/Grösse/Setup) – ich melde mich mit einem pragmatischen nächsten Schritt.
      </p>

      <div className="mt-8 rounded-2xl border border-navy/15 bg-white/60 p-6 shadow-sm [html.decrypt_&]:border-decryptGreen2/25 [html.decrypt_&]:bg-decryptBg/60">
        <div className="font-bold">E-Mail</div>
        <a className="mt-1 inline-block underline" href="mailto:larskah@kcyber.ch">
          larskah@kcyber.ch
        </a>

        <div className="mt-5 font-bold">Telefon</div>
        <a className="mt-1 inline-block underline" href="tel:+41799438610">
          079 943 86 10
        </a>

        <div className="mt-5 font-bold">Adresse</div>
        <div className="opacity-85">Lars Kahlke, Zähringerstrasse 35, 3012 Bern</div>
      </div>
    </SiteShell>
  );
}
