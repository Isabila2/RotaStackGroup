import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  secondaryContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  inputName: {
    height: 60,
    width: 320,
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
  },
  login: {
    color: "black",
    fontSize: 30,
    textAlign: "center",
    marginTop: 130,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  logo: {
    width: 220,
    height: 170,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput1: {
    marginTop: 15,
    borderRadius: 20,
    padding: 10,
    borderColor: "gray",
  },
  textInput2: {
    textAlign: "center",
    marginTop: 15,
    width: "100%",
    borderRadius: 20,
    padding: 10,
    borderColor: "red",
  },
});

export default styles;
