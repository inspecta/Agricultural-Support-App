import React, { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import CreditScreenHeader from "../../components/Headers/CreditScreenHeader"
import { screenStyles } from "../screenStyles"
import CreditHistory from "../../components/Credit/CreditHistory"
import PayLoan from "../../components/Credit/PayLoan"
import Borrowing from "../../components/Credit/Borrowing"

const CreditScreen = ({ route }) => {
  const { user } = route.params
  const [activeTab, setActiveTab] = useState("history")

  const handleTabs = (tab: string) => {
    setActiveTab(tab)
  }

  let tabContent

  if(activeTab === "history") {
    tabContent = (<CreditHistory user={user} />)
  }else if(activeTab === "pay") {
    tabContent = (<PayLoan user={user} />)
  }else if(activeTab === "borrow") {
    tabContent = (<Borrowing user={user} />)
  }


  return (
    <SafeAreaView style={screenStyles.creditScreenContainer}>
      <CreditScreenHeader
        screenTitle="CREDIT STATUS"
        activeButton={activeTab}
        user={user}
        handleTabs={handleTabs}
      />
    {tabContent}
    </SafeAreaView>
  )
}

export default CreditScreen
