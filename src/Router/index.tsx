import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";
import useAuth from "../hooks/useAuth";
import Main from "../screens/Main";
import Login from "../screens/Login";
import Recipe from "../screens/Recipe";

const Stack = createNativeStackNavigator();

export default function Router() {
  const { user, logout } = useAuth();

  if (!user) {
    return <Login />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            headerRight: () => (
              <Button onPress={() => logout()} title="Logout" />
            ),
          }}
        />
        <Stack.Screen name="Recipe" component={Recipe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
