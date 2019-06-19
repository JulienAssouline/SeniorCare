import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'

const mapStateToProps = state => {
	return {
		formPosition: state.formPosition,
		overviewPosition: state.overviewPosition
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onPositionUpdate: (value) => dispatch({
			type: 'CHANGEFORMPOSITION',
			payload: value
		}),
		onOverviewUpdate: (value) => dispatch({
			type: 'CHANGEOVERVIEWPOSITION',
			payload: value
		})
	}
}

const PostJobBottomButtons = props => {
	const { storeReduxFunction, storeReduxData, handleSubmit, errors, touched } = props

	const handleFormPosition = directionForward => {
		if (directionForward) {
			handleSubmit()
			console.log('checkpoint A')
			if (Object.keys(errors).length === 0 && Object.keys(touched).length !== 0) {
				console.log('checkpoint B')
				storeReduxFunction(storeReduxData)
				props.onPositionUpdate(++props.formPosition)
				console.log('form position', props.formPosition)
			}
		} else {
			storeReduxFunction(storeReduxData)
			if (props.formPosition !== 0) {
				props.onPositionUpdate(--props.formPosition)
			} else {
				props.navigation.navigate('Overview')
			}
		}
	}

	return (
		<View>
			<Button
				title='test'
				onPress={() => props.navigation.navigate('overview')}
			/>
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

export default connect(mapStateToProps, mapDispatchToProps)(PostJobBottomButtons)

	// const handleFormPosition = direction => {
	// 	console.log('handle submit function', handleSubmit)
	// 	// console.log('handle submit diff', handleSubmit())
	// 	handleSubmit()

	// 	storeReduxFunction(storeReduxData)

	// 	direction ? 
	// 		setFormPosition(prevState => {
	// 			return ++prevState
	// 		}) :
	// 		setFormPosition(prevState => {
	// 			if (prevState) {
	// 				return --prevState
	// 			} else {
	// 				props.navigation.navigate('SeniorDetails')
	// 			}
	// 		})
	// }