import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    comparisonText: {
        fontSize: 20,
        color: '#ffcb05'
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginVertical: 25,
    },
    contentRecord: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 5,
        alignItems: 'center',
    },
    recordDate: {
        width: '12%',
        borderRadius: 96,
        borderWidth: 4,
        borderColor: '#5E5A5A',
        marginVertical: 10,
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    creditScreenRecordDate: {
        width: '18%',
        borderRadius: 96,
        borderWidth: 6,
        borderColor: '#ffcb05',
        marginVertical: 10,
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    recordProduct: {
        display: "flex",
        flexDirection: 'column',
        width: '38%',
        alignContent: 'flex-start',
    },
    recordTransaction: {
        display: "flex",
        flexDirection: 'column',
        alignContent: 'flex-end',
    },
    productCategory: {
        display:"flex",
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
    },
    productIcon: {
        margin: -5,
    },
    dateText: {
        margin: 7,
        fontSize: 14,
        color: '#fff'
    },
    creditScreenDateText: {
        margin: 7,
        fontSize: 14,
        color: '#000'
    }
});