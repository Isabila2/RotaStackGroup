import { View } from "react-native";

{
  /* Chamando Background */
}
import LoginBackground from "../components/LoginImageBackground";

{
  /* Chamando Styles */
}
import styles from "../styles/StyleSheet";

export default function LoginPage() {
  return (
    <View style={styles.container}>
      {/* Chamando tudo o que está na página de LoginBackGround */}
      <LoginBackground />
    </View>
  );
}
