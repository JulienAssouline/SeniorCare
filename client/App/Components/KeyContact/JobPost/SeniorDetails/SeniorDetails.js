import React from 'react'
import { ScrollView, Text, View } from 'react-native'

import { Button } from 'react-native-elements'

import { chooseProfile } from '../../../Styles/PostJob/SeniorDetailsStyles'

export default SeniorDetails = props => {
	const handleCreateNewProfile = () => {
		props.navigation.navigate('CreateNewSeniorProfile')
	}

	return (
		<ScrollView>
			<View style={chooseProfile.mainContainer}>
				<View style={chooseProfile.titleContainer}>
					<Text style={chooseProfile.title}>Senior's Profile</Text>
				</View>
				<View style={chooseProfile.buttonContainer}>
					<Button
						type='outline'
						title='Create new profile'
						style={chooseProfile.button}
						containerStyle={chooseProfile.buttonOuter}
						titleStyle={chooseProfile.buttonText}
						onPress={handleCreateNewProfile}
					/>
					<Button
						type='outline'
						title='Use existing profile'
						style={chooseProfile.button}
						containerStyle={chooseProfile.buttonOuter}
						titleStyle={chooseProfile.buttonText}
					/>
				</View>
			</View>
		</ScrollView>
	)
}

