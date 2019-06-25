import React from 'react'
import { ScrollView, Text, View, Image } from 'react-native'
import { useQuery } from 'react-apollo-hooks';
import gql from "graphql-tag";
import styles from '../Styles/Profile/ProfileScreen'
import Icons from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    user_id: state.user_id
  }
}

const GET_KEYCONTACT = gql`
  query getProfile($id: ID!){
    getKeyContactProfile(id: $id){
      fullname
      avatar
      phone_number
      email
      getSeniors {
        id
        fullname
        relation
        birthdate
        avatar
      }
    }
  }
`;

const ProfileScreen = props => {
  let id = props.user_id
  const { data, error, loading } = useQuery(GET_KEYCONTACT, {
    variables: { id }
  })
  if (data.getKeyContactProfile === undefined) {
    return (<Text> Loading...</Text>)
  }

  const handleGoToSeniors = () => {
    props.navigation.navigate('Seniors', {
      data: data.getKeyContactProfile
    })
  }


  const handleGoToHelp = () => {
    props.navigation.navigate('Help')
  }


  const handleGoToAccount = (id) => {
    props.navigation.navigate('Account', {
      user_id: id,
      data: data.getKeyContactProfile
    })
  }
  return (
    <ScrollView style={styles.MainContainer}>
      <View style={styles.Profile}>
        <Image style={styles.ProfileImage}
          style={{ width: 200, height: 200, borderRadius: 100 }}
          source={{ uri: data.getKeyContactProfile.avatar }}
        />
        <Text style={styles.ProfileName}> {data.getKeyContactProfile.fullname} </Text>
      </View>
      <TouchableOpacity
        style={styles.ProfileButton}
        onPress={handleGoToSeniors}
      >
        <Text style={styles.ProfileButtonText}> Seniors</Text>
        <Icons name={`user`} style={styles.ProfileButtonIcon} />
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.ProfileButton}
        onPress={() => handleGoToAccount(id)}
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

export default connect(mapStateToProps)(ProfileScreen)




