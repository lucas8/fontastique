import React, { useContext, useMemo, useState } from 'react';

type Mode = 'dark';

/**
 * NOTE: this provider doesn't do much for now but it will make it very easy
 * to add themes down the line
 */

type ThemeContext = {
  mode: Mode;
  setMode: (mode: Mode) => void;
};

const ThemeContext = React.createContext<ThemeContext | null>(null);

type ThemeProviderProps = {
  children?: React.ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<Mode>('dark');

  const value = useMemo(() => ({ mode, setMode }), [mode]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw Error('Must be used within ThemeProvider');
  }
  return context;
};
