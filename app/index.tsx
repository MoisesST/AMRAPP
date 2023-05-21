//import { useRouter } from "expo-router";
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Main } from './main';
import { Alert, Text, TextInput, View } from "react-native";
//import useAuth from "../src/hooks/useAuth";


function App() {
  //const router = useRouter();

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
