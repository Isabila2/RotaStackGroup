import { View, ImageBackground } from "react-native";

{
  /* Chamando Background */
}
import LoginBackground from "../components/LoginImageBackground";

{
  /* Chamando Styles */
}
import styles from "../styles/StyleSheet";

import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Chamando tudo o que está na página de LoginBackGround */}
      <LoginBackground />
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Sobre" onPress={() => navigation.navigate("Sobre")} />
      <Button title="Contato" onPress={() => navigation.navigate("Contato")} />
    </View>
  );
}
