import React from 'react'
import { ScrollView, Text, View , Image} from 'react-native'
import { useQuery } from 'react-apollo-hooks';
import gql from "graphql-tag";
import styles from '../Styles/Profile/ProfileScreen'
import Icons from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native-gesture-handler';


const GET_KEYCONTACT = gql`
  query getProfile($id: ID!){ 
    getKeyContactProfile(id: $id){
      fullname
      avatar
    }
  }
`;

const ProfileScreen = props => {
  let id = 1
  const {data, error, loading} = useQuery(GET_KEYCONTACT, {
    variables: {id}
  })
  if (data.getKeyContactProfile === undefined) { 
    return (<Text> Loading...</Text>)
  }
   
  const handleGoToSeniors = () => {
    props.navigation.navigate('Seniors')
  }

 actionsheet_fix
  const handleGoToHelp = () => {
    props.navigation.navigate('Help')
  }

 master
  const handleGoToAccount = () =>{
    props.navigation.navigate('Account')
  }
  return (
    <ScrollView style={styles.MainContainer}>
        <View style={styles.Profile}>
          <Image style={styles.ProfileImage}
            style={{width:    200, height: 200, borderRadius: 100}}
            source={{uri: data.getKeyContactProfile.avatar}}
          />
          <Text style={styles.ProfileName}> {data.getKeyContactProfile.fullname} </Text>
        </View> 
        <TouchableOpacity
          style={styles.ProfileButton}
          onPress={handleGoToSeniors}
        >
          <Text style={styles.ProfileButtonText}> Seniors</Text>
          <Icons name = {`user`} style={styles.ProfileButtonIcon} /> 
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.ProfileButton}
          onPress = {handleGoToAccount}
          >
          <Text style={styles.ProfileButtonText}> Account</Text>
          <Icons name = {`cog`} style={styles.ProfileButtonIcon} /> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.ProfileButton}  onPress={handleGoToHelp}>
          <Text style={styles.ProfileButtonText}> Help</Text>
          <Icons name = {`question-circle`} style={styles.ProfileButtonIcon} /> 
        </TouchableOpacity>

    </ScrollView>
  )
}

export default ProfileScreen



