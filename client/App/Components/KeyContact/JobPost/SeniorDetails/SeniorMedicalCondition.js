import React from 'react'

import { Text, TextInput, View } from 'react-native'

import { createSeniorProfile } from '../../../Styles/PostJob/SeniorDetailsStyles'

export default SeniorName = props => {
	const { values, handleChange, handleBlur } = props

	return (
		<View style={createSeniorProfile.mainContainer}>
			<Text style={createSeniorProfile.question}>
				Are there any medical conditions to be aware of?
			</Text>
			<View style={createSeniorProfile.multilineTextBox}>
				<TextInput
					value={values.medicalCondition}
					onChangeText={handleChange('medicalCondition')}
					placeholder='Tell us about any medical conditions that we need to be aware of.'
					editable={true}
					multiline={true}
					numberOfLines={4}
					style={createSeniorProfile.multilineTextArea}
				/>
			</View>
			{/* <Input
				placeholder='Tell us about any medical conditions that we need to be aware of.'
				value={values.medicalCondition}
				onChangeText={handleChange('medicalCondition')}
				onBlur={handleBlur}
			/> */}
		</View>
	)
}