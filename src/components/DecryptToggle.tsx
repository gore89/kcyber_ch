'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

function haptic() {
  if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
    navigator.vibrate([20, 60, 20]);
  }
}

export default function DecryptToggle() {
  const { isDecrypt, setIsDecrypt } = useTheme();
  const [label, setLabel] = useState(isDecrypt ? '[ DECRYPT: ON ]' : '[ DECRYPT ]');
  const [busy, setBusy] = useState(false);
  const [showBlackout, setShowBlackout] = useState(false); // Neuer State für den Blackout

  useEffect(() => {
    if (!busy) {
      setLabel(isDecrypt ? '[ DECRYPT: ON ]' : '[ DECRYPT ]');
    }
  }, [isDecrypt, busy]);

  async function toggle() {
    if (busy) return;
    setBusy(true);
    haptic();

    const next = !isDecrypt;

    if (next) {
      const steps = [
        'Initializing...',
        'Bypassing firewall...',
        'Extracting credentials...',
        'Decrypting data... 42%',
        'Decrypting data... 89%',
        'Root access granted.'
      ];

      for (const s of steps) {
        setLabel(s);
        // Zeit auf 650ms erhöht – jetzt lesbar!
        await new Promise((r) => setTimeout(r, 650));
      }

      // ── DER BLACKOUT-EFFEKT ──
      setShowBlackout(true);
      await new Promise((r) => setTimeout(r, 300)); // 300ms "tote" schwarze Seite
      setIsDecrypt(true);
      setShowBlackout(false);

    } else {
      setLabel('Re-Encrypting...');
      await new Promise((r) => setTimeout(r, 500));
      setIsDecrypt(false);
    }

    setBusy(false);
  }

  return (
    <>
      {/* Das Blackout-Overlay */}
      {showBlackout && (
        <div className="fixed inset-0 z-[9999] bg-black" />
      )}

      <button
        type="button"
        onClick={toggle}
        className={[
          'inline-flex min-w-[170px] items-center justify-center rounded-lg border px-3 py-1.5',
          'font-mono text-[10px] font-bold tracking-widest uppercase',
          'transition-all duration-200',
          isDecrypt
            ? 'border-[#3fa687]/60 bg-[#05070a] text-[#3fa687] shadow-[0_0_14px_rgba(63,166,135,0.35)]'
            : 'border-gray-800 bg-gray-900 text-[#3fa687] hover:shadow-[0_0_8px_rgba(63,166,135,0.2)]',
          busy ? 'glitch opacity-80' : '',
        ].join(' ')}
        aria-label="Toggle decrypt mode"
      >
        {label}
      </button>
    </>
  );
}