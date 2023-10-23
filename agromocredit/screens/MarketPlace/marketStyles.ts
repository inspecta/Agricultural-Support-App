import { StyleSheet } from "react-native";

export const marketStyles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        padding: 15,
        height: "100%",
      },
    screenTitle: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    },
    titleContainer: {
        margin: 10,
    },
    titleText: {
        color: "#ffcb05",
        fontSize: 16,
        fontWeight: "bold",
    },
    smallText: {
        color: "#ffcb05",
        fontSize: 12,
        marginVertical: 1,
    },
    textInput: {
        backgroundColor: "#fff",
        borderColor: "#ffcb05",
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        marginVertical: 5,
        marginHorizontal: 15,
    },
    categoriesContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        color: '#fff',
        marginVertical: 20,
    },

    creditableIcon: {
        padding: -5,
        margin: -5,
    },
});