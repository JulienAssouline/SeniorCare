import React, {useState} from 'react'
import { TouchableOpacity, Dimensions, ScrollView, Text, View, Image, TextInput, DatePickerIOS, Switch} from 'react-native'
import { useMutation } from 'react-apollo-hooks';
import styles from '../../Styles/Profile/Edit'
import Icons from 'react-native-vector-icons/FontAwesome5'
import NumericInput from 'react-native-numeric-input'
import { Button, Card } from 'react-native-elements';
import {ADD_CARGIVER_DETAILS} from "../../../graphql-queries/mutation"
import { connect } from 'react-redux'

const mapStateToProps = state =>{
  const { user_id } = state.user_id
  return{
    user_id: state.user_id
  }
}

const EditCaregiver = (props) => {
let id = props.user_id

const date = new Date()

const [detailsObj, setDetailsObj] = useState({id: id, location: "", birthdate: date, gender: "", availability: "live out", hourly_rate: 14, years_experience: 0, description: "" })

const [availability, setAvailability] = useState(false)


function handleNumberChange(value) {
  setDetailsObj({ ...detailsObj, years_experience: Number(value) })

}

function handleHourlyRateChange(value) {
  setDetailsObj({ ...detailsObj, hourly_rate: Number(value) })
}

function handleAvailabilityChange(value) {
  if(value) {
    setAvailability(true)
    setDetailsObj({ ...detailsObj, availability: "live in" })
  } else {
    setAvailability(false)
    setDetailsObj({ ...detailsObj, availability: "live out" })
  }
}

function handleDateChange(newDate){
  setDetailsObj({...detailsObj, birthdate: newDate})
}

function handleNameChange(text) {
  setDetailsObj({ ...detailsObj, location: text })
}

function handleDescChange(text) {
  setDetailsObj({ ...detailsObj, description: text })
}

function handleGenderChange(text) {
  setDetailsObj({ ...detailsObj, gender: text })
}

  const addCargiver = useMutation(ADD_CARGIVER_DETAILS);

  function handleResultsPress() {
    addCargiver({variables: {input: detailsObj}})
  }

  const width = Dimensions.get("window").width
  const height = Dimensions.get("window").height


  return (
    <ScrollView style={styles.MainContainer}>
      <Card style={{ zIndex: 100, position: 'relative', width: width, marginLeft: 10 }}>

        <Text>Location</Text>
        <TextInput style={styles.input}
                  placeholder="Location"
                  onChangeText = {(text) => handleNameChange(text)}/>
        <Text> Birthdate </Text>
        <DatePickerIOS
                      date={detailsObj.birthdate}
                      mode={'date'}
                      onDateChange={newDate => handleDateChange(newDate)}
                    />
        <TextInput style={styles.input}
                  placeholder="gender"
                  onChangeText = {(text) => handleGenderChange(text)}/>
          <View style = {styles.numberInputsContainer}>
            <View>
              <Text> Years Experience </Text>
              <TextInput
                keyboardType = "numeric"
                style={styles.inputNumber}
                placeholder = {"2"}
                onChangeText = {(value) => handleNumberChange(value)}
              />
              </View>
              <View>
                <Text> hourly rate </Text>
                <TextInput
                  keyboardType = "numeric"
                  style={styles.inputNumber}
                  placeholder = {"14"}
                  onChangeText = {(value) => handleHourlyRateChange(value)}
                  />
              </View>
          </View>
          <View>
            <Text> Availability </Text>
            <View style = {styles.switchContainer}>
              <Switch
                onValueChange = {(value) => handleAvailabilityChange(value)}
                value = {availability}
                />
                <Text> {detailsObj.availability} </Text>
            </View>
          </View>
          <TextInput style={styles.input}
                    placeholder="Description..."
                    multiline = {true}
                    onChangeText = {(text) => handleDescChange(text)}/>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleResultsPress}
            >
              <Text style={styles.buttonText}> Submit</Text>
          </TouchableOpacity>
        </Card>
      </ScrollView>
  )
}

export default connect(mapStateToProps)(EditCaregiver)




