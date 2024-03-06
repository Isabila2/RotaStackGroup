import { View, Image, TouchableOpacity } from "react-native";
{
  /* Importando o Styles */
}
import styles from "../styles/StyleSheet";

export default function LoginImage() {
  pressLike = () => {
    alert("É uma imagem bem bonita...");
  };
  return (
    <View style={styles.container}>
      {/* Logo */}
      <TouchableOpacity onPress={pressLike}>
        <Image
          source={require("../assets/images/logo.png")}
          style={[
            styles.logo,
            {
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 50,
              marginTop: -80,
            },
          ]}
          resizeMode="cover"
        />
      </TouchableOpacity>
    </View>
  );
}
