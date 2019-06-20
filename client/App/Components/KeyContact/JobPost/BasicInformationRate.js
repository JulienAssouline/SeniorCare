
import { connect } from 'react-redux'
import React, {useState} from 'react'
import { Formik } from 'formik';
import { View, Text, TextInput } from 'react-native'
import { Button } from 'react-native-elements'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars'
import Slider from '@react-native-community/slider';


const mapStateToProps = state => {
  return {
    ...state,
    rate: state.rate
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRateUpdate: (value) => dispatch({type: 'RATE', payload: value})
  }
}

const BasicInformationRate = (props) => {

  const minimumRate = 14
  const maximumRate = 150

  return (
    <View>
					<Text>The hourly rate is</Text>
					<Text>*Minimum wage varies per province/territory in Canada</Text>
					<Text>${Math.round(props.rate)}</Text>
					<Slider
							minimumValue={minimumRate}
							maximumValue={maximumRate}
							minimumTrackTintColor="#000000"
							maximumTrackTintColor="#000000"
              onSlidingComplete={value => props.onRateUpdate(Math.round(value))}
					/>
					<Text>${Math.round(minimumRate)}</Text>
        </View>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicInformationRate)