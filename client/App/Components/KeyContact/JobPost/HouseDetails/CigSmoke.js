import React from 'react'
import { Text, View } from 'react-native'

import { Button } from 'react-native-elements'

import { general } from '../../../Styles/PostJob/PostJobGeneralStyles'

export default cigSmoking = props => {
	const { setFieldValue, values } = props

	return (
		<View>
			<Text style={general.question}>
				Cigarette smoking?
			</Text>
			<Button
				title='Yes'
				type={values.cigSmoking === true ? 'solid' : 'outline'}
				onPress={() => setFieldValue('cigSmoking', true)}
			/>
			<Button
				title='No'
				type={values.cigSmoking === false ? 'solid' : 'outline'}
				onPress={() => setFieldValue('cigSmoking', false)}
			/>
		</View>
	)
}