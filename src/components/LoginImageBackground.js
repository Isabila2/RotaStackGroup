import { View, ImageBackground, StyleSheet  } from "react-native";
{
  /* Chamando LoginText */
}
import LoginText from "../components/LoginText";

{
  /* Chamando LoginInput */
}
import LoginInput from "../components/LoginInput";

{
  /* Chamando Button */
}
import LoginButton from "../components/LoginButton";

{
  /* Chamando Imagem */
}
import LoginImage from "../components/LoginImage";

{
  /* Chamando Styles */
}
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
  },
});

export default function LoginBackground() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Imagem de fundo */}
      <ImageBackground
        source={require("../assets/images/fundo.png")}
        style={styles.img}
      >
        {/* Texto */}
        <LoginText />
        {/* Input */}
        <LoginInput />
        {/* Button */}
        <LoginButton />
        {/* Imagem */}
        <LoginImage />

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
          title="Contato"
          onPress={() => navigation.navigate("Contato")}
        />
      </View>
      </ImageBackground>
    </View>
  );
}
