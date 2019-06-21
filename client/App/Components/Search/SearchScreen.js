
import { Dimensions, ScrollView, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useQuery, useMutation } from 'react-apollo-hooks'
import gql from "graphql-tag";
import styles from "../Styles/searchStyles/searchStyles"
import Ratings from "./Ratings"
import calcAge from "../utils/calcAge"
import { Avatar, Button } from 'react-native-elements'
import MessageButton from "./MessageButton"
import {ADD_CONVERSATION_MUTATION} from "../../graphql-queries/mutation"
import {GET_CAREGIVER_CONVO} from "../../graphql-queries/queries"
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    key_contact_id: state.key_contact_id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onKeyContactIdUpdate: (value) => dispatch({type: 'KEYCONTACTID', payload: value})
  }
}

// AWS Amplify modular import
import Auth from '@aws-amplify/auth'

const GET_CAREGIVERS = gql`
   query GetCaregiver($input: FilterInput!) {
    getCaregiver(input: $input){
      id
      fullname
      location
      years_experience
      num_hired
      birthdate
      hourly_rate
      gender
      availability
      average_rating
    }
  }
`;

const SearchScreen = (props) => {

  //Use this to access key_contact_id. It's a prop!
  //props.key_contact_id

  let [userId, setUserID] = useState('')

  useEffect(
    // Effect function from second render
    () => {
      checkCognitoSession(props)
    },
    [])

  async function checkCognitoSession(props) {
    await Auth.currentSession()
      .then(data => {
        props.onKeyContactIdUpdate(data.accessToken.payload.username)
      })
      .catch(err => console.log(err))
    // await checkSignedInUserId(
    //   (userId, props) => {
    //     if (userId == null) {
    //       signOut = async props => {
    //         await Auth.signOut()
    //           .then(() => {
    //             console.log('Sign out complete')
    //             props.navigation.navigate('Authloading')
    //           })
    //           .catch(err => console.log('Error while signing out!', err))
    //       }
    //     }
    //   }
    // )
  }

  let filterObj = {};

  if (props.navigation.getParam('filterObj') !== undefined) {
    filterObj = props.navigation.getParam('filterObj');
  }

  const [starCount, setStarCount] = useState(0)

  const {data, error, loading} = useQuery(GET_CAREGIVERS, {variables: { input: filterObj }})

  const addConversation = useMutation(ADD_CONVERSATION_MUTATION);

  if (data.getCaregiver === undefined) { return (<Text> ...loading </Text>)}

  if (data.getCaregiver.length === 0) { return (<Text> No Results Found </Text>)}

  data.getCaregiver.forEach((d,i) => {
    calcAge(d)
  })


  function onStarRatingPress(rating) {
    setStarCount(rating)
  }

  function handlePress(caregiver_id, key_contact_id) {
    addConversation({
      variables:  {caregiver_id: caregiver_id, key_contact_id: key_contact_id},
      refetchQueries: [{query: GET_CAREGIVER_CONVO, variables: {key_contact_id: key_contact_id}}]
    })
    props.navigation.navigate("Messages")
  }

  const screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }

  const handleGoToCaregiverDetails = () =>{
    props.navigation.navigate('Caregiver')
  }
  return (
    <ScrollView>
    <View style = {styles.MainContainer}>
      {
        data.getCaregiver.map((d,i) => (
          <TouchableOpacity
              style={styles.ProfileButton}
              onPress={handleGoToCaregiverDetails}
            >
          <View style = {styles.searchContainer} key = {i}>
            <Avatar
              icon={{name: 'user', type: 'font-awesome'}}
              size="large"
              containerStyle={{ height: "100%"}}
            />
            <View style = {styles.infoContainer}>
              <Text style = {styles.fullName}> {d.fullname} </Text>
              <View style = {styles.ratingLocationContainer}>
                <Ratings data = {d.average_rating} />
                <Text style = {styles.ratingText}> {d.average_rating} </Text>
                <Text style = {styles.locationText}> | </Text>
                <Text style = {styles.locationText}> {d.location} </Text>
              </View>
              <View style = {styles.experienceRateContainer}>
                <Text style = {styles.backgroundInfoText}> {`${d.years_experience} years experience`} </Text>
                <Text style = {styles.backgroundInfoText}> {`From $${d.hourly_rate / 100}/hour`} </Text>
              </View>
              <MessageButton key_contact_id = {props.key_contact_id} caregiver_id = {d.id} handlePress = {handlePress} />
            </View>
          </View>
        </TouchableOpacity>
          ))
      }
    </View>
    </ScrollView>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen)


