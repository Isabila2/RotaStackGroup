import { Text, View } from "react-native";
import styles from "../styles/StyleSheet";

export default function LoginText() {
  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.login}>Login</Text>
    </View>
  );
}
