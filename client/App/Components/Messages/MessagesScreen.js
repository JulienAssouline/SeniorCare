import React from 'react'
import { ScrollView, Text } from 'react-native'
import { Button } from '@ant-design/react-native';
import styles from '../Styles/Messages/MessagesStyles'

const MessagesScreen = () => {
  return (
    <ScrollView style={styles.MainContainer}>
      <Text style={styles.ExempleText}>This is MessagesScreen!</Text>
      <Button type="primary" style={styles.ExempleButton}>I am cool</Button>
    </ScrollView>
  )
}

export default MessagesScreen
