import { PropsWithChildren, createContext, useContext } from 'react';

import { useColorScheme } from 'react-native';

import themes from '../themes';

type Theme = {
  primary: string;
  secondary: string;
  tertiary: string;
  color: string;
  title: string;
  statusbar: string;
  icons: string;
}

// Define your context props
export interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

// Create a new context using default values (they'll be replaced in a moment..)
export const ThemeContext =
  createContext<ThemeContextProps | undefined>(undefined);

// Create a custom context provider, so all context data will be self-contained
export default function ThemeContextProvider({ children }: PropsWithChildren) {
  const deviceTheme = useColorScheme();
  const theme = themes[deviceTheme!] || theme.dark;

  const value: ThemeContextProps = {
    theme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

//---------------------------------------- Extra example
// Creating a custom consumer hook (check Timeline.tsx for usage):
export function useThemeContext() {
  const context = useContext<ThemeContextProps | undefined>(ThemeContext);

  if (context === undefined) {
    throw new Error('useTrack must be used inside ThemeContextProvider!');
  }

  return context;
}
