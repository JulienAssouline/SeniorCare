import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import styles from '../Styles/Messages/MessagesStyles'
import { useQuery, useMutation } from 'react-apollo-hooks'
import {ADD_MESSAGES} from "../../graphql-queries/mutation"
import {GET_MESSAGES} from "../../graphql-queries/queries"
import { Avatar } from 'react-native-elements'
import Icon from "react-native-vector-icons/Ionicons";
import MessageInput from "./MessageInput"
import FromUserMessage from "./fromUserMessage"
import ToUserMessage from "./ToUserMessage"

const MessagesScreen = (props) => {

  const conversation_id = +props.navigation.getParam('conversation_id');

  const {data: queryData, error, loading} = useQuery(GET_MESSAGES, {variables: { conversation_id } });


  const addMessages = useMutation(ADD_MESSAGES);

  if (queryData.getMessages === undefined) { return (<Text> ...loading </Text>)}

  const userAuthenticate = "1";

  return (
    <View style = {styles.MainContainer}>
    <ScrollView>
      <View style = {styles.MessagesContainer}>
        <View>
            {queryData.getMessages.map((d,i) =>
              d.from_user === userAuthenticate ? <FromUserMessage key = {i} d = {d} i = {i} /> : <ToUserMessage key = {i} d = {d} i = {i} />
              )
            }
         </View>
      </View>
      </ScrollView>
      <MessageInput addMessages = {addMessages} pageNumber = {conversation_id} />
      </View>
  )
}

export default MessagesScreen
