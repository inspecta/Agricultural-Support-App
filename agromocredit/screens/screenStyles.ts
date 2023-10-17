import { StyleSheet } from "react-native";

export const screenStyles = StyleSheet.create({
    container: {
        backgroundColor: '#282B33',
        padding: 30,
        height: '100%',
    },
    creditScreenContainer: {
        backgroundColor: '#E42C64',
        height: '100%',
    },
    contentContainer: {
        backgroundColor: '#fff',
        elevation: 40,
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
        marginTop: 10,
    },
    subTitleText: {
        color: '#B5BBC9',
        fontSize: 11,
        marginVertical: 1,
    },
    subText: {
        color: '#B5BBC9',
        fontSize: 9,
        marginVertical: 1,
    },
    majorText: {
        color: '#fff',
        fontSize: 28,
        marginVertical: 1,
    },
});