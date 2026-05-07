import SiteShell from '@/components/SiteShell';

const cases = [
  {
    title: 'Fallbeispiel: Ransomware (Hausarztpraxis)',
    points: [
      'Forensische Einordnung & Schadensanalyse',
      'Recovery: Systeme/Backups wiederhergestellt',
      'Härtung der Firewall & Segmentierung',
      'Backup/Restore-Prozess verbessert',
    ],
  },
  {
    title: 'Fallbeispiel: Compliance / DSG-Audit (Anwaltskanzlei)',
    points: [
      'DSG-Risikoanalyse & Massnahmenplan',
      'VPN-Lösung & sichere Remote-Arbeit',
      'Mitarbeiterschulungen (Awareness)',
      'Dokumentation für Nachweisbarkeit',
    ],
  },
];

export default function ReferenzenPage() {
  return (
    <SiteShell>
      <h1 className="text-3xl font-black tracking-tight">Referenzen</h1>
      <p className="mt-3 max-w-prose ">
        Authentische Case Studies – anonymisiert, aber realistisch. Fokus: Wirkung, nicht Marketing.
      </p>

      <div className="mt-10 grid gap-6">
        {cases.map((c) => (
          <article
            key={c.title}
            className="rounded-2xl border border-navy/15 bg-white/60 p-6 shadow-sm [html.decrypt_&]:border-decryptGreen2/25 [html.decrypt_&]:bg-decryptBg/60"
          >
            <h2 className="text-xl font-black">{c.title}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 ">
              {c.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SiteShell>
  );
}
