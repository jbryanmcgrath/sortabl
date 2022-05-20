import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import InitialScreen from "./screens/InitialScreen";
// import { useFonts, Comfortaa_400Regular } from "@expo-google-fonts/comfortaa";



const Stack = createNativeStackNavigator();

export default function App() {
  // let [fontsLoaded] = useFonts({
  // Comfortaa_400Regular
  // })


  
  
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
    
  
  
}
