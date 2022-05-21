import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./screens/Login";
import InitialScreen from "./screens/InitialScreen";
import { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
const Stack = createNativeStackNavigator();
const getFonts = async () =>
  await Font.loadAsync({
    "comfortaa-regular": require("./assets/fonts/Comfortaa-Regular.ttf"),
    "comfortaa-bold": require("./assets/fonts/Comfortaa-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="InitialScreen"
          screenOptions={{
            contentStyle: {
              backgroundColor: "#fff",
            },
          }}
        >
          <Stack.Screen name="InitialScreen" component={InitialScreen} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}
