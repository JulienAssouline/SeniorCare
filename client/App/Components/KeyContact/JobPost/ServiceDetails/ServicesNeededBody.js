import React, { useState } from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import PostJobTop from '../PostJobTop'
// import BasicInformationBody from './BasicInformationBody'
import { basicInformationStyles } from '../../../Styles/PostJob/BasicInformationStyles'




const ServicesNeededBody = props => {
  let body;

  if (props.formPosition === 0) {
      body = 
        <BasicInformationTitle navigation={props.navigation} />
  } else if (props.formPosition === 1) {
      body = 
        <BasicInformationCalendar navigation={props.navigation} />

  return (
      body
  )
};

export default connect(mapStateToProps)(ServicesNeededBody)