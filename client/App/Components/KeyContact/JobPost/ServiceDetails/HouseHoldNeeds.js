import { connect } from 'react-redux'
import React, { useState } from 'react'
import { basicInformationStyles } from '../../../Styles/PostJob/BasicInformationStyles'
import { ScrollView, Text } from 'react-native'
import { general } from '../../../Styles/PostJob/PostJobGeneralStyles'
import { Button } from 'react-native-elements'

const HouseHoldNeeds = (props) => {

  const { setFieldValue, values } = props

  return (
    <View>
      <View>
        <Text style={general.question}>
        Cannabis?
        </Text>
        <Button
          title='Bathing'
          type={values.bathing === true ? 'solid' : 'outline'}
          onPress={() => setFieldValue('bathing', true)}
        />
        <Button
          title='Grooming'
          type={values.grooming === true ? 'solid' : 'outline'}
          onPress={() => setFieldValue('grooming', false)}
        />
      </View>
      <View>
        <Text style={general.question}>
        Cannabis?
        </Text>
        <Button
          title='Dressing'
          type={values.dressing === true ? 'solid' : 'outline'}
          onPress={() => setFieldValue('dressing', false)}
        />
        <Button
          title='Feeding'
          type={values.feeding === true ? 'solid' : 'outline'}
          onPress={() => setFieldValue('feeding', false)}
        />
      </View>
      <View>
        <Text style={general.question}>
        Cannabis?
        </Text>
        <Button
          title='Companionship'
          type={values.companionship === true ? 'solid' : 'outline'}
          onPress={() => setFieldValue('companionship', false)}
        />
        <Button
          title='Driving'
          type={values.driving === true ? 'solid' : 'outline'}
          onPress={() => setFieldValue('driving', false)}
        />
      </View>
      <View>
        <Text style={general.question}>
        Cannabis?
        </Text>
        <Button
          title='Appointments'
          type={values.appointments === true ? 'solid' : 'outline'}
          onPress={() => setFieldValue('appointments', false)}
        />
        <Button
          title='Mobility'
          type={values.mobility === true ? 'solid' : 'outline'}
          onPress={() => setFieldValue('mobility', false)}
        />
      </View>
    </View>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(HouseHoldNeeds)