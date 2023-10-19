import React from 'react';
import { Text, View } from 'react-native';
import { IconButton, RadioButton } from 'react-native-paper';
import {styles} from "./TransactionRecordStyle"
import { screenStyles } from '../screens/screenStyles';

interface TransactionRecordProps {
    recordDate: any;
    recordValue: string;
    recordIcon: string;
    recordSubject: string;
    recordSubAttr1: string;
    recordSubAttr2: string;
    detailsIcon: boolean;
    recordDated: boolean;
    creditScreen: boolean;
  }

const TransactionRecord: React.FC<TransactionRecordProps> = ({ recordDate, recordValue, recordIcon, recordSubject, recordSubAttr1, recordSubAttr2 , detailsIcon, recordDated, creditScreen}) => {
    
    const [checked, setChecked] = React.useState('0704445667');
    
    return (
        <View style={styles.contentRecord}>
            <View style={creditScreen ? styles.creditScreenRecordDate : styles.recordDate}>
                {recordDated ? (<Text style={creditScreen ? styles.creditScreenDateText : styles.dateText}>{recordDate}</Text>) : 
                (<View>
                        <RadioButton
                            color='#ffcb05'
                            uncheckedColor='#ffcb05'
                            value="0704445667"
                            status={checked === '0704445667' ? 'checked' : 'unchecked'}
                            onPress={()=>setChecked('')}
                        />
                </View>)
                }
            </View>
            <View style={styles.recordProduct}>
                <Text style={creditScreen ? screenStyles.creditScreenSubTitleText : screenStyles.subTitleText}>{recordValue}</Text>
                <View style={styles.productCategory}>
                    {!creditScreen && (<IconButton icon={recordIcon} iconColor="#ffcb05" size={15} style={styles.productIcon} />)}
                    <Text style={creditScreen ? screenStyles.creditScreenSubText : screenStyles.subText}>{recordSubject}</Text>
                </View>
            </View>
            <View>
                <Text style={creditScreen ? screenStyles.creditScreenSubTitleText : screenStyles.subTitleText}>{recordSubAttr1}</Text>
                <Text style={creditScreen ? screenStyles.creditScreenSubText : screenStyles.subText}>{recordSubAttr2}</Text>
            </View>
            {detailsIcon && (<IconButton icon="chevron-right" size={17} iconColor="#fff" />)}
        </View>
    )
}

export default TransactionRecord;