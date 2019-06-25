import React, {useEffect, useState} from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Button, Card } from 'react-native-elements'
import styles from '../../Styles/JobDashboardScreen/JobDashboardScreenStyle'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'
import Loading from '../../Loading/Loading'

const ARCHIVED_JOBS = gql `
  query{
    ArchivedJobs{
      id
      title
      date_created
      start_date
      hourly_rate
      key_contact_id
    }
  }
`

const JobBoardJobs = (props) => {

  const [jobs, setJobs] = useState({});

  const { data, error, loading } = useQuery(ARCHIVED_JOBS);


  if(loading){
    return <Loading/>
  };
  if (error){
    return <Text>Error!</Text>
  }

  return(
    <ScrollView style={styles.MainContainer}>
    {data.ArchivedJobs.map(elem =>{
        {console.log('all my datess',elem)}

      let date = new Date(parseInt(elem.date_created));
      let options = {
        month: 'long', year: 'numeric', day: 'numeric',
        };
      let dateCreated = date.toLocaleDateString('en', options);

      let newDate = new Date(parseInt(elem.start_date));
      let startDate = newDate.toLocaleDateString('en',options)

return(
 
    <ScrollView>
      <View style={styles.CutCard}>
      <View>
        <Card containerStyle={styles.CutCard}>
        <View>
          <View>
            <Text style ={ styles.DateText}> Posted {dateCreated}</Text>
            <Text key = {elem.id} style={styles.JobText}> {elem.title}</Text> 
          </View>

          <View style={styles.JobInfo}>
            <Text style={{fontSize: 16}}> Starts {startDate}</Text>
            <Text style={{fontSize: 16}}> ${elem.hourly_rate}/hr</Text>  
          </View>
        </View>

        </Card>    
      </View> 

      <View>
        <Card containerStyle={styles.Applicants}>
        <Text>3</Text>
        <Text>{elem.id}</Text>
        <Text featuredTitle={styles.JobText}>Applicants</Text>
        </Card>        
      </View> 
      </View>

    </ScrollView>
    
)

})}
</ScrollView>
  )
}
    
export default JobBoardJobs


  