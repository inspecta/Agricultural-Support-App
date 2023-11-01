import React from "react"
import {
  Modal,
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native"

interface CustomModalProps {
  visible: boolean
  onClose: () => void
  transactionDetails: {
    amount: string
    payerNumber: string
    reason: string
    paymentDate: string
    transactionType: string
  }
  user?: {
    name: string
  }
}

const CustomModal: React.FC<CustomModalProps> = ({
  visible,
  onClose,
  transactionDetails,
  user,
}) => {
  const paymentDate: Date = new Date()
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            source={{
              uri: "https://play-lh.googleusercontent.com/rqGzKfvfgLEOzap1p7HLk_S3ZTgLqyvNCV-zo0URAcu5ywmWeR0zRi6SomHr2b80gg",
            }}
            style={styles.img}
          />
          <View style={styles.checkmark}>
            <Text style={styles.checkmarkText}>✓</Text>
          </View>
        </View>
        <View style={styles.infoDiv}>
          <Text style={styles.txnHeader}>Transaction Successful 💯</Text>
          <Text style={styles.txnAmount}>
            UGX{" "}
            {transactionDetails.amount
              ? (+transactionDetails.amount).toLocaleString()
              : "0"}
          </Text>

          <Text style={styles.from}>FROM</Text>
          <Text style={styles.payerNumber}>
            {transactionDetails.payerNumber}
          </Text>
          <View style={styles.payerName}>
            <Text>Payer Name</Text>
            <Text style={styles.payerCode}>{user.name.toUpperCase()}</Text>
          </View>
          <View style={styles.transactionDetails}>
            <View style={styles.transactionDetail}>
              <Text>Payment Date:</Text>
              <Text style={styles.detailValue}>
                {paymentDate.toLocaleDateString()}
              </Text>
            </View>
            <View style={styles.transactionDetail}>
              <Text>Description:</Text>
              <Text style={styles.detailValue}>
                {transactionDetails.transactionType}
              </Text>
            </View>
            <View style={styles.transactionDetail}>
              <Text>Reference No.</Text>
              <Text style={styles.detailValue}>bf5d-7fdf5b2ce992</Text>
            </View>
          </View>
          <TouchableOpacity onPress={onClose} style={styles.button}>
            <Text style={styles.buttonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 200, 0, 0.9)",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  imgContainer: {
    alignItems: "center",
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 20,
    borderColor: "#166cee",
    borderWidth: 1,
  },
  checkmark: {
    position: "absolute",
    top: 90,
    left: 240,
    width: 35,
    height: 35,
    transform: [{ translateX: -50 }, { translateY: -50 }],
    backgroundColor: "white",
    borderRadius: 50,
    padding: 8,
  },
  checkmarkText: {
    fontSize: 15,
    color: "green",
  },
  infoDiv: {
    backgroundColor: "white",
    padding: 30,
    borderRadius: 15,
  },
  txnHeader: {
    textAlign: "center",
    fontSize: 20,
    paddingBottom: 20,
    fontWeight: "100",
  },
  txnAmount: {
    textAlign: "center",
    fontWeight: "bold",
    paddingVertical: 5,
  },
  from: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
    paddingVertical: 5,
  },
  payerNumber: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 5,
  },

  payerName: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 14,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "lightgray",
    paddingVertical: 15,
  },
  transactionDetails: {
    marginTop: 10,
  },
  transactionDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 12,
    marginVertical: 5,
  },
  detailValue: {
    color: "#4d4d4d",
  },
  button: {
    marginTop: 10,
    borderWidth: 0,
    fontSize: 10,
    color: "white",
    backgroundColor: "#166cee",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 15,
  },
  payerCode: {
    color: "gray",
  },
})

export default CustomModal
