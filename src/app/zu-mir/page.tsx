import SiteShell from '@/components/SiteShell';

const skills = [
  { name: 'Netzwerk-Security',   pct: 85 },
  { name: 'Firewalling / VPN',   pct: 80 },
  { name: 'Incident Response',   pct: 75 },
  { name: 'Penetration Testing', pct: 65 },
  { name: 'DSG / Compliance',    pct: 70 },
];

function bar(pct: number) {
  const total = 20;
  const filled = Math.round((pct / 100) * total);
  return `[${'#'.repeat(filled)}${'-'.repeat(total - filled)}] ${pct}%`;
}

export default function ZuMirPage() {
  return (
    <SiteShell>
      <h1 className="glow text-3xl font-black tracking-tight md:text-5xl">Zu mir</h1>
      <p className="mt-4 max-w-prose text-base leading-relaxed text-[#2f3b4f]/75 [html.decrypt_&]:text-[#3fa687]/80">
        Security Talent mit Fokus auf pragmatische Umsetzung. Ich schütze KMU – mit dem Wissen eines Profis und dem Blick für das Machbare.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">

        {/* Werdegang */}
        <div className="rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(47,59,79,0.1)] [html.decrypt_&]:border [html.decrypt_&]:border-[#3fa687]/20 [html.decrypt_&]:bg-[#0d1117]/80 [html.decrypt_&]:[backdrop-filter:blur(8px)]">
          <h2 className="glow text-xl font-black">Werdegang</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#2f3b4f]/75 [html.decrypt_&]:text-[#3fa687]/75">
            Ich unterstütze KMU in der Schweiz dabei, IT-Risiken zu verstehen und zu reduzieren.
            Mein Fokus: echte Lösungen statt endloser Berichte – von der ersten Analyse bis zur
            umgesetzten Massnahme.
          </p>
        </div>

        {/* Skills */}
        <div className="rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(47,59,79,0.1)] [html.decrypt_&]:border [html.decrypt_&]:border-[#3fa687]/20 [html.decrypt_&]:bg-[#0d1117]/80 [html.decrypt_&]:[backdrop-filter:blur(8px)]">
          <h2 className="glow text-xl font-black">Skills</h2>
          <div className="mt-4 space-y-4">
            {skills.map((s) => (
              <div key={s.name}>
                <div className="mb-1 flex items-center justify-between text-sm font-semibold">
                  <span>{s.name}</span>
                  <span className="hidden [html.decrypt_&]:inline text-xs opacity-60">{s.pct}%</span>
                </div>

                {/* Normal mode: visual bar */}
                <div className="h-2 w-full overflow-hidden rounded-full bg-[#eef0f3] [html.decrypt_&]:hidden">
                  <div
                    className="h-full rounded-full bg-[#2f3b4f]"
                    style={{ width: `${s.pct}%` }}
                  />
                </div>

                {/* Decrypt mode: terminal bar */}
                <div className="hidden font-mono text-xs text-[#3fa687] [html.decrypt_&]:block">
                  {bar(s.pct)}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </SiteShell>
  );
}
