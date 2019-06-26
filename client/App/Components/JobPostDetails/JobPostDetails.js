import React, { useState } from 'react'

import { ScrollView, Text, View} from 'react-native'
import { Avatar, Button, ListItem } from 'react-native-elements'

// import { useQuery, useMutation } from 'react-apollo-hooks'
// import { SUBMIT_JOB_POST } from '../../../../graphql-queries/mutation'
// import { GET_KEY_CONTACT } from '../../../../graphql-queries/queries'
// import { connect } from 'react-redux'

import { listItemStyles, submitJobOverview } from '../Styles/PostJob/SubmitJobStyles'

import SubmitJobAccordion from '../KeyContact/JobPost/JobPostSubmit/SubmitJobAccordion'

const initialActiveSections = {
	basicInformation: true,
	serviceDetails: true,
	seniorDetails: true,
	houseDetails: true,
	caregiverPreferences: true,
}


export default JobPostDetails = props => {
	const [activeSections, setActiveSections] = useState(initialActiveSections)

	const handleCollapsable = key => {
		setActiveSections(prevState => {
			return { ...prevState, [key]: !prevState[key]}
		})
	}

	return (
		<View>
			<ListItem
				title={props.keyContact && props.keyContact.fullname}
				titleStyle={listItemStyles.title}
				containerStyle={listItemStyles.container}
				leftAvatar={
					<Avatar
						rounded
						size='small'
						title={props.keyContact && props.keyContact.fullname}
					/>
				}
			/>

			<Text style={submitJobOverview.jobTitle}>
				{props.basicInformation.title || 'job title'}
			</Text>

			<SubmitJobAccordion
				sectionName='Basic Information'
				sectionData={props.basicInformation}
				collapsableState={activeSections['basicInformation']}
				handleCollapsable={() => handleCollapsable('basicInformation')}
			/>
			<SubmitJobAccordion
					sectionName='Service Details'
					sectionData={props.serviceDetails}
					collapsableState={activeSections['serviceDetails']}
					handleCollapsable={() => handleCollapsable['serviceDetails']}
				/>
			<SubmitJobAccordion
				sectionName='Senior Details'
				sectionData={props.seniorDetails}
				collapsableState={activeSections['seniorDetails']}
				handleCollapsable={() => handleCollapsable('seniorDetails')}
			/>
			<SubmitJobAccordion
				sectionName='House Details'
				sectionData={props.houseDetails}
				collapsableState={activeSections['houseDetails']}
				handleCollapsable={() => handleCollapsable('houseDetails')}
			/>
			<SubmitJobAccordion
				sectionName='Caregiver Preference'
				sectionData={props.caregiverPreferences}
				collapsableState={activeSections['caregiverPreferences']}
				handleCollapsable={() => handleCollapsable('caregiverPreferences')}
			/>
		</View>
	)
}