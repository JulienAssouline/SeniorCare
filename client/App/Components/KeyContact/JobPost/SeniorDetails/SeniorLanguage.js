import React from 'react'

import { Text, View } from 'react-native'
import { Input } from 'react-native-elements'

import { createSeniorProfile } from '../../../Styles/PostJob/SeniorDetailsStyles'

export default SeniorName = props => {
	const { values, handleChange, handleBlur } = props

	return (
		<View style={createSeniorProfile.mainContainer}>
			<Text style={createSeniorProfile.question}>
				Do you have any language Preferences?
			</Text>
			<Input
				placeholder='Knows some English but mostly speaks french, etc.'
				value={values.language}
				onChangeText={handleChange('language')}
				onBlur={handleBlur}
			/>
		</View>
	)
}