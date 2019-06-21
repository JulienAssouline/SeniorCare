import React from 'react'

import { ScrollView, Text, View} from 'react-native'

import { useMutation } from 'react-apollo-hooks'
import { connect } from 'react-redux'

import { backgroundStyles } from '../../../Styles/GeneralStyles'

const JobPostSubmit = () => {
	const submitJobPost = useMutation()

	return (
		<ScrollView style={backgroundStyles.background}>
		</ScrollView>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(JobPostSubmit)