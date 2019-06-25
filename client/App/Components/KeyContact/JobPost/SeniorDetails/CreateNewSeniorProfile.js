import React from 'react'

import { View } from 'react-native'

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
		<View style={{...backgroundStyles.background, flex: 1,}}>
			<PostJobTop
				title="Senior's Profile"
				currentPosition={props.formPosition}
				stepCount={8}
			/>

			<SeniorDetailsBody
				navigation={props.navigation}
				formPosition={props.formPosition}
			/>
		</View>
	)
}

export default connect(mapStateToProps)(CreateNewSeniorProfile)