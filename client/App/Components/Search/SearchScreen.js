import React, { useState, useEffect } from 'react'
import { Dimensions, ScrollView, Text, View } from 'react-native'
import { useQuery, useMutation } from 'react-apollo-hooks'
import gql from "graphql-tag";
import styles from "../Styles/searchStyles/searchStyles"
import Ratings from "./Ratings"
import calcAge from "../utils/calcAge"
import { Avatar, Button } from 'react-native-elements'
import MessageButton from "./MessageButton"
import {ADD_CONVERSATION_MUTATION} from "../../graphql-queries/mutation"
<<<<<<< HEAD
import Loading from '../Loading/Loading'
=======
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
>>>>>>> 777e09f3fb35920bfeab9b3c6a21ccd890eb24e1

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
        // setUserID(data.accessToken.payload.username)
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

  if (data.getCaregiver === undefined) { return (<Loading/>)}

  if (data.getCaregiver.length === 0) { return (<Text> No Results Found </Text>)}

  data.getCaregiver.forEach((d,i) => {
    calcAge(d)
  })


  function onStarRatingPress(rating) {
    setStarCount(rating)
  }

  function handlePress(caregiver_id) {
    console.log(caregiver_id)
    addConversation({variables: {caregiver_id: caregiver_id}})
    props.navigation.navigate("Messages")
  }

  const screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }

  return (
    <ScrollView>
    <View style = {styles.MainContainer}>
      {
        data.getCaregiver.map((d,i) => (
          <View style = {styles.searchContainer} key = {i}>
            <Avatar
              icon={{name: 'user', type: 'font-awesome'}}
              size="large"
              containerStyle={{ height: "100%"}}
            />
            <View style = {styles.infoContainer}>
              <Text style = {styles.fullName}> THIS IS IT {props.key_contact_id} </Text>
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
              <MessageButton caregiver_id = {d.id} handlePress = {handlePress} />
            </View>
          </View>
          ))
      }
    </View>
    </ScrollView>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen)


