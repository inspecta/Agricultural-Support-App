import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    requestPaymentForm: {
        backgroundColor: '#2F333C',
        borderRadius: 16,
        marginVertical: 20,
        padding: 20,
    },
    dropDown: {
        display:"flex",
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "space-around",
        gap: 3,
        marginVertical: 20,
    },
    dropdownButton: {
        height: 32,
        width: "85%",
        backgroundColor: "transparent",
        borderBottomColor: "#5B6373",
        borderBottomWidth: .5,
    },
    dropdownButtonText: {
        color: '#fff',
        fontSize: 16,
        marginVertical: 5,
    },
    textInput: {
        height: 60,
        width: "85%",
        backgroundColor: "transparent",
        borderBottomColor: "#5B6373",
        borderBottomWidth: .5,
        color: '#fff',
        marginVertical: 20,
    },
    sendBtnStyles: {
        height: 60,
    },
});