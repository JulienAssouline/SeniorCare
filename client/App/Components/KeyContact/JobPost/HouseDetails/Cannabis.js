import React from 'react'
import { Text, View } from 'react-native'

import { Button } from 'react-native-elements'

import { general } from '../../../Styles/PostJob/PostJobGeneralStyles'

export default Cannabis = props => {
	const { setFieldValue } = props

	return (
		<View>
			<Text style={general.question}>
			Cannabis?
			</Text>
			<Button
				title='Yes'
				type='outline'
				onPress={() => setFieldValue('cannabis', true)}
			/>
			<Button
				title='No'
				type='outline'
				onPress={() => setFieldValue('cannabis', false)}
			/>
		</View>
	)
}