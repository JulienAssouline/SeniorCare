import React from 'react'
import { ScrollView, Text, View, Image } from 'react-native'
import { useQuery } from 'react-apollo-hooks';
import { ListItem } from 'react-native-elements'
import gql from "graphql-tag";
import styles from '../../Styles/Profile/Senior/Senior'
import Icons from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native-gesture-handler';
import calcAge from '../../utils/calcAge';

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

const Senior = props => {

  const { data, error, loading } = useQuery(GET_SENIOR, {
    variables: { id: "ThisIsSimonSternKeyContactSeed" }
  })

  if (data.getKeyContactProfile === undefined) { return (<Text> ...loading </Text>) }
  // calcAge(data.getKeyContactProfile)

  const seniorData = data.getKeyContactProfile.getSeniors
  const relation = seniorData.relation
  seniorData.forEach((d, i) => {
    calcAge(d)
  })

  const handleSeniorDetails = () => {
    props.navigation.navigate('SeniorDetails', { title: 'Test' })
  }
  return (
    <ScrollView style={styles.MainContainer}>
      {
        seniorData.map((d, i) => (
          <TouchableOpacity key={i} style={styles.Senior}
            onPress={handleSeniorDetails}
          >
            <ListItem
              key={i}
              leftAvatar={{ source: { uri: d.avatar } }}
              title={<Text style={styles.SeniorName}> {d.fullname}, {d.Age} </Text>}
              subtitle={
                <Text style={styles.Relation}>{d.relation} </Text>
              }
              rightIcon={{ name: 'chevron-right' }}
            />
          </TouchableOpacity>
        ))
      }
      <TouchableOpacity style={styles.SeniorContainer}>
        <Icons name={`plus-circle`} style={styles.SeniorPlusIcon} />
        <Text style={styles.SeniorName}>Create a new senior profile</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default Senior


