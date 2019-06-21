import React from 'react'

import { ScrollView, Text, View} from 'react-native'
import { Button } from 'react-native-elements'

import { useMutation } from 'react-apollo-hooks'
import { SUBMIT_JOB_POST } from '../../../../graphql-queries/mutation'
import { connect } from 'react-redux'

import { backgroundStyles } from '../../../Styles/GeneralStyles'

const mapStateToProps = state => {
	const { postJob } = state
	return {
		postJob: postJob
	}
}

const JobPostSubmit = props => {
	const submitJobPost = useMutation(SUBMIT_JOB_POST)

	const handleSubmitJob = async () => {
		try {
			console.log(props.postJob)
			const result = await submitJobPost({
				variables: {input: {
					key_contact_id: 'ThisIsSimonSternKeyContactSeed',
					basicInformation: {

					},
					seniorDetails: {
						...props.postJob.seniorDetails,
						fullname: props.postJob.seniorDetails.seniorName
					},
					houseDetails: {
						...props.postJob.houseDetails,
						cig_smoking: props.postJob.houseDetails.cigSmoking
					},
					caregiverPreferences: {
						...props.postJob.caregiverPreferences,
						gender_pref: props.postJob.caregiverPreferences.preferredGender,
						req_drivers_license: props.postJob.caregiverPreferences.validDriverLicense,
					},
				}}
			})
		} catch(err) {
			throw err
		}
	}

	return (
		<ScrollView style={backgroundStyles.background}>
			<View>
				<Text>Senior Details</Text>
				<View>

				</View>
			</View>
			<Button
				title='Post'
				onPress={handleSubmitJob}
			/>
		</ScrollView>
	)
}

export default connect(mapStateToProps)(JobPostSubmit)