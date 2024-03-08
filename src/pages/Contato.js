import { View, TextInput, ImageBackground, Button, } from "react-native";
import styles from "../styles/StyleSheet";

export default function Contato() {
  pressButton = () => {
    alert("Sua mensagem foi enviada com sucesso!!");
  };
  return (
    <View style={styles.container}>
      {/** Imagem de fundo e TextInputs */}
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
          multiline={true}
        />
        <Button onPress={pressButton} title="Enviar" color="black" />
      </ImageBackground>
    </View>
  );
}
