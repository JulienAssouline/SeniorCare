
import { connect } from 'react-redux'
import React, {useState} from 'react'
import { Formik } from 'formik';
import { View, Text, TextInput } from 'react-native'
import { Button } from 'react-native-elements'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars'
import Slider from '@react-native-community/slider'

import PostJobBottomButtons from './PostJobBottomButtons'


const mapStateToProps = state => {
	const { rate } = state.postJob.basicInformation
  return {
    rate: rate
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRateUpdate: (value) => dispatch({type: 'RATE', payload: value})
  }
}

const BasicInformationRate = (props) => {

	console.log('props inside rate', props)

  const minimumRate = 14
  const maximumRate = 150

  return (
    <View>
			<Text>The hourly rate is</Text>
			<Text>*Minimum wage varies per province/territory in Canada</Text>
			<Text>${Math.round(props.rate)}</Text>
			<Slider
				// style={{width: 200, height: 40}}
				minimumValue={minimumRate}
				maximumValue={maximumRate}
				minimumTrackTintColor="#000000"
				maximumTrackTintColor="#000000"
				// onSlidingComplete={value => submitRateValue(value)}
				onSlidingComplete={value => props.onRateUpdate(value)}
			/>
			<Text>Redux state: {props.rate}</Text>
			<Text>${Math.round(minimumRate)}</Text>
			<PostJobBottomButtons
				navigation={props.navigation}
				storeReduxData={props.rate}
				storeReduxFunction={props.onRateUpdate}
				handleSubmit={() => (null)}
				errors={{}}
				touched={{fake: 'fake'}}
				lastPosition={3}
			/>
		</View>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicInformationRate)