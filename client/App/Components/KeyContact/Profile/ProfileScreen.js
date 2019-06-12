import React from 'react'
import { ScrollView, Text } from 'react-native'
import { Button } from '@ant-design/react-native';
import styles from '../../Styles/Profile/ProfileStyle'

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.MainContainer}>
      <Text style={styles.ExempleText}>This is ProfileScreen!</Text>
      <Button type="primary" style={styles.ExempleButton}>Hello</Button>
    </ScrollView>
  )
}

export default ProfileScreen


