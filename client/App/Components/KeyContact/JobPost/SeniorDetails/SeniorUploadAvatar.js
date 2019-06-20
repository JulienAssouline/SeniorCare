import React from 'react'

import { Text, View } from 'react-native'
import { Input } from 'react-native-elements'

import { connect } from 'react-redux'

import { createSeniorProfile } from '../../../Styles/PostJob/SeniorDetailsStyles'

import PostJobBottomButtons from '../PostJobBottomButtons'

const mapStateToProps = state => {
	const { seniorName } = state.postJob.seniorDetails
	return {
		seniorName: seniorName
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSeniorNameUpdate: (value) => dispatch({
			type: 'SENIORNAME',
			payload: value
		})
	}
}

const SeniorUploadAvatar = props => {
	// placeholder handleSubmit so code doesn't break until we do uploads
	const handleSubmit = () => {
		console.log('upload avatar')
	}

	return (
		<View style={createSeniorProfile.mainContainer}>
			<Text style={createSeniorProfile.question}>
				{/* Please add a picture of {values.seniorName}. */}
				Please add a picture of {props.seniorName}.
			</Text>
			<Text>
				Adding a picture helps complete your profile and increases your chances to be viewed.
			</Text>
			<PostJobBottomButtons
				navigation={props.navigation}
				storeReduxData={props.seniorName}
				storeReduxFunction={props.onSeniorNameUpdate}
				handleSubmit={handleSubmit}
				errors={{}}
				touched={{yes: 'yes'}}
				lastPosition={7}
			/>
		</View>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(SeniorUploadAvatar)