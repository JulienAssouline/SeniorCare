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
					currentPosition={props.formPosition}
					// labels={labels}
					stepCount={props.stepCount}
				/>
			</View>
    )
}
export default PostJobTop