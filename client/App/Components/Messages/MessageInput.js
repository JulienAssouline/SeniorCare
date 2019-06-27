import React, { useState } from 'react'
import { Dimensions, ScrollView, Text, View, TextInput, TouchableOpacity } from 'react-native'
import styles from '../Styles/Messages/MessagesStyles'
import { useQuery, useMutation } from 'react-apollo-hooks'
import { GET_CAREGIVER_CONVO } from "../../graphql-queries/queries"
import { Avatar, Button } from 'react-native-elements'
import Icon from "react-native-vector-icons/FontAwesome";
import { List, ListItem } from 'react-native-elements'


const MessageInput = (props) => {
  const [value, setValue] = useState("")
  const [submit, setSubmit] = useState("")
  const [containerHeight, setContainerHeight] = useState(null)

  function handleChange(text) {
    setValue(text)
  }

  function handleClick(addMessages, user_id) {
    setSubmit(value)
    setValue("")
    addMessages({ variables: { content: value, conversation_id: props.pageNumber, from_user: user_id } })
  }

  let width = Dimensions.get("window").width


  return (
		<View style={styles.InputContainer} onLayout={(event) => {
       if (!containerHeight) {
          setContainerHeight(event.nativeEvent.layout.height)
       }
      }}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-between", width: width, paddingHorizontal: 16, backgroundColor: "white", borderColor: "white", borderWidth: 0 }}>
        <TextInput
          style={{ textAlignVertical: 'right', borderRadius: 25, marginTop: 10, marginBottom: 10, paddingTop: 10, paddingRight: 10, paddingBottom: 10, borderColor: "#E8E8E8", borderWidth: 1, backgroundColor: "#E8E8E8", width: width - 70, fontSize: 16 }}
          placeholder="Send Message"
          className={"input-base"}
          onChangeText={(text) => handleChange(text)}
          value={value}
          multiline={true}
        ></TextInput>
        <TouchableOpacity onPress={() => handleClick(props.addMessages, props.user_id)}>
          <Icon
            name="send-o"
            color="#3F7DFB"
            size={20}
            style={{ margin: 10, marginRight: 20, marginBottom: containerHeight/3, marginTop: "auto",}}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MessageInput


