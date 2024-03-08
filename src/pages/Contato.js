import { View, TextInput, ImageBackground, StyleSheet } from "react-native";
import styles from "../styles/StyleSheet";
import { useNavigation } from "@react-navigation/native";
// Importando o Botão do react-native-elements para poder estilizar
import { Button } from "react-native-elements";

// Variável da estilização do botão.

const style = StyleSheet.create({
  button: {
    backgroundColor: "grey",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    width: 100,
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Contato() {
  const navigation = useNavigation();
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

        {/** Botões para mudar de página */}
        <View style={styles.fixToText}>
          <Button
            buttonStyle={style.button}
            title="Sobre"
            onPress={() => navigation.navigate("Sobre")}
          />
          <Button
            buttonStyle={style.button}
            title="Index"
            onPress={() => navigation.navigate("Index")}
          />
          <Button
            buttonStyle={style.button}
            title="Login"
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </ImageBackground>
    </View>
  );
}
