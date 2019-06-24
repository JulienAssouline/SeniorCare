import React from 'react'

import { ScrollView, Text, View } from 'react-native'

import { backgroundStyles } from '../../Styles/GeneralStyles'

export default Profile = () => {

	return (
		<ScrollView styles={backgroundStyles.background}>
			<Text>Profile</Text>
		</ScrollView>
	)
}