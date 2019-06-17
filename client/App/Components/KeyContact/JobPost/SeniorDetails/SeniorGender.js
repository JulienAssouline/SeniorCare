import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'

import { createSeniorProfile } from '../../../Styles/PostJob/SeniorDetailsStyles'

export default SeniorName = props => {
	const { values, setFieldValue } = props

	return (
		<View style={createSeniorProfile.mainContainer}>
			<Text style={createSeniorProfile.question}>
				What is {values.seniorName} Gender?
			</Text>
			<Button
				title='Female'
				type='outline'
				onPress={() => setFieldValue('gender', 'female')}
			/>
			<Button
				title='Male'
				type='outline'
				onPress={() => setFieldValue('gender', 'male')}
			/>
			<Button
				title='Other'
				type='outline'
				onPress={() => setFieldValue('gender', 'female')}
			/>
		</View>
	)
}