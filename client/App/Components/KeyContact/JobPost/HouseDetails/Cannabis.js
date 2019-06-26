import React from 'react'
import { Text, View } from 'react-native'

import { Button } from 'react-native-elements'

import { general } from '../../../Styles/PostJob/PostJobGeneralStyles'
import { style } from '../../../Styles/PostJob/PostJobButtonsStyles'


export default Cannabis = props => {
	const { setFieldValue, values } = props

	return (
		<View>
			<Text style={general.question}>
			Cannabis?
			</Text>
			<View style={style.splitButtonContainer}>
				<Button
					title='Yes'
					buttonStyle={style.serviceButton}
					containerStyle={style.serviceButtonContainer}
					type={values.cannabis === true ? 'solid' : 'outline'}
					onPress={() => setFieldValue('cannabis', true)}
				/>
				<Button
					title='No'
					buttonStyle={style.serviceButton}
					containerStyle={style.serviceButtonContainer}
					type={values.cannabis === false ? 'solid' : 'outline'}
					onPress={() => setFieldValue('cannabis', false)}
				/>
			</View>
		</View>
	)
}