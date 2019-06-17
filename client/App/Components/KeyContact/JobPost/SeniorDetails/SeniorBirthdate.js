import React from 'react'

import { DatePickerIOS, Text, View } from 'react-native'
import { Input } from 'react-native-elements'

import { createSeniorProfile } from '../../../Styles/PostJob/SeniorDetailsStyles'

export default SeniorName = props => {
	const { values, setFieldValue } = props

	return (
		<View style={createSeniorProfile.mainContainer}>
			<Text style={createSeniorProfile.question}>
				When is {values.seniorName}'s birth date?
			</Text>
			<DatePickerIOS
				date={values.birthdate}
				mode={'date'}
				onDateChange={newDate => setFieldValue('birthdate', newDate)}
			/>
			<Text>Page 3</Text>
		</View>
	)
}