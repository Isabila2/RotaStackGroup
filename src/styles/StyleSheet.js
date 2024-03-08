import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    justifyContent: "center",
    alignItems: "center",
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
    backgroundColor: 'gray',
    width: 500,
    justifyContent: "center",
    alignItems: "center",
  },
  textIndex: {
    textAlign: "center",
    marginTop: 15,
    margin: 20,
    width: "20%",
    borderRadius: 20,
    padding: 10,
    backgroundColor: "white",
    fontSize: 19,
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
    height: "100%",
    width: "100%",
  },
});

export default styles;
