import React from 'react'
import { ScrollView, Text } from 'react-native'
import { Button, ListItem, Avatar } from 'react-native-elements'

import { connect } from 'react-redux'

import { overview } from '../../Styles/PostJob/OverviewStyles'

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
		})
	}
}

const mapOverviewPosition = [
	{
		title: 'Basic Information',
		iconNumber: 1,
		destination: 'BasicInformation',
	},
	{
		title: 'Service Details',
		iconNumber: 2,
		destination: 'ServiceDetails',
	},
	{
		title: 'Senior Details',
		iconNumber: 3,
		destination: 'SeniorDetails',
	},
	{
		title: 'House Details',
		iconNumber: 4,
		destination: 'HouseDetails',
	},
	{
		title: 'Caregiver Preferences',
		iconNumber: 5,
		destination: 'CaregiverPreferences',
	},
]

const Overview = props => {
	const handleDirectNavigation = (destination, destinationIndex) => {
		props.onPositionUpdate(0)
		props.onOverviewUpdate(destinationIndex)
		props.navigation.navigate(destination)
	}

	const handleNavigation = () => {
		props.onPositionUpdate(0)
		const destinationIndex = mapOverviewPosition.findIndex((overviewSpot, index) => {
			return !props.completedSections.includes(index)
		})
		props.onOverviewUpdate(destinationIndex),
		props.navigation.navigate(mapOverviewPosition[destinationIndex].destination)
	}

	return (
		<ScrollView>
			<Text>Let's create a job post</Text>
			<Text>A great connection is important to finding a good fit. To help us find the best care for your loved one, we’ll ask a series of questions to understand your family’s needs.</Text>
			
			{mapOverviewPosition.map((overviewSpot, index) => (
				<ListItem
					key={index}
					title={overviewSpot.title}
					leftAvatar={
						<Avatar
							rounded
							title={`${overviewSpot.iconNumber}`}
							avatarStyle={overview.buttonIcon}
						/>
					}
					onPress={() => handleDirectNavigation(overviewSpot.destination, index)}
				/>
			))}

			<Button
				title={props.overviewPosition === 0 ? 'Get Started' : 'Continue'}
				onPress={handleNavigation}	
			/>
		</ScrollView>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Overview) 