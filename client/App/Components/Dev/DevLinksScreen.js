import React from 'react'
import { ScrollView, Text, Linking } from 'react-native'
import { Button } from '@ant-design/react-native';
// fix this
import styles from '../Styles/JobDashboardScreen/JobDashboardScreenStyle'

const DevLinksScreen = (props) => {
  console.log('show props ', props)
  return (
    <ScrollView style={styles.MainContainer}>
      <Text style={styles.ExempleText}>Welcome to DevLinks! We got you bro!</Text>
      <Button type="primary" style={styles.ExempleButton}
        onPress={() => {
          props.navigation.navigate('JobDashboardScreen')
        }}
      >
        Link 1</Button>
      <Button type="primary" style={styles.ExempleButton}
        onPress={() => {
          props.navigation.navigate('JobDashboardScreen')
        }}
      >
        Link 2</Button>
      <Button type="primary" style={styles.ExempleButton}
        onPress={() => {
          props.navigation.navigate('JobDashboardScreen')
        }}
      >
        Link 3</Button>
    </ScrollView>
  )
}

export default DevLinksScreen


