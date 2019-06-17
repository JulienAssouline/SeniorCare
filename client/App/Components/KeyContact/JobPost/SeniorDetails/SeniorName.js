import React from 'react'

import { Text, View } from 'react-native'
import { Input } from 'react-native-elements'

import { createSeniorProfile } from '../../../Styles/PostJob/SeniorDetailsStyles'

export default SeniorName = props => {
	const { values, handleChange, handleBlur } = props

	return (
		<View style={createSeniorProfile.mainContainer}>
			<Text style={createSeniorProfile.question}>
				What is the Senior's Name?
			</Text>
			<Input
				placeholder='Angel'
				value={values.seniorName}
				onChangeText={handleChange('seniorName')}
				onBlur={handleBlur}
			/>
		</View>
	)
}