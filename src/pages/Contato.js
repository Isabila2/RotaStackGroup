import { View, Text, Button, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/StyleSheet";


export default function Contato() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <TextInput placeholder="Digite seu nome" />
        <TextInput style={[styles.textInput1, {borderWidth: 1}]} placeholder="Digite seu email" /> 
        <TextInput style={[styles.textInput2, {borderWidth: 2}]} placeholder="Digite sua mensagem" /> 

      <Text> tela home</Text>
      <Button title="Sobre" onPress={() => navigation.navigate("Sobre")} />
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
    </View>
  );
}