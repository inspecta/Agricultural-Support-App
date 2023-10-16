import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#282B33',
        paddingHorizontal: 30,
        paddingVertical: 40,
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
        marginTop: 20,
    },
    titleTabs: {
        backgroundColor: '#2F333C',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        color: '#fff',
    },
});