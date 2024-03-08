import { View, Text, TextInput } from "react-native";
import styles from "../styles/StyleSheet";

export default function Sobre() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Digite seu nome" />
      <TextInput
        style={[styles.textInput1, { borderWidth: 1 }]}
        placeholder="Digite seu email"
      />
      <TextInput
        style={[styles.textInput2, { borderWidth: 2 }]}
        placeholder="Digite sua mensagem"
      />

      <Text> tela SOBRE</Text>
    </View>
  );
}
