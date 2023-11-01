import React from "react"
import { Text } from "react-native"

interface ErrorMessageProps {
  message: string
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <Text
      style={{
        color: "red",
        fontSize: 16,
        marginTop: 10,
        textAlign: "center",
        backgroundColor: "rgba(255, 0, 0, 0.09)",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
      }}
    >
      {message}
    </Text>
  )
}

export default ErrorMessage
