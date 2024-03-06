import { View, ImageBackground } from "react-native";
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

export default function LoginBackground() {
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
      </ImageBackground>
    </View>
  );
}
