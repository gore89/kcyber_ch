# kcyber.ch – Website (Next.js)

Website für **Kahlke CyberSystems** (kcyber.ch).

- Framework: **Next.js (App Router)**
- Sprache: **TypeScript / React**
- Styling: **Tailwind CSS v4**

---


## 1) Projektstruktur (wichtigste Pfade)

```text
src/
  app/
    page.tsx                 # Startseite (/)
    layout.tsx               # Root Layout (Header/Footer, Fonts, etc.)

    kontakt/page.tsx         # /kontakt
    referenzen/page.tsx      # /referenzen
    zu-mir/page.tsx          # /zu-mir

    legal/
      impressum/page.tsx     # /legal/impressum
      datenschutz/page.tsx   # /legal/datenschutz

    sitemap.ts               # /sitemap.xml (Next.js Route)
    robots.ts                # /robots.txt (Next.js Route)

  components/
    SiteShell.tsx            # Seiten-Layout/Chrome (Navigation, Footer)
    DecryptToggle.tsx        # UI-Element ("Decrypt"-Toggle)

  lib/
    decrypt.ts               # Helper/Logik fürs Decrypt-Feature

public/                       # statische Assets (Bilder, Icons, ...)
```

**Wichtig:** In diesem Repo liegen die Seiten unter `src/app/**/page.tsx` (Next.js App Router).

---

## 2) Inhalte/Pages anpassen

### Neue Seite erstellen

Beispiel: `/foo`

```text
src/app/foo/page.tsx
```

Next.js routet das automatisch.

### Bestehende Seiten editieren

- Startseite: `src/app/page.tsx`
- Kontakt: `src/app/kontakt/page.tsx`
- Referenzen: `src/app/referenzen/page.tsx`
- Zu mir: `src/app/zu-mir/page.tsx`
- Impressum/Datenschutz: `src/app/legal/.../page.tsx`

---

## 3) Styling (Tailwind)

Globales CSS:

- `src/app/globals.css`

Tailwind wird über PostCSS eingebunden (`postcss.config.mjs`).

---

## 4) Globales Design (Farben, Fonts, Cursor, Scanlines, Glitch, Transitions)
Datei: src/app/globals.css

Dort ist praktisch das komplette “Theme-System” geregelt:

- CSS Variablen (Farben):

  - :root { --navy, --neutral-bg, --green-2, --decrypt-bg, ... }


- Default Mode (normal):

  - html, body { font-family: Lato; background-color: var(--neutral-bg); color: var(--navy); }


- Decrypt Mode global:

  - html.decrypt { font-family: 'JetBrains Mono', ... }

  - html.decrypt body { background-color: var(--decrypt-bg); color: var(--green-2); }

  - Links (kein purple visited + decrypt variants)


- Cursor Design (terminal block cursor):

  - html.decrypt * { cursor: url(data:image/svg+xml,...) ... }

  - html.decrypt button, html.decrypt a { cursor: pointer !important; }


- Scanlines Overlay:

  - html.decrypt body::after { ... repeating-linear-gradient(...) }


- Glow für Überschriften/Elemente:

  - html.decrypt h1, html.decrypt h2, html.decrypt .glow { text-shadow: ... }


- Glitch Animation:

  - @keyframes glitch und .glitch { animation: glitch ... }


- Mode-Transition:

  - *, *::before, *::after { transition: background-color 0.35s ... }


``globals.css ist die Hauptquelle.

---

## 5) Layout/Seiten-Chrome (Header/Nav/Footer + Mode-Switch Styles)
Datei: src/components/SiteShell.tsx

Hier wird das Grundlayout gebaut und auch Design per Mode umgeschaltet, z.B.:

Container-Farben/Typo via Tailwind + html.decrypt Selector:
... bg-[#eef0f3] text-[#2f3b4f] [html.decrypt_&]:bg-[#05070a] [html.decrypt_&]:text-[#3fa687]
Separator-Linie:
bg-[#2f3b4f]/12 vs [html.decrypt_&]:bg-[#3fa687]/20
Logo-Swap (normal vs decrypt):
normales Logo: [html.decrypt_&]:hidden
decrypt Logo: [html.decrypt_&]:block
Kurz: SiteShell = “Design-Rahmen” + Tailwind-Mode-Toggles.

---

## 6) Decrypt Button (Design + Toggle-Mechanik)
Datei: src/components/DecryptToggle.tsx

Design: komplett über Tailwind-Klassen im className des <button>
ON/OFF Styles sind direkt dort definiert (Border/Background/Shadow/Color)
Busy/Glitch: setzt Klasse glitch (Animation kommt aus globals.css)
Mode-Switch Logik:
document.documentElement.classList.add('decrypt') / remove('decrypt')

---

## 7) Wie entscheidet die Seite “Decrypt vs normal”?

Es gibt keinen globalen State/Context – es ist rein CSS-getrieben über die HTML-Klasse:


Decrypt aktiv ⇢ <html class="decrypt">...

Decrypt inaktiv ⇢ <html>...

Wichtig: aktuelles Verhalten ist “immer normal beim Laden”:


In DecryptToggle.tsx wird beim Mount html.decrypt entfernt und localStorage gelöscht.

---

## 10) Notes

- `node_modules/` und `.next/` sollten **nicht** committed werden (ist in `.gitignore` geregelt).
- `sitemap.ts` / `robots.ts` sind Next.js-konforme Routen und werden beim Build generiert ausgeliefert.