import React from 'react'

import { Text, View} from 'react-native'

import { sectionContent } from '../../../Styles/PostJob/SubmitJobStyles'
import { jobPostStyles } from '../../../Styles/Caregiver/caregiverJobPostStyles' 

export default ServiceDetails = props => {
	console.log('props', props.sectionData)
	return (
		<View style={sectionContent.servicesContainer}>
			{Object.keys(props.sectionData).map((service, index) => (
				<View	key={index}>
					{props.sectionData[service] &&
						<View style={jobPostStyles.serviceBubble}>
							{console.log(service)}
							<Text style={jobPostStyles.serviceText}>
								{service}
							</Text>
						</View>
					}
				</View>
			))}
		</View>
	)
}