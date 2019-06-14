import React from 'react'
import { ScrollView, Text, View, Image } from 'react-native'
import { Button } from '@ant-design/react-native';
import { useQuery } from 'react-apollo-hooks';
import gql from "graphql-tag";
import styles from '../../Styles/Profile/Senior/Senior'
import Icons from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native-gesture-handler';


const GET_SENIOR = gql`
  query profileVar($id: ID!){
    getKeyContactProfile(id: $id) {
      id
      getSeniors {
        fullname
        relation
        birthdate
        avatar
      }
    }
  }
`;

const Senior = () => {

  const {data, error, loading} = useQuery(GET_SENIOR, {
    variables: {id: 2}
  })
  
  if (data.getKeyContactProfile === undefined) { return (<Text> ...loading </Text>)}
  
  const seniorData = data.getKeyContactProfile.getSeniors

  return (
    <ScrollView style={styles.MainContainer}>
      {
        seniorData.map((d,i) => (
          <TouchableOpacity key = {i} style={styles.Senior}>
            <Image style={styles.SeniorImage}
              style={{width:    50, height: 50, borderRadius: 25}}
              source={{uri: d.avatar}}
            />
              <Text style={styles.SeniorName}> {d.fullname} </Text>
              <Text style={styles.SeniorButtonText}> {d.relation} </Text>
              {/* <Text> {d.birthdate} </Text> */}
              <Icons name = {`chevron-right`} style={styles.SeniorButtonIcon} /> 

          </TouchableOpacity>

        ))
      }
      <TouchableOpacity style={styles.SeniorContainer}>
        <Icons name = {`plus-circle`} style={styles.SeniorPlusIcon} /> 
        <Text style={styles.SeniorName}>Create a new senior profile</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default Senior


