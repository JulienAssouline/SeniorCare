import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import styles from '../Styles/Messages/MessagesStyles'
import { useQuery, useMutation } from 'react-apollo-hooks'
import {GET_CAREGIVER_CONVO} from "../../graphql-queries/queries"
import { Avatar, Button } from 'react-native-elements'
import Icon from "react-native-vector-icons/Ionicons";
import { List, ListItem } from 'react-native-elements'



const MessagesScreen = (props) => {
  const conversation_id = props.navigation.getParam('conversation_id');
  return (
    <ScrollView>
      <View style = {styles.MainContainer}>
        <Text> {"Conversation ID:" + conversation_id} </Text>
      </View>
    </ScrollView>
  )
}

export default MessagesScreen
