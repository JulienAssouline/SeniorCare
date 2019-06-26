import { connect } from 'react-redux'
import React, { useState } from 'react'
import { basicInformationStyles } from '../../../Styles/PostJob/BasicInformationStyles'
import { ScrollView, Text, View, ShadowPropTypesIOS } from 'react-native'
import { general } from '../../../Styles/PostJob/PostJobGeneralStyles'
import { Button } from 'react-native-elements'
import PostJobBottomButtons from '../PostJobBottomButtons'
import { style } from '../../../Styles/PostJob/PostJobButtonsStyles'

const mapStateToProps = state => {
  const { formPosition } = state.postJob.position
  const { bathing, grooming, dressing, feeding, companionship, driving, appointments, mobility } = state.postJob.serviceDetails
  return {
    formPosition: formPosition,
    bathing: bathing,
    grooming: grooming,
    dressing: dressing,
    feeding: feeding,
    companionship: companionship,
    driving: driving,
    appointments: appointments,
    mobility: mobility,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onBathingUpdate: (value) => dispatch({
      type: 'BATHING', payload: value
    }),
    onGroomingUpdate: (value) =>  dispatch({
      type: 'GROOMING', payload: value
    }),
    onDressingUpdate: (value) =>  dispatch({
      type: 'DRESSING', payload: value
    }),
    onFeedingUpdate: (value) =>  dispatch({
      type: 'FEEDING', payload: value
    }),
    onCompanionshipUpdate: (value) =>  dispatch({
      type: 'COMPANIONSHIP', payload: value
    }),
    onDrivingUpdate: (value) =>  dispatch({
      type: 'DRIVING', payload: value
    }),
    onAppointmentsUpdate: (value) =>  dispatch({
      type: 'APPOINTMENTS', payload: value
    }),
    onMobilityUpdate: (value) =>  dispatch({
      type: 'MOBILITY', payload: value
    }),
  }
}

const ServicesNeeded = (props) => {
  return (
    <View>
      <View>
        <Text style={general.question}>
        Select the services you will need
        </Text>
        <View style={style.splitButtonContainer}>
          <Button
            buttonStyle={style.serviceButton}
            containerStyle={style.serviceButtonContainer}
            title='Bathing'
            type={props.bathing === true ? 'solid' : 'outline'}
            onPress={() => props.onBathingUpdate(!props.bathing)}
          />
          <Button
            buttonStyle={style.serviceButton}
            containerStyle={style.serviceButtonContainer}
            title='Grooming'
            type={props.grooming === true ? 'solid' : 'outline'}
            onPress={() => props.onGroomingUpdate(!props.grooming)}
          />
        </View>
      </View>
      <View style={style.splitButtonContainer}>
        <Button
          buttonStyle={style.serviceButton}
          containerStyle={style.serviceButtonContainer}
          title='Dressing'
          type={props.dressing === true ? 'solid' : 'outline'}
          onPress={() => props.onDressingUpdate(!props.dressing)}
        />
        <Button
          buttonStyle={style.serviceButton}
          containerStyle={style.serviceButtonContainer}
          title='Feeding'
          type={props.feeding === true ? 'solid' : 'outline'}
          onPress={() => props.onFeedingUpdate(!props.feeding)}
        />
      </View>
      <View style={style.splitButtonContainer}>
        <Button
          buttonStyle={style.serviceButton}
          containerStyle={style.serviceButtonContainer}
          title='Companionship'
          type={props.companionship === true ? 'solid' : 'outline'}
          onPress={() => props.onCompanionshipUpdate(!props.companionship)}
        />
        <Button
          buttonStyle={style.serviceButton}
          containerStyle={style.serviceButtonContainer}
          title='Driving'
          type={props.driving === true ? 'solid' : 'outline'}
          onPress={() => props.onDrivingUpdate(!props.driving)}
        />
      </View>
    <View style={style.splitButtonContainer}>
      <Button
        buttonStyle={style.serviceButton}
        containerStyle={style.serviceButtonContainer}
        title='Appointments'
        type={props.appointments === true ? 'solid' : 'outline'}
        onPress={() => props.onAppointmentsUpdate(!props.appointments)}
      />
      <Button
        buttonStyle={style.serviceButton}
        containerStyle={style.serviceButtonContainer}
        title='Mobility'
        type={props.mobility === true ? 'solid' : 'outline'}
        onPress={() => props.onMobilityUpdate(!props.mobility)}
      />
    </View>
    <View> 
      <PostJobBottomButtons
        navigation={props.navigation}
        storeReduxData={()=>null}
        storeReduxFunction={()=>null}
        handleSubmit={()=>null}
        errors={{}}
        touched={{}}
        lastPosition={1}
			/>
    </View>
  </View>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ServicesNeeded)