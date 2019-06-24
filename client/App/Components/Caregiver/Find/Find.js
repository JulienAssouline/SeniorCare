import React, {useEffect} from 'react'

import { ScrollView, Text, View } from 'react-native'
import { Avatar, Card, ListItem } from 'react-native-elements'

import { useQuery } from 'react-apollo-hooks'

import { backgroundStyles } from '../../Styles/GeneralStyles'
import checkCognitoSession from "../../utils/checkCognitoSession"
import { connect } from 'react-redux'


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

const Find = (props) => {
	// const
	useEffect(
	  // Effect function from second render
	  () => {
	    checkCognitoSession(props)
	  },
	  [])

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

export default connect(mapStateToProps, mapDispatchToProps)(Find)