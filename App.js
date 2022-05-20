import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login'
import InitialScreen from './screens/InitialScreen';
import { MainBackground } from './components/styles';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          name="InitialScreen" component={InitialScreen}
        />
        <Stack.Screen
          name="Login" component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer >

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  }
})