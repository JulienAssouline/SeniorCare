import React from 'react'
import { ScrollView, Text, View , Image} from 'react-native'
import { Button } from '@ant-design/react-native';
import { useQuery } from 'react-apollo-hooks';
import gql from "graphql-tag";
import styles from '../Styles/Profile/Account'
import Icons from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native-gesture-handler';


const GET_KEYCONTACT = gql`
  query getProfile($id: ID!){ 
    getKeyContactProfile(id: $id){
      phone_number
      email
    }
  }
`;

const Account = props => {
  let id = 1
  const {data, error, loading} = useQuery(GET_KEYCONTACT, {
    variables: {id}
  })
  if (data.getKeyContactProfile === undefined) { 
    return (<Text> Loading...</Text>)
  }
  
 const handleGoToLogout = () =>{
    alert(' You are successfully logged out! ')
  }
 
  return (
    <ScrollView style={styles.MainContainer}>
      <Text style={styles.Title}> Phone & Email</Text>
      <Text style={styles.phoneNumber}> {data.getKeyContactProfile.phone_number} </Text>
      <Text style={styles.email}> {data.getKeyContactProfile.email} </Text>
      
      <Text style={styles.Title}> Notifications</Text>
      <TouchableOpacity
          style={styles.accountButton}
        >
          <Text style={styles.phoneNumber}> Push Notifications </Text>
          <Icons name = {`bell`} style={styles.arrowIcon} /> 
      </TouchableOpacity>
      <Text style={styles.email}> Email / SMS </Text>

      <Text style={styles.Title}> Membership</Text>
      <TouchableOpacity
          style={styles.accountButton}
        >
          <Text style={styles.membership}> Upgrade your membership </Text>
          <Icons name = {`chevron-right`} style={styles.arrowIcon} /> 
      </TouchableOpacity>

      <Text style={styles.Title}> Legal</Text>
      <TouchableOpacity
          style={styles.accountButton}
        >
          <Text style={styles.legal}> Privacy Policy </Text>
          <Icons name = {`chevron-right`} style={styles.arrowIcon} /> 
      </TouchableOpacity>
      <TouchableOpacity
          style={styles.accountButton}
        >
          <Text style={styles.legal}> Terms of Service </Text>
          <Icons name = {`chevron-right`} style={styles.arrowIcon} /> 
      </TouchableOpacity>
      <TouchableOpacity
          style={styles.accountButton}
        >
          <Text style={styles.legal}> Cookies Policy </Text>
          <Icons name = {`chevron-right`} style={styles.arrowIcon} /> 
      </TouchableOpacity>

      <TouchableOpacity
          style={styles.ProfileButton}
          onPress={handleGoToLogout}
        >
          <Text style={styles.logout}> Log out</Text>
        </TouchableOpacity>
    </ScrollView>
  )
}

export default Account



