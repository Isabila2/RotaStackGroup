import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./src/pages/Login";
import Sobre from "./src/pages/Sobre";
import Index from "./src/pages/Index";
import Contato from "./src/pages/Contato";

import styles from "./src/styles/StyleSheet";
// IMPORT STACK NAVIGATION
import { NavigationContainer } from "@react-navigation/native";


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.secondaryContainer}>
        <Login />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{ animation: "slide_from_right" }}
              name="Index"
              component={Index}
            />
            <Stack.Screen
              options={{ animation: "slide_from_right" }}
              name="Sobre"
              component={Sobre}
            />
            <Stack.Screen
              options={{ animation: "slide_from_right" }}
              name="Contato"
              component={Contato}
            />
            <Stack.Screen
              options={{ animation: "slide_from_right" }}
              name="Login"
              component={Login}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </View>
  );
}
