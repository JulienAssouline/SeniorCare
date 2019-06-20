import React from 'react'
import { ScrollView, Text, View } from 'react-native'

import { connect } from 'react-redux'

import { backgroundStyles } from '../../../Styles/GeneralStyles'

import PostJobTop from '../PostJobTop'
import CaregiverPreferenceBody from './CaregiverPreferenceBody'

const mapStateToProps = state => {
	const { formPosition } = state.postJob.position
	return {
		formPosition: formPosition,
	}
}

const CaregiverPreferences = props => {
	return (
		<ScrollView style={backgroundStyles.background}>
			<PostJobTop
				title='Caregiver Preference'
				currentPosition={props.formPosition}
				stepCount={2}
			/>

			<CaregiverPreferenceBody
				navigation={props.navigation}
				formPosition={props.formPosition}
			/>
		</ScrollView>
	)
}

export default connect(mapStateToProps)(CaregiverPreferences)