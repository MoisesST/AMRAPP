import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

import { Main } from './src/Main';

function App() {
  const [isFontsLoaded] = useFonts({
    'GeneralSans-400': require('./assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./assets/fonts/GeneralSans-Bold.otf'),
  });

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style='dark' />
      <Main />
    </>
  );
}

export default App;