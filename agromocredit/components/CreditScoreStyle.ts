import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: "center",
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    creditScore: {
        fontSize: 18,
        color: '#fff',
        padding: 10,
        fontWeight: 'bold',
    },
    scoreContainer: {
        backgroundColor: '#E42C64',
        borderRadius: 24,
    },
});