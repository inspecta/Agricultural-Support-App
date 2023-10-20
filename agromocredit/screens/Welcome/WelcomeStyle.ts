import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  bottomContent: {
    backgroundColor: '#ffcb05',
    height: 'auto',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  banner: {
    flexGrow: 1,
    minHeight: 50,
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 30,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
  },
  welcomeScreenContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
})
