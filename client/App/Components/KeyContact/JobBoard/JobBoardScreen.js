import React from 'react'
import { ScrollView, Text, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements'
import styles from '../../Styles/JobDashboardScreen/JobDashboardScreenStyle'

const JobBoardScreen = props => {
  const handleGoToSeniorDetails = async () => {
    props.navigation.navigate('Overview')
  }

  return (
    <ScrollView style={styles.MainContainer}>
      <Text style={styles.ExempleText}>This is JobDashboardScreen!</Text>
      <Button
        title='Go to: Post a Job'
        type='primary'
        style={styles.ExempleButton}
        onPress={handleGoToSeniorDetails}
      />


      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate("Archive")}
      >
        <Text>Archive</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default JobBoardScreen


