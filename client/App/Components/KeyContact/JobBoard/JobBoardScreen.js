import React, {useEffect, useState} from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Button } from 'react-native-elements'
import styles from '../../Styles/JobDashboardScreen/JobDashboardScreenStyle'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'
import JobBoardJobs from './JobBoardJobs'


const JobBoardScreen = (props) => {
  
  const handleGoToSeniorDetails = async () => {
    props.navigation.navigate('Overview')
  }

  return (
    <ScrollView style={styles.MainContainer}>

      <Text style={styles.ExempleText}>This is JobDashboardScreen!</Text>
      <Button
        title='Go to: Post a Job'
        type='solid'
        style={styles.ExempleButton}
        onPress={handleGoToSeniorDetails}
      />

			<Button
				title='go to caregiver stack'
				onPress={() => props.navigation.navigate('CaregiverApp')}
			/>
      

      <TouchableOpacity>   
      <Button
        title='Archive'
        style={styles.ExempleButton}
        onPress={() =>
          props.navigation.navigate("Archive")}
      />
      </TouchableOpacity>
 
    </ScrollView>
  )
}

export default JobBoardScreen


