import React from 'react'
import { Dimensions, ScrollView, Text, View } from 'react-native'
import styles from '../Styles/Messages/MessagesStyles'
import { useQuery, useMutation } from 'react-apollo-hooks'
import {GET_CAREGIVER_CONVO} from "../../graphql-queries/queries"
import { Avatar, Button } from 'react-native-elements'
import Icon from "react-native-vector-icons/Ionicons";
import { List, ListItem } from 'react-native-elements'
import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux'
import Loading from '../Loading/Loading'
const mapStateToProps = state => {
  return {
    user_id: state.user_id
  }
}

const ConversationScreen = (props) => {

  const {data, error, loading, refetch} = useQuery(GET_CAREGIVER_CONVO, {
    variables: { key_contact_id: props.user_id }
  })

   //Use this to access key_contact_id. It's a prop!
  //props.key_contact_id

  if (data.getCaregiverConvos === undefined) { return (<Loading/>)}

  function handlePress(conversation_id, user_id) {
     props.navigation.navigate("MessagesScreen", {
      conversation_id: conversation_id,
      user_id: user_id
     })
  }

  const height = Dimensions.get("window").height

  return (
    <ScrollView>
      <View style = {{flex: 1, backgroundColor: '#EEF5FB', height: height}}>

      {
        data.getCaregiverConvos.map((d,i) =>
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

export default connect(mapStateToProps)(ConversationScreen)
