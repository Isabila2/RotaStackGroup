// IMPORT STACK NAVIGATION
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Importando as páginas
import Login from "./src/pages/LoginPage";
import SobrePages from "./src/pages/SobrePage";
import Index from "./src/pages/Index";
import Contato from "./src/pages/Contato";
// Importando o styles

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // Navigation com todas as páginas que serão importadas.
    // A primeira página á aparecer será a Home
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
          component={SobrePages}
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
