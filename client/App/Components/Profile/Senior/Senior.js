import React from 'react'
import { ScrollView, Text, View, Image } from 'react-native'
import { useQuery } from 'react-apollo-hooks';
import { ListItem } from 'react-native-elements'
import gql from "graphql-tag";
import styles from '../../Styles/Profile/Senior/Senior'
import Icons from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native-gesture-handler';
import calcAge from '../../utils/calcAge';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
  Container,
  Input,
  Card,
  CardItem
} from 'native-base'
import SeniorListItems from "./SeniorListItems"
const yellowCurve = require('../../../Images/WelcomeScreen/yellow-curve.png')

const Senior = props => {

const data = props.navigation.getParam('data');

  const seniorData = data.getSeniors

  const relation = seniorData.relation
  seniorData.forEach((d, i) => {
    calcAge(d)
  })

  const handleSeniorDetails = (data) => {
    props.navigation.navigate('SeniorDetails', { data:  data})
  }
  return (
    <ScrollView style={styles.MainContainer}>
      <Card style={{ zIndex: 100, position: 'relative', width: wp(90), marginLeft: wp(5) }}>
        {
          seniorData.map((d, i) => (
            <SeniorListItems handleSeniorDetails = {handleSeniorDetails} d = {d} key = {i} />
          ))
        }
        </Card>
        <Image
          source={yellowCurve}
          style={{ height: hp(44), width: wp(100), zIndex: 0, position: 'relative', padding: 0, margin: 0 }}
          />
      </ScrollView>
  )
}

export default Senior


