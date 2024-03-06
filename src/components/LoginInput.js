import { View, TextInput } from "react-native";
import styles from "../styles/StyleSheet";

export default function LoginInput() {
  return (
    <View style={styles.container}>
      {/* Caixas de textos */}
      <TextInput
        style={styles.inputName}
        placeholder="Digite o seu email"
        inputMode="text"
        placeholderTextColor="black"
      />

      <TextInput
        style={styles.inputName}
        placeholder="Digite a sua senha"
        keyboardType="numeric"
        secureTextEntry={true}
        placeholderTextColor="black"
      />
    </View>
  );
}
