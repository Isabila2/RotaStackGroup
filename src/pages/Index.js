import { View, Text, ImageBackground , StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/StyleSheet";
// Importando o Botão do react-native-elements para poder estilizar
import { Button } from "react-native-elements";

// Variável da estilização do botão. 
// ISSO É INCRIVEEEEL!! AMEI!!!!!!!!!!!!!!!!!!!!!!!!!
const style = StyleSheet.create({
  button: {
    backgroundColor: "grey",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    width: 100,

  },
});
// Variável da imagem de fundo
const img = {
  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNibjDk4NCFVIvgUU9JHXHnpcxmqG_G0fZfA&usqp=CAU",
};

export default function Index() {
  const navigation = useNavigation();

  return (
    // View com os botões
    <View style={styles.container}>
      {/** Imagem de fundo */}
      <ImageBackground style={styles.imageBackground} source={img}>
        {/** Texto e botões */}
        <Text style={styles.textIndex}>Filmes e Séries!</Text>
        {/** Uma View para deixar os botões em uma linha só, usando o flexDirection: 'row' no CSS */}
        <View style={styles.fixToText}>
          <Button
            buttonStyle={style.button}
            title="Sobre"
            onPress={() => navigation.navigate("Sobre")}
          />
          <Button
            buttonStyle={style.button}
            title="Contato"
            onPress={() => navigation.navigate("Contato")}
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
