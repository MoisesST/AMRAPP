import firebaseConfig from "../src/config/firebaseConfig";
import useFirebase from "../src/hooks/useFirebase";
//import Router from "../src/screens/Router"; //verificar uso
import { useFonts } from 'expo-font';

import { useColorScheme } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { Main } from '../src/Main';
import themes from '../src/themes';
import ThemeContextProvider from '../src/contexts/ThemeContext';

function App() {
  //const firebaseApp = useFirebase(firebaseConfig);
  //if (firebaseApp == null) return <div>Loading...</div>;

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

<<<<<<< HEAD
  //return <Router />; //verificar uso

  return (
    <ThemeContextProvider>
      <StatusBar style='light' backgroundColor={theme.statusbar} />
      <Main />
    </ThemeContextProvider>
  );
=======
  return <Router />; //verificar uso

  /*return (
    <>
      <StatusBar style='dark' />
      <Main />
    </>
  );*/
>>>>>>> 624a0c2 (feat(add cad page e router): create a cad page, confif firebase and router)
}

export default App;
