import { View } from "react-native";

{
  /* Chamando Background */
}
import LoginBackground from "../components/LoginImageBackground";

{
  /* Chamando Styles */
}
import styles from "../styles/StyleSheet";

import { useNavigation } from "@react-navigation/native";

export default function App() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Chamando tudo o que está na página de LoginBackGround */}
      <LoginBackground />
    </View>
  );
}
