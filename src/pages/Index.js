import { View, Text, Button, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/StyleSheet";

const img = {
  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMal0tBwFJFF0CVIe7cixk3vrardx6ESUvFA&usqp=CAU",
};

export default function Index() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text> tela home</Text>
      <Button title="Sobre" onPress={() => navigation.navigate("Sobre")} />
      <Button title="Contato" onPress={() => navigation.navigate("Contato")} />
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
      <Image style={styles.imghome} source={img} />
    </View>
  );
}
