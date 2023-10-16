import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#282B33',
        padding: 30,
        height: '100%',
    },
    pageTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    subTitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
    },
    titleTabs: {
        backgroundColor: '#2F333C',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        color: '#fff',
    },
    balanceText: {
        color: '#fff',
        fontSize: 11,
        marginVertical: 1,
    }
    ,
    balance: {
        color: '#fff',
        fontSize: 28,
        marginVertical: 1,
    },
    creditScoreTextContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    creditScoreText: {
        color: '#fff',
        fontSize: 8,
    },
    creditScoreContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: "center",
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
    transactionsContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 10,
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
        borderColor: '#5E5A5A',
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
    },
    marketBtnStyles: {
        height: 50,
    }
});