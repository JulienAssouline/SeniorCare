import React from 'react'

import { Text, View } from 'react-native'

import BasicInformation from './BasicInformation'
import ServiceDetails from './ServiceDetails'
import SeniorDetails from './SeniorDetails'
import HouseDetails from './HouseDetails'
import CaregiverPreferences from './CaregiverPreferences'

export default SubmitJobAccordionBody = props => {
	switch (props.sectionName) {
		case 'Basic Information':
			return (
				<BasicInformation sectionData={props.sectionData} />
			)
		case 'Service Details':
			return (
				<ServiceDetails sectionData={props.sectionData} />
			)
		case 'Senior Details':
			return (
				<SeniorDetails sectionData={props.sectionData} />
			)
		case 'House Details':
			return (
				<HouseDetails sectionData={props.sectionData} />
			)
		case 'Caregiver Preference':
			return (
				<CaregiverPreferences sectionData={props.sectionData} />
			)
		default: 
			return (
				<View>
					<Text>Error</Text>
				</View>
			)
	}
}