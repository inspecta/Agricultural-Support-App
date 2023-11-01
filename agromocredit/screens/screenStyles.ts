import { StyleSheet } from "react-native"

export const screenStyles = StyleSheet.create({
  container: {
    backgroundColor: "#282B33",
    padding: 30,
    height: "100%",
  },
  creditScreenContainer: {
    backgroundColor: "#ffcb05",
    height: "100%",
  },
  contentContainer: {
    backgroundColor: "#fff",
    elevation: -200,
    minHeight: "70%",
    padding: 30,
  },
  pageTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  creditScreenPageTitle: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  subTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  subTitleText: {
    color: "#B5BBC9",
    fontSize: 11,
    marginVertical: 1,
  },
  creditScreenSubTitleText: {
    color: "#000",
    fontSize: 14,
    marginVertical: 1,
  },
  subText: {
    color: "#B5BBC9",
    fontSize: 9,
    marginVertical: 1,
  },
  creditScreenSubText: {
    color: "#000",
    fontSize: 12,
    marginVertical: 1,
  },
  majorText: {
    color: "#fff",
    fontSize: 28,
    marginVertical: 1,
  },
  creditScreenMajorText: {
    color: "#000",
    fontSize: 28,
    marginVertical: 1,
  },
  screenBtnTextStyles: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000",
  },
  recordContainer: {
    marginVertical: 10,
  },
  creditScreenTextInput: {
    height: 60,
    backgroundColor: "transparent",
    borderBottomColor: "#5B6373",
    borderBottomWidth: 0.5,
    color: "#000",
    marginVertical: 20,
  },
  creditScreenTextInput2: {
    height: 60,
    backgroundColor: "transparent",
    borderBottomColor: "#5B6373",
    borderBottomWidth: 0.5,
    color: "#000",
    marginVertical: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
  textInput: {
    height: 30,
    width: "85%",
    backgroundColor: "transparent",
    borderBottomColor: "#5B6373",
    borderBottomWidth: 0.5,
    color: "#fff",
    marginVertical: 10,
    padding: 0,
    fontSize: 20,
  },
  creditBtnStyles: {
    height: 50,
    backgroundColor: "#ffcb05",
    borderRadius: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    width: "100%",
  },
  creditBtnTextStyles: {
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noRecordsText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
})
