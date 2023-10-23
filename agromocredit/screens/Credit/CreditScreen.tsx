import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CreditScreenHeader from "../../components/Headers/CreditScreenHeader";
import { View, Text } from "react-native";
import { screenStyles } from "../screenStyles";
import TransactionRecord from "../../components/TransactionRecord";

interface User {
    name: string
    balance: number
    id: number
    phoneNumber: string
  }
  
  interface CreditScreenProps {
    route: {
      params: {
        user: User
      }
    }
  }

const CredditScreen: React.FC<CreditScreenProps> = ({ route }) => {
    const { user } = route.params
    return (
        <SafeAreaView style={screenStyles.creditScreenContainer}>
            <CreditScreenHeader screenTitle="CREDIT STATUS" activeButton="history" user={user} />
            <View style={screenStyles.contentContainer}>
                <Text style={screenStyles.creditScreenSubTitleText}>HISTROY</Text>
                <Text style={screenStyles.creditScreenMajorText}>- UGX 898,000</Text>
                <View style={screenStyles.recordContainer}>
                    <TransactionRecord
                        recordDate="15 SEP"
                        recordValue="MULUNDO SAM"
                        recordIcon=""
                        recordSubject="WEED MASTER"
                        recordSubAttr1="-UGX 20,800"
                        recordSubAttr2="UGX 500,000"
                        recordDated={true}
                        detailsIcon={false}
                        creditScreen={true}    
                    />
                    <TransactionRecord
                        recordDate="22 APR"
                        recordValue="MOMO"
                        recordIcon=""
                        recordSubject="GENERAL"
                        recordSubAttr1="UGX 0"
                        recordSubAttr2="GX 200,000"
                        recordDated={true}
                        detailsIcon={false}
                        creditScreen={true}    
                    />
                    <TransactionRecord
                        recordDate="13 MAR"
                        recordValue="MULUNDO SAM"
                        recordIcon=""
                        recordSubject="WEED MASTER"
                        recordSubAttr1="UGX 0"
                        recordSubAttr2="GX 500,000"
                        recordDated={true}
                        detailsIcon={false}
                        creditScreen={true}    
                    />
                    <TransactionRecord
                        recordDate="02 JAN"
                        recordValue="MOMO"
                        recordIcon=""
                        recordSubject="GENERAL"
                        recordSubAttr1="UGX 0"
                        recordSubAttr2="GX 600,000"
                        recordDated={true}
                        detailsIcon={false}
                        creditScreen={true}    
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default CredditScreen