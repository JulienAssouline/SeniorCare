import React from 'react'

import { ScrollView, Text } from 'react-native'
import { Button } from 'react-native-elements'

export default ApplicationDone = props => {
	const handleReturnToFind = () => {
		props.navigation.navigate('CaregiverFind')
	}

	return (
		<ScrollView>
			<Text>Your application is sent. You will be notified if you are considered for the role.</Text>
			<Button
				title='Done'
				onPress={handleReturnToFind}
			/>
		</ScrollView>
	)
}