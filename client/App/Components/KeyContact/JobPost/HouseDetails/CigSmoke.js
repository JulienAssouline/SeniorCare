import React from 'react'
import { Text, View } from 'react-native'

import { Button } from 'react-native-elements'

import { general } from '../../../Styles/PostJob/PostJobGeneralStyles'
import { style } from '../../../Styles/PostJob/PostJobButtonsStyles'

export default cigSmoking = props => {
	const { setFieldValue, values } = props

	return (
		<View>
			<Text style={general.question}>
				Cigarette smoking?
			</Text>
			<View style={style.splitButtonContainer}>
				<Button
					buttonStyle={style.serviceButton}
					containerStyle={style.serviceButtonContainer}
					title='Yes'
					type={values.cigSmoking === true ? 'solid' : 'outline'}
					onPress={() => setFieldValue('cigSmoking', true)}
				/>
				<Button
					buttonStyle={style.serviceButton}
					containerStyle={style.serviceButtonContainer}
					title='No'
					type={values.cigSmoking === false ? 'solid' : 'outline'}
					onPress={() => setFieldValue('cigSmoking', false)}
			/>
			</View>
		</View>
	)
}