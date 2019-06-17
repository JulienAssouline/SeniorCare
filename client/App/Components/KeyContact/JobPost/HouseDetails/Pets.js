import React from 'react'
import { Text, View } from 'react-native'

import { Button } from 'react-native-elements'

import { general } from '../../../Styles/PostJob/PostJobGeneralStyles'

export default Cannabis = props => {
	const { setFieldValue } = props

	return (
		<View>
			<Text style={general.question}>
				Pets?
			</Text>
			<Button
				title='Yes'
				type='outline'
				onPress={() => setFieldValue('pets', true)}
			/>
			<Button
				title='No'
				type='outline'
				onPress={() => setFieldValue('pets', false)}
			/>
		</View>
	)
}