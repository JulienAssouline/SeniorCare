import React, {useEffect} from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Button } from 'react-native-elements'
import styles from '../../Styles/JobDashboardScreen/JobDashboardScreenStyle'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'


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
      

      <TouchableOpacity>   
      <Button
        title='Archive'
        type='primary'
        style={styles.ExempleButton}
        onPress={() =>
          props.navigation.navigate("Archive")}
      />
      </TouchableOpacity>
 
    </ScrollView>
  )
}

export default JobBoardScreen

