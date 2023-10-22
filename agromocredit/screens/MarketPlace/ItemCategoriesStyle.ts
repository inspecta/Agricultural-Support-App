import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    categoriesContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        color: '#fff',
        marginTop: 20,
    },
    categoryCard: {
        elevation: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 10,
        padding: 20,
        width: '43%',
        height: 150,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});