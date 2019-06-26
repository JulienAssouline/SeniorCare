import React, {useEffect} from 'react'

import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import { Avatar, Button, Card, ListItem } from 'react-native-elements'

import { useQuery } from 'react-apollo-hooks'
import { GET_BASIC_JOB_POSTING } from '../../../graphql-queries/queries'
import { connect } from 'react-redux'

import { backgroundStyles } from '../../Styles/GeneralStyles'
import checkCognitoSession from "../../utils/checkCognitoSession"

import JobPosting from '../JobPosting'

const mapStateToProps = state => {
  return {
    key_contact_id: state.user_id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onKeyContactIdUpdate: (value) => dispatch({ type: 'KEYCONTACTID', payload: value })
  }
}

const Find = props => {
	const { data, error, loading } = useQuery(GET_BASIC_JOB_POSTING)

	const handleGoJobInformation = (id) => {
		props.navigation.navigate('CaregiverApplyToJob', {id: id})
	}	
	
	useEffect(
	  () => {
	    checkCognitoSession(props)
	  },
	[])

	if (loading) return <View><Text>loading</Text></View>

	if (error) return <View><Text>Error</Text></View>

	return (
		<ScrollView style={backgroundStyles.background}>
			<Button
				title='go to keycontact stack'
				onPress={() => props.navigation.navigate('Overview')}
			/>
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
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Find)