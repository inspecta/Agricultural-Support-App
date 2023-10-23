import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    bottomContent: {
        backgroundColor: '#fff',
        height: 'auto',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    banner: {
        flexGrow: 1,
        minHeight: 50,
    },
    welcomeScreenContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
    },
    contentContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: 30,
        flexDirection: 'column',
        gap: 20,
    },
    productName: {
        color: "#000",
        fontSize: 20,
        fontWeight: "bold",
    },
    productContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    productPrice: {
        color: '#ffcb05',
        fontSize: 18,
        fontWeight: "bold",
    },
    categoryText: {
        color: '#000',
        fontSize: 12,
    },
    payButton: {
        height: 50,
        backgroundColor: "#ffcb05",
        borderRadius: 12,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        elevation: 10,
        width: "45%",
      },
      creditButton: {
        height: 50,
        backgroundColor: "#000",
        borderRadius: 12,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        elevation: 10,
        width: "45%",
      },
    payBtnTextStyles: {
        color: "#000",
        textAlign: "center",
    },
    creditBtnTextStyles: {
        color: "#ffcb05",
        textAlign: "center",
    }

});