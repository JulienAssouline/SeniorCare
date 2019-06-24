import { connect } from 'react-redux'
import React, { useState } from 'react'
import { basicInformationStyles } from '../../../Styles/PostJob/BasicInformationStyles'
import { ScrollView, Text } from 'react-native'
import ServicesNeededBody from './ServicesNeededBody'

const mapStateToProps = state => {
	const { formPosition } = state.postJob.position
	return {
		formPosition: formPosition,
	}
}

const ServiceDetails = (props) => {
  return (
    <ScrollView style={basicInformationStyles.mainContainer}>
      <PostJobTop
        title={'Service Details'}
        currentPosition={props.formPosition}
        stepCount={2}
      />
      <ServicesNeededBody
        formPosition={props.formPosition}
        navigation={props.navigation}
      />
    </ScrollView>
  )
}

export default connect(mapStateToProps, MapDispatchToProps)(ServiceDetails)