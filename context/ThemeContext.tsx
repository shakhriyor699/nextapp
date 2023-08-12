'use client';
import { useState, createContext } from "react";

interface IThemeContext {
  toggle: () => void;
  mode: string;
}

export const ThemeContext = createContext({} as IThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState('dark')

  const toggle = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}