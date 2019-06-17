import React from 'react'
import { ScrollView, Text } from 'react-native'
import { Button } from 'react-native-elements'
import styles from '../Styles/Messages/MessagesStyles'

const MessagesScreen = () => {
  return (
    <ScrollView style={styles.MainContainer}>
      <Text style={styles.ExempleText}>This is MessagesScreen!</Text>
      <Button title='I am cool' style={styles.ExempleButton} />
    </ScrollView>
  )
}

export default MessagesScreen
