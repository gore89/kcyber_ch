import SiteShell from '@/components/SiteShell';

const cases = [
  {
    tag: 'Incident Response',
    title: 'Ransomware-Angriff auf Hausarztpraxis',
    situation:
      'Eine Hausarztpraxis in der Region Bern wurde Opfer eines Ransomware-Angriffs. Patientendaten waren verschlüsselt, die Praxis stand still.',
    action:
      'Sofortmassnahmen zur Schadensbegrenzung, forensische Analyse des Einfallsvektors, vollständige Recovery aus Offline-Backups, anschliessende Härtung der Firewall und Einführung eines Patch-Managements.',
    result:
      'Praxis nach 36h wieder voll operabel. Keine Lösegeldzahlung. Klarer Massnahmenplan verhindert Wiederholung.',
  },
  {
    tag: 'Compliance / DSG',
    title: 'DSG-Audit für Anwaltskanzlei',
    situation:
      'Eine Kanzlei mit 8 Anwälten musste die Anforderungen des neuen Schweizer Datenschutzgesetzes (DSG) erfüllen – ohne eigene IT-Ressourcen.',
    action:
      'Vollständiges DSG-Audit, Identifikation der Lücken, Einführung einer sicheren VPN-Lösung, Mitarbeiterschulungen zu Phishing und Datenschutz-Grundsätzen.',
    result:
      'DSG-Konformität hergestellt, Mitarbeiter sensibilisiert. Die Kanzlei agiert heute eigenständig und sicher.',
  },
];

export default function ReferenzenPage() {
  return (
    <SiteShell>
      <h1 className="glow text-3xl font-black tracking-tight md:text-5xl">Referenzen</h1>
      <p className="mt-4 max-w-prose text-base leading-relaxed text-[#2f3b4f]/75 [html.decrypt_&]:text-[#3fa687]/80">
        Echte Fälle – anonymisiert. Kein Marketing, nur was wirklich passiert ist.
      </p>

      <div className="mt-10 grid gap-8">
        {cases.map((c) => (
          <article
            key={c.title}
            className="rounded-2xl bg-white p-7 shadow-[0_4px_24px_rgba(47,59,79,0.12)] [html.decrypt_&]:border [html.decrypt_&]:border-[#3fa687]/20 [html.decrypt_&]:bg-[#0d1117]/80 [html.decrypt_&]:shadow-[0_0_24px_rgba(63,166,135,0.08)] [html.decrypt_&]:[backdrop-filter:blur(8px)]"
          >
            <span className="inline-block rounded-full bg-[#eef0f3] px-3 py-1 text-xs font-bold text-[#2f3b4f] [html.decrypt_&]:bg-[#3fa687]/10 [html.decrypt_&]:text-[#3fa687]">
              {c.tag}
            </span>
            <h2 className="glow mt-3 text-xl font-black">{c.title}</h2>

            <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#2f3b4f]/75 [html.decrypt_&]:text-[#3fa687]/75">
              <div>
                <span className="font-bold text-[#2f3b4f] [html.decrypt_&]:text-[#3fa687]">Situation: </span>
                {c.situation}
              </div>
              <div>
                <span className="font-bold text-[#2f3b4f] [html.decrypt_&]:text-[#3fa687]">Vorgehen: </span>
                {c.action}
              </div>
              <div>
                <span className="font-bold text-[#2f3b4f] [html.decrypt_&]:text-[#3fa687]">Ergebnis: </span>
                {c.result}
              </div>
            </div>
          </article>
        ))}
      </div>
    </SiteShell>
  );
}
