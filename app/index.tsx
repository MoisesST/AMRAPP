import firebaseConfig from "../src/config/firebaseConfig";
import useFirebase from "../src/hooks/useFirebase";
//import Router from "../src/screens/Router"; //verificar uso
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Main } from '../src/screens/Main';

function App() {
  //const firebaseApp = useFirebase(firebaseConfig);
  //if (firebaseApp == null) return <div>Loading...</div>;

  const [isFontsLoaded] = useFonts({
    'GeneralSans-400': require('../assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('../assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('../assets/fonts/GeneralSans-Bold.otf'),
  });

  if (!isFontsLoaded) {
    return null;
  }

  //return <Router />; //verificar uso

  return (
    <>
      <StatusBar style='dark' />
      <Main />
    </>
  );
}

export default App;
