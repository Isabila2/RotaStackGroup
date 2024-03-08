import { View, Image, Text, ImageBackground, StyleSheet } from "react-native";
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
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function SobrePages() {
  const navigation = useNavigation();
  const imagem = {
    uri: "https://w7.pngwing.com/pngs/130/1021/png-transparent-movie-logo-movie-logo-film-tape-cinema-thumbnail.png",
  };

  return (
    <View style={styles.container}>
      {/** Imagem de fundo */}
      <ImageBackground
        source={require("../assets/images/fundocontatos.jpg")}
        style={styles.img}
      >
        <Image
          // Define o estilo da imagem (altura de 300 pixels e largura de 150 pixels)
          style={{ height: 300, width: 300, borderRadius: 200 }}
          // Define como a imagem deve ser redimensionada para se ajustar ao contêiner
          resizeMode="cover"
          // Define a fonte/caminho da imagem (pode ser um objeto de imagem ou um URI)
          source={imagem}
        />
        {/** Texto descritivo com o css */}
        <Text
          style={{
            fontWeight: "bold",
            color: "white",
            width: 600,
            backgroundColor: "gray",
          }}
        >
          Bem-vindo à nossa página dedicada ao mundo mágico do cinema! Somos
          apaixonados por filmes e estamos aqui para compartilhar essa paixão
          com você. Desde os clássicos atemporais até os lançamentos mais
          recentes, adoramos explorar a diversidade de histórias, personagens e
          universos que o cinema tem a oferecer. Acreditamos que os filmes têm o
          poder único de nos transportar para outras realidades, despertar
          emoções profundas e nos fazer refletir sobre a vida de maneiras que
          jamais imaginamos. Nossa missão é proporcionar a você uma experiência
          cinematográfica enriquecedora e inspiradora. Queremos compartilhar
          nossas análises, críticas e curiosidades sobre filmes de todos os
          gêneros, para que juntos possamos explorar o vasto e fascinante mundo
          do cinema. Junte-se a nós nessa jornada cinematográfica e vamos
          explorar juntos a magia e o encanto das telonas!
        </Text>
        {/** Botões para mudar de página */}
        <View style={styles.fixToText}>
          <Button
            buttonStyle={style.button}
            title="Contato"
            onPress={() => navigation.navigate("Contato")}
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
