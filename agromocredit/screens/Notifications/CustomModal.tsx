import React from "react"
import { Modal, Text, View, TouchableOpacity } from "react-native"
import { styles } from "./CustomModalStyles"

interface CustomModalProps {
  visible: boolean
  onClose: () => void
  transactionDetails: {
    amount: string
    payerNumber: string
    reason: string
  }
}

const CustomModal: React.FC<CustomModalProps> = ({
  visible,
  onClose,
  transactionDetails,
}) => {
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.circle}>
            <Text style={styles.exclamation}>!</Text>
          </View>
          <Text style={styles.notificationText}>Transaction Details</Text>
          <Text
            style={styles.info}
          >{`Amount: ${transactionDetails.amount}`}</Text>
          <Text
            style={styles.info}
          >{`Payer Number: ${transactionDetails.payerNumber}`}</Text>
          <Text
            style={styles.info}
          >{`Reason: ${transactionDetails.reason}`}</Text>
          <TouchableOpacity onPress={onClose} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export default CustomModal
