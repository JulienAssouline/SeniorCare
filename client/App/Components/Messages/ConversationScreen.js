import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import styles from '../Styles/Messages/MessagesStyles'
import { useQuery, useMutation } from 'react-apollo-hooks'
import {GET_CAREGIVER_CONVO} from "../../graphql-queries/queries"
import { Avatar, Button } from 'react-native-elements'
import Icon from "react-native-vector-icons/Ionicons";
import { List, ListItem } from 'react-native-elements'
import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    key_contact_id: state.key_contact_id
  }
}

const ConversationScreen = (props) => {

  const {data, error, loading, refetch} = useQuery(GET_CAREGIVER_CONVO, {
    variables: { key_contact_id: props.key_contact_id }
  })

   //Use this to access key_contact_id. It's a prop!
  //props.key_contact_id

  if (data.getCaregiverConvos === undefined) { return (<Text> ...loading </Text>)}

  function handlePress(conversation_id, key_contact_id) {
     props.navigation.navigate("MessagesScreen", {
      conversation_id: conversation_id,
      key_contact_id: key_contact_id
     })
  }

  return (
    <ScrollView>
      <View style = {styles.MainContainer}>

      {
        data.getCaregiverConvos.map((d,i) =>
          <View key = {i} style = {styles.conversationContainer}>
            <ListItem
              onPress = {() => handlePress(d.conversation_id, props.key_contact_id)}
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

export default connect(mapStateToProps)(ConversationScreen)
