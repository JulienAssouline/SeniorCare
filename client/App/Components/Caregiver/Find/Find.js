import React from 'react'

import { ScrollView, Text, View } from 'react-native'
import { Avatar, Card, ListItem } from 'react-native-elements'

import { useQuery } from 'react-apollo-hooks'

import { backgroundStyles } from '../../Styles/GeneralStyles'

export default Find = () => {
	// const 

	return (
		<ScrollView styles={backgroundStyles.background}>
			<View>
				<Text>Caregiver Find</Text>
				<Card>
					<ListItem
						title='Amy'
						subtitle='post on whatever date'
						leftAvatar={
							<Avatar
								rounded
								title='Amy'
							/>
						}
					/>
					<Text>Caregiver for Mom</Text>
					<View>
						<Text>Distance from you</Text>
						<Text>Hourly Rate</Text>
					</View>
					<Text>Tags go here</Text>
				</Card>
			</View>
		</ScrollView>
	)
}