import React from 'react'
import { ScrollView, Text } from 'react-native'

import { Button } from '@ant-design/react-native'


export default Overview = props => {
	const handleGoToSeniorDetails = async () => {
		props.navigation.navigate('PostAJobStack')
	}
	const handleBasicInformation = () => {
		props.navigation.navigate('BasicInformation')
	}

	return (
		<ScrollView>
			<Text>Job Overview</Text>
			<Button
				type='primary'
				onPress={handleGoToSeniorDetails}
			>
				Go to Senior Details
			</Button>
			<Button
				type='primary'
				onPress={handleBasicInformation}
			>
				Go to Job Post Basic Information
			</Button>
		</ScrollView>
	)
}

