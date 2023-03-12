import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textHeadContainer: {
    flex: 1,
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    fontSize: 20,
  },
  textBodyContainer: {
    flex: 5,
    fontWeight: "bold",
    fontSize: 16,
  },
  darkTheme: {
    backgroundColor: "black",
    color: "white",
  },
  lightTheme: {
    backgroundColor: "white",
    color: "black",
  },
  buttonContainer: {
    width: 300,
    height: 300,
    padding: 20,
    margin: 30,
  },
});

export { styles };
