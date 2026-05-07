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
const STEPS_OFF = ['Encrypting...', 'Restoring...', 'Done.'];

export default function DecryptToggle() {
  const [decrypt, setDecrypt] = useState(false);
  const [step, setStep] = useState<string | null>(null);

  // Do NOT restore from localStorage — always start in normal mode
  useEffect(() => {
    document.documentElement.classList.remove('decrypt');
    localStorage.removeItem(DECRYPT_STORAGE_KEY);
  }, []);

  async function toggle() {
    if (step) return;
    const next = !decrypt;
    haptic();

    const sequence = next ? STEPS : STEPS_OFF;
    for (const s of sequence) {
      setStep(s);
      await new Promise((r) => setTimeout(r, 220));
    }

    setDecrypt(next);
    if (next) document.documentElement.classList.add('decrypt');
    else document.documentElement.classList.remove('decrypt');

    await new Promise((r) => setTimeout(r, 150));
    setStep(null);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className={[
        'inline-flex items-center rounded-md border px-3 py-1.5 text-xs font-bold tracking-widest transition-all duration-200',
        'border-gray-900 bg-gray-900 text-[#9fef00]',
        decrypt ? 'shadow-[0_0_10px_rgba(159,239,0,0.3)]' : 'hover:shadow-[0_0_6px_rgba(159,239,0,0.15)]',
        step ? 'opacity-90' : '',
      ].join(' ')}
      aria-label="Toggle decrypt mode"
    >
      <span className="font-mono">
        {step ?? (decrypt ? '[ DECRYPT: ON ]' : '[ DECRYPT ]')}
      </span>
    </button>
  );
}
