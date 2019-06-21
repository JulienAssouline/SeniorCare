import React from 'react'
import { ScrollView, Text, View , Image} from 'react-native'
import { Button } from '@ant-design/react-native';
import { useQuery } from 'react-apollo-hooks';
import gql from "graphql-tag";
import styles from '../Styles/Profile/Account'
import Icons from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native-gesture-handler';


const GET_CAREGIVERDETAILS = gql`
  query getCaregiverDetails($id: ID!){ 
    getCaregiverDetails(id: $id){
      fullname
      avatar
    }
  }
`;

const CaregiverDetails = props => {
  let id = 1
  const {data, error, loading} = useQuery(GET_CAREGIVERDETAILS, {
    variables: {id}
  })
  if (data.getKeyContactProfile === undefined) { 
    return (<Text> Loading...</Text>)
  }
  
 
  return (
    <ScrollView style={styles.MainContainer}>
      

      
    </ScrollView>
  )
}

export default CaregiverDetails



