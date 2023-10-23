import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 200, 0, 0.8)",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    elevation: 5,
  },
  circle: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderColor: "black",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  exclamation: {
    fontSize: 40,
    color: "black",
  },
  notificationText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
  },
  info: {
    textAlign: "left",
  },
})
