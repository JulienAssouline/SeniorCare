import { connect } from 'react-redux'
import React, { useState } from 'react'
import { basicInformationStyles } from '../../../Styles/PostJob/BasicInformationStyles'
import { ScrollView, Text } from 'react-native'
import ServicesNeededBody from './ServicesNeededBody'
import { Formik } from 'formik'
import PostJobTop from '../PostJobTop'

const mapStateToProps = state => {
	// const { formPosition } = state.postJob.position
	return {
		// formPosition: formPosition,
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
      {/* <PostJobBottomButtons
        navigation={props.navigation}
        storeReduxData={values}
        storeReduxFunction={props.onAddressUpdate}
        handleSubmit={handleSubmit}
        errors={errors}
        touched={touched}
        lastPosition={3}
      /> */}
    </ScrollView>
  )
}

export default connect(mapStateToProps)(ServiceDetails)