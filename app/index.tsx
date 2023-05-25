import { useFonts } from 'expo-font';

import { useColorScheme } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import { Main } from '../src/Main';
import themes from '../src/themes';
import ThemeContextProvider from '../src/contexts/ThemeContext';

function App() {
  const [isFontsLoaded] = useFonts({
    'GeneralSans-400': require('../assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('../assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('../assets/fonts/GeneralSans-Bold.otf'),
  });

  const deviceTheme = useColorScheme();
  const theme = themes[deviceTheme!] || theme.dark;

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <ThemeContextProvider>
      <StatusBar style='light' backgroundColor={theme.statusbar} />
      <Main />
    </ThemeContextProvider>
  );
}

export default App;