import React, { useState } from 'react'
import { ScrollView, Text } from 'react-native'
import styles from '../../Styles/JobDashboardScreen/JobDashboardScreenStyle'
import PostJobTop from './PostJobTop'
import BasicInformationBody from './BasicInformationBody'
import PostJobBottomButtons from './PostJobBottomButtons'

const BasicInformation = props => {

	const [formPosition, setFormPosition] = useState(0)

    const stepCount = 4

    return (
        <ScrollView>
            <PostJobTop
                title={'Basic information'}
                formPosition={formPosition}
                stepCount={stepCount}
            />
            <BasicInformationBody
                formPosition={formPosition}
            />
            <PostJobBottomButtons
                navigation={props.navigation}
                setFormPosition={setFormPosition}
			/>
        </ScrollView>
    )
};

export default BasicInformation