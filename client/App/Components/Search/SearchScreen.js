import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Button } from '@ant-design/react-native';
import { useQuery } from 'react-apollo-hooks';
import gql from "graphql-tag";


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

  const {data, error, loading} = useQuery(GET_CAREGIVERS)

  if (data.getCaregiver === undefined) { return (<Text> ...loading </Text>)}

  console.log(data.getCaregiver)

  return (
    <ScrollView>
      {
        data.getCaregiver.map((d,i) => (
          <View>
            <Text> {d.fullname} </Text>
            <Text> {d.location} </Text>
            <Text> {d.average_rating} </Text>
            <Text> {d.years_experience} </Text>
            <Text> {d.hourly_rate} </Text>
            <Text> {d.hourly_rate} </Text>
          </View>

          ))
      }
    </ScrollView>
  )
}

export default SearchScreen


