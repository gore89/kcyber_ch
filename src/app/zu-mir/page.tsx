import SiteShell from '@/components/SiteShell';

const skills = [
  { name: 'Netzwerk-Security', pct: 85 },
  { name: 'Firewalling / VPN', pct: 80 },
  { name: 'Incident Response', pct: 75 },
  { name: 'Penetration Testing', pct: 65 },
];

function bar(pct: number) {
  const total = 14;
  const filled = Math.round((pct / 100) * total);
  return `[${'#'.repeat(filled)}${'-'.repeat(Math.max(0, total - filled))}] ${pct}%`;
}

export default function UeberMichPage() {
  return (
    <SiteShell>
      <h1 className="text-3xl font-black tracking-tight">Über mich</h1>
      <p className="mt-3 max-w-prose opacity-80">
        Security Talent mit Fokus auf pragmatische Umsetzung: Schutz, der im Alltag funktioniert – besonders für KMU.
      </p>

      <section className="mt-10 grid gap-6">
        <div className="rounded-2xl border border-navy/15 bg-white/60 p-6 shadow-sm [html.decrypt_&]:border-decryptGreen2/25 [html.decrypt_&]:bg-decryptBg/60">
          <h2 className="text-xl font-black">Werdegang (Kurzfassung)</h2>
          <p className="mt-3 opacity-85">
            Ich unterstütze KMU in der Schweiz dabei, IT-Risiken zu reduzieren: von Security-Checks über Härtung bis zu Recovery nach Vorfällen.
          </p>
        </div>

        <div className="rounded-2xl border border-navy/15 bg-white/60 p-6 shadow-sm [html.decrypt_&]:border-decryptGreen2/25 [html.decrypt_&]:bg-decryptBg/60">
          <h2 className="text-xl font-black">Skills</h2>
          <div className="mt-4 grid gap-3">
            {skills.map((s) => (
              <div key={s.name} className="flex flex-col gap-1">
                <div className="font-semibold">{s.name}</div>
                <div className="hidden rounded-lg bg-neutral/60 px-3 py-2 text-sm [html.decrypt_&]:block [html.decrypt_&]:bg-decryptBg/60 [html.decrypt_&]:text-decryptGreen2">
                  {bar(s.pct)}
                </div>
                <div className="block text-sm opacity-75 [html.decrypt_&]:hidden">{s.pct}%</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
