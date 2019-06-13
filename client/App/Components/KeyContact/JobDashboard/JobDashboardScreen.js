import React from 'react'
import { ScrollView, Text, TouchableOpacity } from 'react-native'
import { Button } from '@ant-design/react-native';
import styles from '../../Styles/JobDashboardScreen/JobDashboardScreenStyle'

const JobDashboardScreen = props => {
	const handleGoToSeniorDetails = async () => {
		props.navigation.navigate('Overview')
	}

  return (
    <ScrollView style={styles.MainContainer}>
      <Text style={styles.ExempleText}>This is JobDashboardScreen!</Text>
			<Button
				type='primary'
				style={styles.ExempleButton}
				onPress={handleGoToSeniorDetails}
			>
				Go to: Post a Job
			</Button>

      <TouchableOpacity 
        onPress={() =>
        props.navigation.navigate("Archive")}
      >
        <Text>Archive</Text>
        </TouchableOpacity>

    </ScrollView>
  )
}

export default JobDashboardScreen


