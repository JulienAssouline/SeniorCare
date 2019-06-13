import React from 'react'
import { ScrollView, Text } from 'react-native'
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
    </ScrollView>
  )
}

export default JobDashboardScreen


