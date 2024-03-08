// IMPORT STACK NAVIGATION
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Importando as páginas
import Login from "./src/pages/LoginPage";
import Sobre from "./src/pages/Sobre";
import Index from "./src/pages/Index";
import Contato from "./src/pages/Contato";
// Importando o styles

const Stack = createNativeStackNavigator();
export default function App() {
  return (
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
  );
}
