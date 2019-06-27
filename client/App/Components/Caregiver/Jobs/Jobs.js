import { useQuery, useMutation } from 'react-apollo-hooks'
import { Dimensions, ScrollView, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import gql from "graphql-tag";
import styles from "../../Styles/searchStyles/searchStyles"
import { Avatar, Button } from 'react-native-elements'
import Loading from '../../Loading/Loading'
import { GET_BASIC_JOB_POSTING } from '../../../graphql-queries/queries'
import { connect } from 'react-redux'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const mapStateToProps = state => {
	return {
		key_contact_id: state.user_id
	}
}

const blueCurve = require('../../../Images/WelcomeScreen/blue-curve.png')
// const height = Dimensions.get("window").height

const Jobs = props => {
	const { data, error, loading } = useQuery(GET_BASIC_JOB_POSTING)

	const handleGoJobInformation = (id) => {
		props.navigation.navigate('CaregiverApplyToJob', { id: id })
	}

	return (
		<View style={{ flex: 1, backgroundColor: '#EEF5FB' }}>
			<Image
				source={blueCurve}
				style={{ height: hp(44), width: wp(100), position: 'absolute', bottom: 0, padding: 0, margin: 0, backgroundColor: 'transparent' }}
			/>
			<ScrollView>
				<View>
					{data.getJobPosts.map(jobPost => (
						<TouchableOpacity
							key={jobPost.id}
							onPress={() => handleGoJobInformation(jobPost.id)}
						>
							<JobPosting
								keyContact={jobPost.getKeyContact}
								dateCreated={jobPost.date_created}
								basicInformation={jobPost.getBasicInformation}
								serviceDetails={jobPost.getServiceDetails}
							/>
						</TouchableOpacity>
					))}
				</View>
			</ScrollView>
		</View>
	)
}

export default connect(mapStateToProps)(Jobs)