'use client';

import { useEffect, useState } from 'react';
import { DECRYPT_STORAGE_KEY } from '@/lib/decrypt';

function haptic() {
  if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
    // @ts-ignore
    navigator.vibrate([25, 50, 25]);
  }
}

const STEPS = ['Initializing...', 'Bypassing firewall...', 'Decrypting... 38%', 'Decrypting... 71%', 'Access granted.'];

export default function DecryptToggle() {
  const [decrypt, setDecrypt] = useState(false);
  const [step, setStep] = useState<string | null>(null);

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem(DECRYPT_STORAGE_KEY) : null;
    if (stored === '1') {
      setDecrypt(true);
      document.documentElement.classList.add('decrypt');
    }
  }, []);

  async function toggle() {
    if (step) return; // mid-animation
    const next = !decrypt;
    haptic();

    if (next) {
      // animate in
      for (const s of STEPS) {
        setStep(s);
        await new Promise((r) => setTimeout(r, 220));
      }
    }

    setDecrypt(next);
    const root = document.documentElement;
    if (next) root.classList.add('decrypt');
    else root.classList.remove('decrypt');
    localStorage.setItem(DECRYPT_STORAGE_KEY, next ? '1' : '0');

    await new Promise((r) => setTimeout(r, 200));
    setStep(null);
  }

  return (
    <div className="flex flex-col items-start gap-1">
      <button
        type="button"
        onClick={toggle}
        className={[
          'relative inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-bold tracking-wider transition-all duration-200',
          decrypt
            ? 'border-[#9fef00]/50 bg-[#141d2b] text-[#9fef00] shadow-[0_0_12px_rgba(159,239,0,0.25)]'
            : 'border-gray-900 bg-gray-900 text-[#9fef00] shadow-sm hover:shadow-[0_0_8px_rgba(159,239,0,0.2)]',
          step ? 'glitch' : '',
        ].join(' ')}
        aria-label="Toggle decrypt mode"
      >
        <span className="font-mono tracking-widest">
          {step ? step : decrypt ? '[ DECRYPT: ON ]' : '[ DECRYPT ]'}
        </span>
      </button>
    </div>
  );
}
