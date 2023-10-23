import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    categoryCard: {
        elevation: 10,
        backgroundColor: '#fff',
        borderRadius: 20,
        margin: 10,
        width: '43%',
        height: 150,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardTextContainer: {
        backgroundColor: '#000',
        opacity: 0.8,
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardImage: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    productName: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '400',
    },
    productPrice: {
        color: '#ffcb05',
        fontSize: 12,
    },
});
