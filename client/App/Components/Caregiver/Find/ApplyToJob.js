import React from 'react'

import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements'

import { connect } from 'react-redux'
import { useQuery } from 'react-apollo-hooks'
import { GET_FULL_JOB_POSTING } from '../../../graphql-queries/queries'

import { mainOverviewStyles } from '../../Styles/Caregiver/caregiverJobPostStyles'

import JobPostDetails from '../../JobPostDetails/FromDatabase/JobPostDetails'

const mapStateToProps = state => {
	const { user_id } = state
	return {
		user_id: user_id,
	}
}

const ApplyToJobs = props => {
	const {data, loading, error } = useQuery(GET_FULL_JOB_POSTING, {
		variables: { id: props.navigation.state.params.id }
	})

	const handleApplyJob = () => {
		console.log('apply')
	}

	if (loading) return <View><Text>loading</Text></View>

	if (error) return <View><Text>error</Text></View>

	return (
		<View style={mainOverviewStyles.mainContainer}>
			<ScrollView>
				<JobPostDetails
					keyContact={data.getJobPost.getKeyContact}
					basicInformation={data.getJobPost.getBasicInformation}
					serviceDetails={data.getJobPost.getServiceDetails}
					seniorDetails={data.getJobPost.getSeniorDetails}
					houseDetails={data.getJobPost.getHouseDetails}
					caregiverPreferences={data.getJobPost.getCaregiverPreferences}
				/>
			</ScrollView>
			<View>
				<Button
					title='Apply'
					buttonStyle={mainOverviewStyles.applyButton}
					onPress={handleApplyJob}
				/>
			</View>
		</View>
	)
}

export default connect(mapStateToProps)(ApplyToJobs)