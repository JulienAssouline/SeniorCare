import React from 'react'

import { ScrollView } from 'react-native'

import { connect } from 'react-redux'

import { backgroundStyles } from '../../../Styles/GeneralStyles'

import PostJobTop from '../PostJobTop'
import SeniorDetailsBody from './SeniorDetailsBody'

const mapStateToProps = state => {
	const { formPosition } = state.postJob.position
	return {
		formPosition: formPosition,
	}
}

const CreateNewSeniorProfile = props => {
	return (
		<ScrollView style={backgroundStyles.background}>
			<PostJobTop
				title="Senior's Profile"
				currentPosition={props.formPosition}
				stepCount={8}
			/>

			<SeniorDetailsBody
				navigation={props.navigation}
				formPosition={props.formPosition}
			/>
		</ScrollView>
	)
}

export default connect(mapStateToProps)(CreateNewSeniorProfile)