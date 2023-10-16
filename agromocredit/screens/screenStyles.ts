import { StyleSheet } from "react-native";

export const screenStyles = StyleSheet.create({
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
    subTitleText: {
        color: '#fff',
        fontSize: 11,
        marginVertical: 1,
    },
    majorText: {
        color: '#fff',
        fontSize: 28,
        marginVertical: 1,
    },
});