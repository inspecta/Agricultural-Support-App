import React from 'react';
import { Text, View } from 'react-native';
import { IconButton } from 'react-native-paper';
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
  }

const TransactionRecord: React.FC<TransactionRecordProps> = ({ recordDate, recordValue, recordIcon, recordSubject, recordSubAttr1, recordSubAttr2 , detailsIcon, recordDated}) => {
    return (
        <View style={styles.contentRecord}>
            <View style={styles.recordDate}>
                {recordDated ? (<Text style={styles.dateText}>{recordDate}</Text>) : (<Text>xx</Text>)}
            </View>
            <View style={styles.recordProduct}>
                <Text style={screenStyles.subTitleText}>{recordValue}</Text>
                <View style={styles.productCategory}>
                    <IconButton icon={recordIcon} iconColor="#ffcb05" size={15} style={styles.productIcon} />
                    <Text style={screenStyles.subText}>{recordSubject}</Text>
                </View>
            </View>
            <View>
                <Text style={screenStyles.subTitleText}>{recordSubAttr1}</Text>
                <Text style={screenStyles.subText}>{recordSubAttr2}</Text>
            </View>
            {detailsIcon && (<IconButton icon="chevron-right" size={17} iconColor="#fff" />)}
        </View>
    )
}

export default TransactionRecord;