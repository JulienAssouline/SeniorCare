import React, { useState } from 'react'

import { ScrollView } from 'react-native'

import { backgroundStyles } from '../../../Styles/GeneralStyles'

import PostJobTop from '../PostJobTop'
import SeniorDetailsBody from './SeniorDetailsBody'

export default CreateNewSeniorProfile = props => {
	const [formPosition, setFormPosition] = useState(0)

	return (
		<ScrollView style={backgroundStyles.background}>
			<PostJobTop
				title="Senior's Profile"
				currentPosition={formPosition}
				stepCount={8}
			/>

			<SeniorDetailsBody
				navigation={props.navigation}
				formPosition={formPosition}
				setFormPosition={setFormPosition}
			/>
		</ScrollView>
	)
}