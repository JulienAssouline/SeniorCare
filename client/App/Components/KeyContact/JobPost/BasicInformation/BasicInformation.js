import React, { useState } from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import PostJobTop from '../PostJobTop'
import BasicInformationBody from './BasicInformationBody'
import { basicInformationStyles } from '../../../Styles/PostJob/BasicInformationStyles'


const mapStateToProps = state => {
	const { formPosition } = state.postJob.position
	return {
		formPosition: formPosition,
	}
}

const BasicInformation = props => {
	console.log('props', props)
	return (
		<ScrollView style={basicInformationStyles.mainContainer}>
			<PostJobTop
				title={'Basic information'}
				currentPosition={props.formPosition}
			/>
			<BasicInformationBody
				formPosition={props.formPosition}
				navigation={props.navigation}
			/>
		</ScrollView>
	)
};

export default connect(mapStateToProps)(BasicInformation)