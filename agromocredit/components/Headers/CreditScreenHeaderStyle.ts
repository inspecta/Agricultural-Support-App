import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        minHeight: '30%',
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        marginTop: 10,
    },
    creditBtnStyles: {
        height: 80,
        width: '25%',
    },
    creditBtnTextStyles: {
        fontSize: 6,
        fontWeight: '100',
        color: '#ff0',
    },
});