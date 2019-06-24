import React, { useState } from 'react'

import { ScrollView, Text, View} from 'react-native'
import { Avatar, Button, ListItem } from 'react-native-elements'

import { useMutation } from 'react-apollo-hooks'
import { SUBMIT_JOB_POST } from '../../../../graphql-queries/mutation'
import { connect } from 'react-redux'

import { submitJobOverview } from '../../../Styles/PostJob/SubmitJobStyles'

import SubmitJobAccordion from './SubmitJobAccordion'

const mapStateToProps = state => {
	const { postJob } = state
	return {
		postJob: postJob
	}
}

const initialActiveSections = {
	basicInformation: true,
	seniorDetails: true,
	houseDetails: true,
	caregiverPreferences: true,
}

const JobPostSubmit = props => {
	const submitJobPost = useMutation(SUBMIT_JOB_POST)
	const [activeSections, setActiveSections] = useState(initialActiveSections)

	const handleCollapsable = key => {
		setActiveSections(prevState => {
			return { ...prevState, [key]: !prevState[key]}
		})
	}

	const handleSubmitJob = async () => {
		try {
			console.log(props.postJob)
			const result = await submitJobPost({
				variables: {input: {
					key_contact_id: 'ThisIsSimonSternKeyContactSeed',
					basicInformation: {
						title: props.postJob.basicInformation.title,
						start_date: props.postJob.basicInformation.startDate,
						end_date: props.postJob.basicInformation.endDate,
						address: props.postJob.basicInformation.address,
						city: props.postJob.basicInformation.city,
						province: props.postJob.basicInformation.province,
						postal_code: props.postJob.basicInformation.postalCode,
						hourly_rate: props.postJob.basicInformation.rate,
					},
					seniorDetails: {
						fullname: props.postJob.seniorDetails.seniorName,
						gender: props.postJob.seniorDetails.gender,
						birthdate: props.postJob.seniorDetails.birthdate,
						relation: props.postJob.seniorDetails.relationship,
						bio: props.postJob.seniorDetails.bio,
						medical_condition: props.postJob.seniorDetails.medicalCondition,
						language: props.postJob.seniorDetails.language,
					},
					houseDetails: {
						cig_smoking: props.postJob.houseDetails.cigSmoking,
						pets: props.postJob.houseDetails.pets,
						cannabis: props.postJob.houseDetails.cannabis,
					},
					caregiverPreferences: {
						availability: props.postJob.caregiverPreferences.availability,
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
		<View style={submitJobOverview.mainContainer}>
			<ScrollView>
				<View>
					<ListItem
						title={'from key contact prop'}
						leftAvatar={
							<Avatar
								rounded
								size='small'
								title='key contact prop'
							/>
						}
					/>
					<Text style={submitJobOverview.jobTitle}>
						{props.postJob.basicInformation.title || 'job title'}
					</Text>
				</View>

				<SubmitJobAccordion
					sectionName='Basic Information'
					sectionData={props.postJob.basicInformation}
					collapsableState={activeSections['basicInformation']}
					handleCollapsable={() => handleCollapsable('basicInformation')}
				/>
				<SubmitJobAccordion
					sectionName='Senior Details'
					sectionData={props.postJob.seniorDetails}
					collapsableState={activeSections['seniorDetails']}
					handleCollapsable={() => handleCollapsable('seniorDetails')}
				/>
				<SubmitJobAccordion
					sectionName='House Details'
					sectionData={props.postJob.houseDetails}
					collapsableState={activeSections['houseDetails']}
					handleCollapsable={() => handleCollapsable('houseDetails')}
				/>
				<SubmitJobAccordion
					sectionName='Caregiver Preference'
					sectionData={props.postJob.caregiverPreferences}
					collapsableState={activeSections['caregiverPreferences']}
					handleCollapsable={() => handleCollapsable('caregiverPreferences')}
				/>
				
			</ScrollView>
			<View>
				<Button
					title='Post'
					buttonStyle={submitJobOverview.postButton}
					onPress={handleSubmitJob}
				/>
			</View>
		</View>
	)
}

export default connect(mapStateToProps)(JobPostSubmit)