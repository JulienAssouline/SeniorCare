import React from 'react'
import { ScrollView, Text, View , Image} from 'react-native'
import { useQuery } from 'react-apollo-hooks';
import gql from "graphql-tag";
import styles from '../../Components/Styles/Caregiver/Caregiver'
import Ratings from '../Search/Ratings'
import { Button } from 'react-native-elements'
import calcAge from '../../Components/utils/calcAge'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { connect } from 'react-redux'

const mapStateToProps = state =>{
  const { user_id } = state.user_id
  return{
    user_id: user_id
  }
}

const GET_CAREGIVERDETAILS = gql`
  query getCaregiverDetails($id: ID!){ 
    getCaregiverDetails(id: $id){
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
      description
    }
  }
`;

const CaregiverDetails = props => {
  let id = props.user_id
  const {data, error, loading} = useQuery(GET_CAREGIVERDETAILS, {
    variables: {id}
  })
  if (data.getCaregiverDetails === undefined) { 
    return (<Text> Loading...</Text>)
  }
  let d = data.getCaregiverDetails
 const handleInviteToJobPost = () =>{
   alert("Welcome to job page!")
 }
  calcAge(d)
  return (
    <ScrollView style={styles.MainContainer}>
      <View style = {styles.infoContainer}>
        <Text style = {styles.title}> {d.fullname} </Text>
        <View style = {styles.ratingLocationContainer}>
          <Ratings data = {d.average_rating} />
          <Text style = {styles.ratingText}> {d.average_rating} </Text>
          <Text style = {styles.locationText}> | </Text>
          <Text style = {styles.locationText}> {d.location} </Text>
        </View>
        <View style = {styles.experienceRateContainer}>
        <View style={styles.iconCover}>
          <Icon style={{fontSize: 12,  color: "#3F7DFB"}} name="user" />
          <Text style = {styles.backgroundInfoText}> {`${d.Age} years old`} </Text>
        </View>
          <View style={styles.iconCover}>
            <Icon style={{fontSize: 12,  color: "#3F7DFB"}} name="briefcase" />
            <Text style = {styles.backgroundInfoText}> {`${d.years_experience} years experience`} </Text>
          </View>
          <View style={styles.iconCover}>
            <Icon style={{fontSize: 12,  color: "#3F7DFB"}} name="clock" />
            <Text style = {styles.backgroundInfoText}> {`From $${d.hourly_rate / 100}/hour`} </Text>
          </View>
        </View>
      </View>
      <Text style = {styles.aboutMe}> About me</Text>
      <Text style = {styles.text}> {d.description} </Text>
      <Button
         buttonStyle = {{
          backgroundColor: "#244397",
          borderWidth: 1,
          borderColor: '#244397',
          height: 50,
          margin: 10,
          padding: 5,
        }}
        title="Invite to job post"
        onPress={handleInviteToJobPost}
      />
    </ScrollView>
  )
}

export default connect( mapStateToProps )(CaregiverDetails)



