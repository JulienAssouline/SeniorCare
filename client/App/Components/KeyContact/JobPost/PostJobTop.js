import React from 'react'
import { View, Text } from 'react-native'
import StepIndicator from 'react-native-step-indicator'
import styles from '../../Styles/JobDashboardScreen/PostJobStyle'
import { general } from '../../Styles/PostJob/PostJobGeneralStyles'

const PostJobTop = props => {
    return (
			<View>
				<Text style={general.title}>{props.title}</Text>
				<StepIndicator
					customStyles={styles}
					currentPosition={props.formPosition}
					// labels={labels}
					stepCount={props.stepCount}
				/>
			</View>
    )
}
export default PostJobTop