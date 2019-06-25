import React from 'react'
import { ScrollView, Text, View, Image } from 'react-native'
import { useQuery } from 'react-apollo-hooks';
import { ListItem } from 'react-native-elements'
import gql from "graphql-tag";
import styles from '../../Styles/Profile/Senior/Senior'
import Icons from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native-gesture-handler';
import calcAge from '../../utils/calcAge';

const Senior = props => {

const data = props.navigation.getParam('data');

  const seniorData = data.getSeniors
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
            id={d.id}
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


