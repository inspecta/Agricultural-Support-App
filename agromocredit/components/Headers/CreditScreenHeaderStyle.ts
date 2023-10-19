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
        width: '23%',
        backgroundColor: '#000',
        borderRadius: 12,
        elevation: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    creditBtnTextStyles: {
        fontSize: 12,
        fontWeight: '100',
        color: '#ffcb05',
    },
    activeBtnStyles: {
        height: 80,
        width: '23%',
        backgroundColor: '#ffcb05',
        borderRadius: 12,
        elevation: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeBtnTextStyles: {
        fontSize: 12,
        fontWeight: '100',
        color: '#000',
    },
});