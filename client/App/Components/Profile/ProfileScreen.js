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
    key_contact_id: state.key_contact_id
  }
}

const GET_KEYCONTACT = gql`
  query getProfile($id: ID!){
    getKeyContactProfile(id: $id){
      fullname
      avatar
    }
  }
`;

const ProfileScreen = props => {
  let id = props.key_contact_id
  const { data, error, loading } = useQuery(GET_KEYCONTACT, {
    variables: { id }
  })
  if (data.getKeyContactProfile === undefined) {
    return (<Text> Loading...</Text>)
  }

  const handleGoToSeniors = () => {
    props.navigation.navigate('Seniors')
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

export default connect(mapStateToProps)(ProfileScreen)




