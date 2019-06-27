import React from 'react'
import { ScrollView, Text } from 'react-native'
import { Button } from 'react-native-elements'


export default JobPostComplete = props => {
	const handleReturnToFind = () => {
		props.navigation.navigate('JobBoard')
	}

	return (
		<ScrollView>
			<Text>Your Job is Posted!</Text>
			<Text>Thanks for posting the job! Your job post can now be seen by qualified caregivers.</Text>
			<Button
				title='Done'
				onPress={handleReturnToFind}
			/>
		</ScrollView>
	)
}