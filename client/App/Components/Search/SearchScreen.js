import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Button } from '@ant-design/react-native';
import { useQuery } from 'react-apollo-hooks';
import gql from "graphql-tag";
import styles from "../Styles/searchStyles/searchStyles"
import StarRating from 'react-native-star-rating';
import Ratings from "./Ratings"
import calcAge from "../utils/calcAge"
import { Avatar } from 'react-native-elements';

const GET_CAREGIVERS = gql`
   {
    getCaregiver{
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

const SearchScreen = () => {

  const [starCount, setStarCount] = useState(0)

  const {data, error, loading} = useQuery(GET_CAREGIVERS)

  if (data.getCaregiver === undefined) { return (<Text> ...loading </Text>)}

  data.getCaregiver.forEach((d,i) => {
    calcAge(d)
  })

  function onStarRatingPress(rating) {
    setStarCount(rating)
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
              <Text style = {styles.backgroundInfoText}> {`${d.Age} years old`} </Text>
            </View>
          </View>
          ))
      }
    </View>
    </ScrollView>
  )
}

export default SearchScreen

