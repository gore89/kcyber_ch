'use client';

import { useEffect, useMemo, useState } from 'react';
import { Terminal } from 'lucide-react';
import { DECRYPT_STORAGE_KEY } from '@/lib/decrypt';

function haptic() {
  if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
    // @ts-ignore
    navigator.vibrate(25);
  }
}

export default function DecryptToggle() {
  const [decrypt, setDecrypt] = useState(false);
  const [anim, setAnim] = useState<'idle' | 'running' | 'done'>('idle');

  const label = useMemo(() => {
    if (anim === 'running') return 'Decrypting...';
    return decrypt ? 'Decrypt: ON' : 'Decrypt';
  }, [decrypt, anim]);

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem(DECRYPT_STORAGE_KEY) : null;
    setDecrypt(stored === '1');
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (decrypt) root.classList.add('decrypt');
    else root.classList.remove('decrypt');
    localStorage.setItem(DECRYPT_STORAGE_KEY, decrypt ? '1' : '0');
  }, [decrypt]);

  async function runSequence(next: boolean) {
    setAnim('running');
    haptic();
    await new Promise((r) => setTimeout(r, 360));
    setDecrypt(next);
    setAnim('done');
    await new Promise((r) => setTimeout(r, 250));
    setAnim('idle');
  }

  return (
    <button
      type="button"
      onClick={() => runSequence(!decrypt)}
      className={[
        'group inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold',
        'border border-navy/20 bg-white/80 text-navy shadow-sm backdrop-blur',
        'hover:bg-white',
        decrypt ? 'border-decryptGreen2/40 bg-decryptBg/80 text-decryptGreen2' : '',
        anim !== 'idle' ? 'glitch' : '',
      ].join(' ')}
      aria-label="Decrypt mode"
    >
      <Terminal className="h-4 w-4" />
      <span>
        {label}
        {anim === 'running' ? ' 35%… Done' : ''}
      </span>
    </button>
  );
}
