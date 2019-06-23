import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'


//#314592 blue
//gray #f0f0f0
//#4d4d4 dark text
//#ffffff

import { style } from '../../Styles/PostJob/PostJobButtonsStyles'

const mapStateToProps = state => {
	const { formPosition, overviewPosition, completedSections } = state.postJob.position
	return {
		formPosition: formPosition,
		overviewPosition: overviewPosition,
		completedSections: completedSections,
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
		}),
		onCompletedSectionsUpdate: value => dispatch({
			type: 'CHANGECOMPLETEDSECTIONS',
			payload: value
		})
	}
}

const PostJobBottomButtons = props => {
	const { storeReduxFunction, storeReduxData, handleSubmit, errors, touched, lastPosition } = props

	const handleFormPosition = directionForward => {
		if (directionForward) {
			handleSubmit()

			if (Object.keys(errors).length === 0 && Object.keys(touched).length !== 0 || storeReduxData !== '') {
				storeReduxFunction(storeReduxData)
				
				if (props.formPosition === lastPosition ) {
					if (props.completedSections.includes(props.overviewPosition)) {
						props.completedSections.push(props.overviewPosition)
					} 
					props.navigation.navigate('Overview')
				} else {
					props.onPositionUpdate(++props.formPosition)
				}
			}
		} else {
			storeReduxFunction(storeReduxData)
			if (props.formPosition !== 0) {
				props.onPositionUpdate(--props.formPosition)
			} else {
				if (props.overviewPosition === 2) {
					props.navigation.navigate('SeniorDetails')
				} else {
					props.navigation.navigate('Overview')
				}
			}
		}
	}

	return (
		<View style={style.buttonContainer}>
			<Button
				title="Back"
				onPress={() => handleFormPosition(false)}
				buttonStyle={style.back}
			/>
			<Button
				title="Next"
				onPress={() => handleFormPosition(true)}
				buttonStyle={style.next}
			/>
		</View>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostJobBottomButtons)