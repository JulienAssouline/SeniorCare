import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import styles from '../../Styles/Messages/MessagesStyles'
import { useQuery, useMutation } from 'react-apollo-hooks'
import {GET_KEY_CONTACT_CONVO} from "../../../graphql-queries/queries"
import { Avatar, Button } from 'react-native-elements'
import Icon from "react-native-vector-icons/Ionicons";
import { List, ListItem } from 'react-native-elements'
import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux'

const mapStateToProps = state => {
  console.log("state", state)
  return {
    user_id: state.user_id
  }
}

const CaregiverConversationScreen = (props) => {

  const {data, error, loading, refetch} = useQuery(GET_KEY_CONTACT_CONVO, {
    variables: { caregiver_id: props.user_id }
  })

  if (data.getKeyContactConvos === undefined) { return (<Text> ...loading </Text>)}

  function handlePress(conversation_id, user_id) {
     props.navigation.navigate("MessagesScreen", {
      conversation_id: conversation_id,
      user_id: user_id
     })
  }

  return (
    <ScrollView>
      <View style = {styles.MainContainer}>

      {
        data.getKeyContactConvos.map((d,i) =>
          <View key = {i} style = {styles.conversationContainer}>
            <ListItem
              onPress = {() => handlePress(d.conversation_id, props.user_id)}
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

export default connect(mapStateToProps)(CaregiverConversationScreen)
