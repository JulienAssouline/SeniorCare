import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import styles from '../Styles/Messages/MessagesStyles'
import { useQuery, useMutation } from 'react-apollo-hooks'
import {GET_CAREGIVER_CONVO} from "../../graphql-queries/queries"
import { Avatar, Button } from 'react-native-elements'
import Icon from "react-native-vector-icons/Ionicons";
import { List, ListItem } from 'react-native-elements'



const ConversationScreen = (props) => {
  const {data, error, loading} = useQuery(GET_CAREGIVER_CONVO)

  if (data.getCaregiverConvos === undefined) { return (<Text> ...loading </Text>)}

  function handlePress(id) {
     props.navigation.navigate("MessagesScreen", {
      conversation_id: id
     })
  }

  return (
    <ScrollView>
      <View style = {styles.MainContainer}>
      {
        data.getCaregiverConvos.map((d,i) =>
          <View key = {i} style = {styles.conversationContainer}>
            <ListItem
              onPress = {() => handlePress(d.conversation_id)}
              leftAvatar
              title={<Text> {d.fullname}</Text>}
              rightIcon={{ name: 'chevron-right' }}
            />
          </View>

          )
      }
      </View>
    </ScrollView>
  )
}

export default ConversationScreen
