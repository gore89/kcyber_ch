'use client';

import { useEffect, useState } from 'react';

const KEY = 'kcyber_decrypt';

function haptic() {
  if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
    navigator.vibrate([20, 60, 20]);
  }
}

export default function DecryptToggle() {
  const [on, setOn] = useState(false);
  const [label, setLabel] = useState('[ DECRYPT ]');
  const [busy, setBusy] = useState(false);

  // never restore – always start normal
  useEffect(() => {
    document.documentElement.classList.remove('decrypt');
    localStorage.removeItem(KEY);
  }, []);

  async function toggle() {
    if (busy) return;
    setBusy(true);
    haptic();

    const next = !on;

    if (next) {
      const steps = [
        'Initializing...',
        'Bypassing firewall...',
        'Decrypting... 35%',
        'Decrypting... 78%',
        'Access granted.',
      ];
      for (const s of steps) {
        setLabel(s);
        await new Promise((r) => setTimeout(r, 230));
      }
      document.documentElement.classList.add('decrypt');
    } else {
      setLabel('Encrypting...');
      await new Promise((r) => setTimeout(r, 400));
      document.documentElement.classList.remove('decrypt');
    }

    setOn(next);
    setLabel(next ? '[ DECRYPT: ON ]' : '[ DECRYPT ]');
    setBusy(false);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className={[
        'inline-flex min-w-[148px] items-center justify-center rounded-lg border px-3 py-1.5',
        'font-mono text-xs font-bold tracking-widest',
        'transition-shadow duration-200',
        on
          ? 'border-[#3fa687]/60 bg-[#05070a] text-[#3fa687] shadow-[0_0_14px_rgba(63,166,135,0.35)]'
          : 'border-gray-800 bg-gray-900 text-[#3fa687] hover:shadow-[0_0_8px_rgba(63,166,135,0.2)]',
        busy ? 'glitch opacity-80' : '',
      ].join(' ')}
      aria-label="Toggle decrypt mode"
    >
      {label}
    </button>
  );
}
