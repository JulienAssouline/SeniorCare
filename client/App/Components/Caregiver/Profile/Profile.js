import React from 'react'
import { ScrollView, Text, View, Image, } from 'react-native'
import { useQuery } from 'react-apollo-hooks';
import gql from "graphql-tag";
import styles from '../../Styles/Caregiver/CaregiverProfile'
import Icons from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux'

const mapStateToProps = state =>{
  const { user_id } = state.user_id
  return{
    user_id: user_id
  }
}
const GET_CAREGIVERPROFILE = gql`
  query getCaregiverProfile($id: ID!){ 
    getCaregiverProfile(id: $id){
      id
      fullname
      avatar
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

const Profile = props => {
  let id = props.user_id
  const { data, error, loading } = useQuery(GET_CAREGIVERPROFILE, {
    variables: { id }
  })
  if (data.getCaregiverProfile === undefined) {
    return (<Text> Loading...</Text>)
  }
  const handleGoToJob = () => {
    props.navigation.navigate('JobDashboard')
  }


  const handleGoToHelp = () => {
    props.navigation.navigate('Help')
  }


  const handleGoToAccount = () => {
    props.navigation.navigate('Account')
  }
 
  return (
    <ScrollView style={styles.MainContainer}>
      <View style={styles.Profile}>
        <Image style={styles.ProfileImage}
          style={{ width: 200, height: 200, borderRadius: 100, alignContent: 'center' }}
          source={{ uri: data.getCaregiverProfile.avatar }}
        />
        <Text style={styles.ProfileName}> {data.getCaregiverProfile.fullname} </Text>
      </View>
      <TouchableOpacity
        style={styles.ProfileButton}
        onPress={handleGoToJob}
      >
        <Text style={styles.ProfileButtonText}> Jobs</Text>
        <Icons name={`briefcase`} style={styles.ProfileButtonIcon} />
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.ProfileButton}
        onPress={handleGoToAccount}
      >
        <Text style={styles.ProfileButtonText}> Account</Text>
        <Icons name={`cog`} style={styles.ProfileButtonIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.ProfileButton}>
        <Text style={styles.ProfileButtonText}> Help Center</Text>
        <Icons name={`question-circle`} style={styles.ProfileButtonIcon} />
      </TouchableOpacity>

    </ScrollView>
  )
}

export default connect( mapStateToProps)(Profile)




