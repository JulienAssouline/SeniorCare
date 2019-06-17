import React from 'react'

import { Text, View } from 'react-native'
import { Input } from 'react-native-elements'

import { createSeniorProfile } from '../../../Styles/PostJob/SeniorDetailsStyles'

export default SeniorName = props => {
	const { values, handleChange, handleBlur } = props

	return (
		<View style={createSeniorProfile.mainContainer}>
			<Text style={createSeniorProfile.question}>
				What is your relationship to {values.seniorName}?
			</Text>
			<Input
				placeholder='Daughter/Friend/Neighbour'
				value={values.relationship}
				onChangeText={handleChange('relationship')}
				onBlur={handleBlur}
			/>
		</View>
	)
}