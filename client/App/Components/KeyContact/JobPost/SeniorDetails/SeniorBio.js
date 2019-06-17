import React from 'react'

import { Text, TextInput, View } from 'react-native'

import { createSeniorProfile } from '../../../Styles/PostJob/SeniorDetailsStyles'

export default SeniorName = props => {
	const { values, handleChange, handleBlur } = props

	return (
		<View style={createSeniorProfile.mainContainer}>
			<Text style={createSeniorProfile.question}>
				Tell us more about {values.seniorName}!
			</Text>
			<View style={createSeniorProfile.multilineTextBox}>
				<TextInput
					value={values.bio}
					onChangeText={handleChange('bio')}
					placeholder='Tell us anything! You can tell us about likes/dislikes or any activities they enjoy. We like to get a sense of personality.'
					editable={true}
					multiline={true}
					numberOfLines={4}
					style={createSeniorProfile.multilineTextArea}
				/>
			</View>
			{/* <Input
				placeholder='Tell us anything! You can tell us about likes/dislikes or any activities they enjoy. We like to get a sense of personality.'
				value={values.bio}
				onChangeText={handleChange('bio')}
				onBlur={handleBlur}
			/> */}
		</View>
	)
}