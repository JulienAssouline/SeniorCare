import { connect } from 'react-redux'
import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { general } from '../../../Styles/PostJob/PostJobGeneralStyles'
import { Button } from 'react-native-elements'
import PostJobBottomButtons from '../PostJobBottomButtons'
import { style } from '../../../Styles/PostJob/PostJobButtonsStyles'

const mapStateToProps = state => {
  const { formPosition } = state.postJob.position
  const { errands, mealPrep, housekeeping, laundry, shopping } = state.postJob.serviceDetails
  return {
    formPosition: formPosition,
    errands: errands,
    mealPrep: mealPrep,
    housekeeping: housekeeping,
    laundry: laundry,
    shopping: shopping
  }
 }
 
 const mapDispatchToProps = dispatch => {
   return {
      onErrandsUpdate: (value) => dispatch({
        type: 'ERRANDS', payload: value
      }),
      onMealPrepUpdate: (value) => dispatch({
        type: 'MEALPREP', payload: value
      }),
      onHouseKeepingUpdate: (value) => dispatch({
        type: 'HOUSEKEEPING', payload: value
      }),
      onLaundryUpdate: (value) => dispatch({
        type: 'LAUNDRY', payload: value
      }),
      onShoppingUpdate: (value) => dispatch({
        type: 'SHOPPING', payload: value
      }),
   }
 }

const HouseHoldNeeds = (props) => {

  const { setFieldValue, values } = props

  return (
    <View>
      <View>
        <Text style={general.question}>
        Select all the household needs
        </Text>
        <View style={style.splitButtonContainer}>
          <Button
            buttonStyle={style.serviceButton}
            containerStyle={style.serviceButtonContainer}
            title='Errands'
            type={props.errands === true ? 'solid' : 'outline'}
            onPress={() => props.onErrandsUpdate(!props.errands)}
          />
          <Button
            buttonStyle={style.serviceButton}
            containerStyle={style.serviceButtonContainer}
            title='Meal Prep'
            type={props.mealPrep === true ? 'solid' : 'outline'}
            onPress={() => props.onMealPrepUpdate(!props.mealPrep)}
          />
        </View>
      </View>
      <View style={style.splitButtonContainer}>
        <Button
           buttonStyle={style.serviceButton}
           containerStyle={style.serviceButtonContainer}
          title='Housekeeping'
          type={props.housekeeping === true ? 'solid' : 'outline'}
          onPress={() => props.onHouseKeepingUpdate(!props.housekeeping)}
        />
        <Button
           buttonStyle={style.serviceButton}
           containerStyle={style.serviceButtonContainer}
          title='Laundry'
          type={props.laundry === true ? 'solid' : 'outline'}
          onPress={() => props.onLaundryUpdate(!props.laundry)}
        />
      </View>
      <View style={style.splitButtonContainer}>
        <Button
           buttonStyle={style.serviceButton}
           containerStyle={style.serviceButtonContainer}
          title='Shopping'
          type={props.shopping === true ? 'solid' : 'outline'}
          onPress={() => props.onShoppingUpdate(!props.shopping)}
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
          lastPosition={2}
        />
      </View>
    </View>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(HouseHoldNeeds)