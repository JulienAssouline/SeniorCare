import React from 'react'
import { ScrollView, Text } from 'react-native'

import { connect } from 'react-redux'

import styles from '../../Styles/JobDashboardScreen/JobDashboardScreenStyle'
import PostJobTop from './PostJobTop'
import BasicInformationBody from './BasicInformationBody'

const mapStateToProps = state => {
	const { formPosition } = state.postJob.position
	return {
		formPosition: formPosition,
	}
}

const BasicInformation = props => {
	console.log('form position', props.formPosition)
	return (
		<ScrollView>
			<PostJobTop
				title={'Basic information'}
				currentPosition={props.formPosition}
			/>
			<BasicInformationBody
				formPosition={props.formPosition}
			/>
		</ScrollView>
	)
};

export default connect(mapStateToProps)(BasicInformation)