import { View, TextInput, ImageBackground } from "react-native";
import styles from "../styles/StyleSheet";

export default function Contato() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/fundocontatos.jpg")}
        style={styles.img}
      >
        <TextInput
          style={[styles.textInput1, { borderWidth: 1 }]}
          placeholder="Digite seu nome"
        />
        <TextInput
          style={[styles.textInput1, { borderWidth: 1 }]}
          placeholder="Digite seu email"
        />
        <TextInput
          style={[styles.textInput1, { borderWidth: 1 }]}
          placeholder="Digite sua mensagem"
        />
      </ImageBackground>
    </View>
  );
}
