import React, { useState } from 'react'
import { Dimension, ScrollView, Text, View, KeyboardAvoidingView, ImageBackground } from 'react-native'
import styles from '../Styles/Messages/MessagesStyles'
import { useQuery, useMutation, useSubscription } from 'react-apollo-hooks'
import { ADD_MESSAGES } from "../../graphql-queries/mutation"
import { GET_MESSAGES } from "../../graphql-queries/queries"
import { MESSAGE_SUBSCRIPTION } from "../../graphql-queries/subscriptions"
import { Avatar } from 'react-native-elements'
import Icon from "react-native-vector-icons/Ionicons";
import MessageInput from "./MessageInput"
import FromUserMessage from "./fromUserMessage"
import ToUserMessage from "./ToUserMessage"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Loading from '../Loading/Loading'


const MessagesScreen = (props) => {

  const [scrollView, setScrollView] = useState("")

  const conversation_id = +props.navigation.getParam('conversation_id');
  const user_id = props.navigation.getParam('user_id');

  const { data: queryData, error, loading } = useQuery(GET_MESSAGES, { variables: { conversation_id } });

  useSubscription(MESSAGE_SUBSCRIPTION, {
    variables: {
      conversation_id: conversation_id
    },
    onSubscriptionData: ({ client, subscriptionData }) => {

      const newFeedItem = subscriptionData.data.messageAdded

      const data = client.readQuery({ query: GET_MESSAGES, variables: { conversation_id } })

      client.writeQuery({
        query: GET_MESSAGES,
        variables: { conversation_id },
        data: {
          getMessages: [...data.getMessages, newFeedItem]
        }
      })
    }
  })

  const addMessages = useMutation(ADD_MESSAGES);


  let height = Dimensions.get("window").height
  if (queryData.getMessages === undefined) { return <Loading /> }

  return (
    <KeyboardAvoidingView style={styles.MainContainer}>
      <ImageBackground source={require('../../Images/messages-background.png')} style={{ flex: 1, width: '100%', height: '100%' }}>
        <ScrollView
          // TODO: fix extra scroll height issue
          ref={ref => setScrollView(ref)}
          onContentSizeChange={(contentWidth, contentHeight) => {
            scrollView.scrollToEnd({ animated: false });
          }}
        >
          <View style={styles.MessagesContainer}>
            <View>
              {queryData.getMessages.map((d, i) =>
                d.from_user === user_id ? <FromUserMessage key={i} d={d} i={i} /> : <ToUserMessage key={i} d={d} i={i} />
              )
              }
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
      <MessageInput style={styles.InputContainer} user_id={user_id} addMessages={addMessages} pageNumber={conversation_id} />
    </KeyboardAvoidingView>
  )
}

export default MessagesScreen
