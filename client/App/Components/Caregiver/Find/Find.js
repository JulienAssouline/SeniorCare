import React from 'react'

import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import { Avatar, Button, Card, ListItem } from 'react-native-elements'

import { useQuery } from 'react-apollo-hooks'
import { GET_JOB_POSTING } from '../../../graphql-queries/queries'

import { backgroundStyles } from '../../Styles/GeneralStyles'

import JobPosting from '../JobPosting'

export default Find = props => {
	const { data, error, loading } = useQuery(GET_JOB_POSTING)

	const handleGoJobInformation = () => {
		props.navigation.navigate('')
	}

	if (loading) return <View><Text>loading</Text></View>

	if (error) return <View><Text>Error</Text></View>

	return (
		<ScrollView style={backgroundStyles.background}>
			<View>
				{data.getJobPosts.map(jobPost => (
					<TouchableOpacity 
						key={jobPost.id} 
						onPress={handleGoJobInformation}
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
			<Button
				title='go to keycontact stack'
				onPress={() => props.navigation.navigate('Overview')}
			/>
		</ScrollView>
	)
}