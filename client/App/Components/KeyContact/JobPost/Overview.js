import React from 'react'
import { ScrollView, Text } from 'react-native'
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

const Overview = props => {
	const handleGoToSeniorDetails = async () => {
		props.onPositionUpdate(0)
		props.navigation.navigate('SeniorDetails')
	}
	const handleBasicInformation = () => {
		props.onPositionUpdate(0)
		props.navigation.navigate('BasicInformation')
	}

	const handleHouseDetails = () => {
		props.onPositionUpdate(0)
		props.navigation.navigate('HouseDetails')
	}

	return (
		<ScrollView>
			<Text>Job Overview</Text>
			<Button
				title="Go to Senior Details"
				type='solid'
				onPress={handleGoToSeniorDetails}
			/>

			<Button
				title="Go to House Details"
				type='solid'
				onPress={handleHouseDetails}
			/>

			<Button
				title="	Go to Job Post Basic Information"
				type='solid'
				onPress={handleBasicInformation}
			/>

		</ScrollView>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Overview) 