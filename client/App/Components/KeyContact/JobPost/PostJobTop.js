import React from 'react'
import { View, Text } from 'react-native'
import StepIndicator from 'react-native-step-indicator'
import styles from '../../Styles/JobDashboardScreen/PostJobStyle'

const PostJobTop = props => {
    return (
        <View>
            <Text>{props.title}</Text>
            <StepIndicator
                customStyles={styles}
                currentPosition={props.currentPosition}
                stepCount={props.stepCount}
                // labels={labels}

                stepCount={4}
            // labels={labels}
            />
        </View>
    )
}
export default PostJobTop