import React, { useContext, useMemo, useState } from 'react'

import type { Mode } from '../../styles/tokens'

type ThemeContext = {
  mode: Mode
  setMode: (mode: Mode) => void
}

const ThemeContext = React.createContext<ThemeContext | null>(null)

export const ThemeProvider: React.FC = ({ children }) => {
  const [mode, setMode] = useState<Mode>('dark')

  const value = useMemo(() => ({ mode, setMode }), [mode])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw Error('Must be used within ThemeProvider')
  }
  return context
}
