import React from 'react'
import { ScrollView, Text } from 'react-native'
import { Button } from 'react-native-elements'

export default Overview = props => {
	const handleGoToSeniorDetails = async () => {
		props.navigation.navigate('SeniorDetails')
	}
	const handleBasicInformation = () => {
		props.navigation.navigate('BasicInformation')
	}

	return (
		<ScrollView>
			<Text>Job Overview</Text>
			<Button
				title='Go to Senior Details'
				onPress={handleGoToSeniorDetails}
			/>


			<Button
				title="	Go to Job Post Basic Information"
				onPress={handleBasicInformation}
			/>

		</ScrollView>
	)
}

