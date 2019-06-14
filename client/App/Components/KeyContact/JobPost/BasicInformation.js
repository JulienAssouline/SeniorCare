import React from 'react'
import { ScrollView, Text } from 'react-native'
import styles from '../../Styles/JobDashboardScreen/JobDashboardScreenStyle'
import PostJobTop from './PostJobTop'
import BasicInformationBody from './BasicInformationBody'
import PostJobBottomButtons from './PostJobBottomButtons'
import { Button } from '@ant-design/react-native';


const BasicInformation = props => {
    
    let currentPosition = 2;

    return (
        <ScrollView>
            <PostJobTop
                title={'Basic information'}
                currentPosition={currentPosition}
            />
            <BasicInformationBody 
                currentPosition={currentPosition}
            />
            <PostJobBottomButtons />
        </ScrollView>
    )
};

export default BasicInformation