import { View, Text, Button, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/StyleSheet";

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
        <Button title="Sobre" onPress={() => navigation.navigate("Sobre")} />
        <Button title="Contato" onPress={() => navigation.navigate("Contato")} />
        <Button title="Login" onPress={() => navigation.navigate("Login")} />
      </ImageBackground>
    </View>
  );
}
