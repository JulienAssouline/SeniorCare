import React from 'react'
import { Text, View } from 'react-native'

import { Button } from 'react-native-elements'

import { general } from '../../../Styles/PostJob/PostJobGeneralStyles'

export default Pets = props => {
	const { setFieldValue, values } = props

	return (
		<View>
			<Text style={general.question}>
				Pets?
			</Text>
			<Button
				title='Yes'
				type={values.pets === true ? 'solid' : 'outline'}
				onPress={() => setFieldValue('pets', true)}
			/>
			<Button
				title='No'
				type={values.pets === false ? 'solid' : 'outline'}
				onPress={() => setFieldValue('pets', false)}
			/>
		</View>
	)
}