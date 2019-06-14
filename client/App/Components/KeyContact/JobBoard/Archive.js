import React from 'react'
import { Text, ScrollView, View } from 'react-native'
import { Card } from 'react-native-elements';

import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'
import styles from '../../Styles/JobDashboardScreen/ArchiveScreenStyles'
import { Button } from '@ant-design/react-native';


const ARCHIVED_JOBS = gql `
  query{
    ArchivedJobs(id: 1){
      id
      title
      date_created
      start_date
      end_date
      address
      city
      province
      availability
      hourly_rate
      gender_pref
    }
  }
`

const ArchiveScreen = (props) =>{

  const { data, error, loading } = useQuery(ARCHIVED_JOBS);
console.log('hellllo',data.ArchivedJobs)
  if(loading){
    return <Text>...Loading</Text>;
  };
  if (error){
    return <Text>Error!</Text>
  }
  return (

    <ScrollView style={styles.MainContainer}>

      {data.ArchivedJobs.map(elem =>{



        let date = new Date(parseInt(elem.date_created));
        let options = {
          month: 'long', year: 'numeric', day: 'numeric',
          };
        let dateCreated = date.toLocaleDateString('en', options);

        let newDate = new Date(parseInt(elem.start_date));
        let startDate = newDate.toLocaleDateString('en',options)
 

  return(
    <ScrollView>

    <Text style={styles.AppText}>Receiving Applicants (num)</Text>
<View style={styles.MainView}>
      <Card >
        <View>
          <Text style={styles.DateText}> Posted {dateCreated}</Text>
          <Text key = {elem.id} style={styles.JobText}> {elem.title}</Text>
        </View>
        
        <View style={styles.JobInfo}>
          <Text style={{fontSize: 16}}> Starts {startDate}</Text>
          <Text style={{fontSize: 16}}> ${elem.hourly_rate}/hr</Text>  
        </View>
       
      </Card>

      <Card>
      <Button style={styles.Button}>
        <Text style={styles.Archived}>0</Text>
        <Text>Applicants</Text>
        </Button>
      </Card>

</View>
    </ScrollView>
    
  )

})}
</ScrollView>
  )
}

export default ArchiveScreen