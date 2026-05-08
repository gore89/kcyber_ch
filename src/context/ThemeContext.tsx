'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type ThemeContextType = {
  isDecrypt: boolean;
  setIsDecrypt: (val: boolean) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDecrypt, setIsDecrypt] = useState(false);

  // 1. Beim ersten Laden den Status aus dem localStorage holen
  useEffect(() => {
    const saved = localStorage.getItem('kcyber_decrypt');
    if (saved === 'true') {
      setIsDecrypt(true);
      document.documentElement.classList.add('decrypt');
    }
  }, []);

  // 2. Den Status synchronisieren (localStorage & HTML-Klasse)
  const updateDecrypt = (val: boolean) => {
    setIsDecrypt(val);
    if (val) {
      localStorage.setItem('kcyber_decrypt', 'true');
      document.documentElement.classList.add('decrypt');
    } else {
      localStorage.setItem('kcyber_decrypt', 'false');
      document.documentElement.classList.remove('decrypt');
    }
  };

  return (
    <ThemeContext.Provider value={{ isDecrypt, setIsDecrypt: updateDecrypt }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}