import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'

const PostJobBottomButtons = props => {
	const { setFormPosition, storeReduxFunction, storeReduxData } = props

	const handleFormPosition = direction => {
		direction ? 
			setFormPosition(prevState => {
				storeReduxFunction(storeReduxData)
				return ++prevState
			}) :
			setFormPosition(prevState => {
				if (prevState) {
					return --prevState
				} else {
					props.navigation.navigate('SeniorDetails')
				}
			})
	}

	return (
		<View>
			<Button
				title="Back"
				onPress={() => handleFormPosition(false)}
			/>
			<Button
				title="Next"
				onPress={() => handleFormPosition(true)}
			/>
		</View>
	)
}

export default PostJobBottomButtons