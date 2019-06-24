import React from 'react'

import { ScrollView, Text, View } from 'react-native'

import { backgroundStyles } from '../../Styles/GeneralStyles'

export default Messages = () => {

	return (
		<ScrollView styles={backgroundStyles.background}>
			<Text>Messages</Text>
		</ScrollView>
	)
}