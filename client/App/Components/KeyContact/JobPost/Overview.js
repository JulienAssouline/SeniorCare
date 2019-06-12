import React from 'react'
import { ScrollView, Text } from 'react-native'

import { Button } from '@ant-design/react-native'


export default Overview = props => {
	const handleGoToSeniorDetails = async () => {
		props.navigation.navigate('PostAJobStack')
	}

	return (
		<ScrollView>
			<Text>Job Overview</Text>
			<Button
				type='primary'
				onPress={handleGoToSeniorDetails}
			>
				Go to Post A Job
			</Button>
		</ScrollView>
	)
}

