import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    titleTabs: {
        backgroundColor: '#2F333C',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        color: '#fff',
    },
    transactionsContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10,
        justifyContent: 'space-around',
    },
    transactionsTitle: {
        color: '#fff',
        fontSize: 12,
        width: '100%',
        marginVertical: 5,
    },
    transactionsSections: {
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        marginBottom: 10,
    },
    transactionsButton: {
        width: '80%',
        borderRadius: 96,
        borderWidth: 5,
        borderColor: '#ffcb05',
        marginVertical: 10,
        height: 140,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        juatifyContent: 'center',
    },
    transactionsText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 12,
    },
    transactionsButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        padding: 10,
        fontWeight: 'bold',
    },
    buttonsContainer: {
        display: "flex",
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10,
    },
    screenButtonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'center',
        gap: 20,
    },
    marketBtn: {
        width: '100%',
 
    },
    screenBtn: {
        width: '45%',
        marginBottom: 10,
    },
    screenBtnStyles: {
        height: 100,
        padding: 0,        
    },
    marketBtnStyles: {
        height: 50,
    }
});