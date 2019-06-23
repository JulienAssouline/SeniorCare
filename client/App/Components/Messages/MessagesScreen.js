import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import styles from '../Styles/Messages/MessagesStyles'
import { useQuery, useMutation, useSubscription } from 'react-apollo-hooks'
import {ADD_MESSAGES} from "../../graphql-queries/mutation"
import {GET_MESSAGES} from "../../graphql-queries/queries"
import {MESSAGE_SUBSCRIPTION} from "../../graphql-queries/subscriptions"
import { Avatar } from 'react-native-elements'
import Icon from "react-native-vector-icons/Ionicons";
import MessageInput from "./MessageInput"
import FromUserMessage from "./fromUserMessage"
import ToUserMessage from "./ToUserMessage"

const MessagesScreen = (props) => {

  const conversation_id = +props.navigation.getParam('conversation_id');
  const key_contact_id = props.navigation.getParam('key_contact_id');

  const {data: queryData, error, loading} = useQuery(GET_MESSAGES, {variables: { conversation_id } });

  console.log("hello")

  useSubscription(MESSAGE_SUBSCRIPTION, {
    variables: {
      conversation_id: key_contact_id
    },
    onSubscriptionData: ({client, onSubscriptionData}) => {
      console.log("subscriptions, test1")

      const newFeedItem = onSubscriptionData.data.messageAdded

      console.log(client)

      const data = client.readQuery({query: GET_MESSAGES, variables: {key_contact_id}})

      console.log(data)

      client.writeQuery({
        query: GET_MESSAGES,
        variables: {key_contact_id},
        data: {
          getMessages: [...data.getMessages, newFeedItem]
        }
      })
    }
  })

  const addMessages = useMutation(ADD_MESSAGES);

  if (queryData.getMessages === undefined) { return (<Text> ...loading </Text>)}

  return (
    <View style = {styles.MainContainer}>
    <ScrollView>
      <View style = {styles.MessagesContainer}>
        <View>
            {queryData.getMessages.map((d,i) =>
              d.from_user === key_contact_id ? <FromUserMessage key = {i} d = {d} i = {i} /> : <ToUserMessage key = {i} d = {d} i = {i} />
              )
            }
         </View>
      </View>
      </ScrollView>
      <MessageInput key_contact_id = {key_contact_id}  addMessages = {addMessages} pageNumber = {conversation_id} />
      </View>
  )
}

export default MessagesScreen
