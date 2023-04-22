import { useFonts } from 'expo-font';

import { StatusBar } from 'expo-status-bar';
<<<<<<< HEAD
import { Main } from '../src/screens/Main';
=======

import { Main } from '../src/Main';
>>>>>>> f4c5da0 (refactor: all code)

function App() {
  const [isFontsLoaded] = useFonts({
    'GeneralSans-400': require('../assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('../assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('../assets/fonts/GeneralSans-Bold.otf'),
  });

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style='light' backgroundColor='#000' />
      <Main />
    </>
  );
}

export default App;