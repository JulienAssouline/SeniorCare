import React, { useState, useEffect } from 'react'
import { ScrollView, Text, View, Alert } from 'react-native'
import { useQuery } from 'react-apollo-hooks';
import gql from "graphql-tag";
import styles from "../Styles/findStyles/findStyles"
import Ratings from "./Ratings"
import calcAge from "../utils/calcAge"
import { Avatar } from 'react-native-elements'

// AWS Amplify modular import
import Auth from '@aws-amplify/auth'

// import Functions from util
import checkCognitoSession from '../utils/checkCognitoSession'

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

const FindScreen = props => {


  let [userId, setUserID] = useState('')

  useEffect(
    // Effect function from second render
    () => {
      checkCognitoSession()
    },
    [])

  async function checkCognitoSession(props) {

    await Auth.currentSession()
      .then(data => {
        setUserID(data.accessToken.payload.username)
      })
      .catch(err => console.log(err))
    await checkSignedInUserId(
      (userId, props) => {
        if (userId == null) {
          signOut = async props => {
            await Auth.signOut()
              .then(() => {
                console.log('Sign out complete')
                props.navigation.navigate('Authloading')
              })
              .catch(err => console.log('Error while signing out!', err))
          }
        }
      }
    )
  }


  console.log('this is the signedIn userId if you need it for your mutations and queries: ', userId)


  const [starCount, setStarCount] = useState(0)

  const { data, error, loading } = useQuery(GET_CAREGIVERS)

  if (data.getCaregiver === undefined) { return (<Text> ...loading </Text>) }

  if (data.getCaregiver.length === 0) { return (<Text> No Results Found </Text>) }

  data.getCaregiver.forEach((d, i) => {
    calcAge(d)
  })

  function onStarRatingPress(rating) {
    setStarCount(rating)
  }

  return (
    <ScrollView>
      <View style={styles.MainContainer}>
        {
          data.getCaregiver.map((d, i) => (
            <View style={style.findContainer} key={i}>
              <Avatar
                icon={{ name: 'user', type: 'font-awesome' }}
                size="large"
                containerStyle={{ height: "100%" }}
              />
              <View style={styles.infoContainer}>
                <Text style={styles.fullName}> {d.fullname} </Text>
                <View style={styles.ratingLocationContainer}>
                  <Ratings data={d.average_rating} />
                  <Text style={styles.ratingText}> {d.average_rating} </Text>
                  <Text style={styles.locationText}> | </Text>
                  <Text style={styles.locationText}> {d.location} </Text>
                </View>
                <View style={styles.experienceRateContainer}>
                  <Text style={styles.backgroundInfoText}> {`${d.years_experience} years experience`} </Text>
                  <Text style={styles.backgroundInfoText}> {`From $${d.hourly_rate / 100}/hour`} </Text>
                </View>
                <Text style={styles.backgroundInfoText}> {`${d.Age} years old`} </Text>
              </View>
            </View>
          ))
        }
      </View>
    </ScrollView>
  )
}

export default FindScreen


