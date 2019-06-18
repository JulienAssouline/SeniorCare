import React, {useEffect} from 'react'
import { Text, ScrollView, View, ActionSheetIOS } from 'react-native'
import { Button, Card } from 'react-native-elements';

import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'
import styles from '../../Styles/JobDashboardScreen/ArchiveScreenStyles'

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

  useEffect(() => {
    props.navigation.setParams({
        headerTitle: 'words',
        headerRight: (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#fff"
          />
        )
    })
}, [])


  const { data, error, loading } = useQuery(ARCHIVED_JOBS);

onclick = () => {
  ActionSheetIOS.showActionSheetWithOptions(
    {
      options: ['Cancel', 'Delete Job', 'Duplicate and Repost Job'],
      destructiveButtonIndex: 1,
      cancelButtonIndex: 0,
    },
    (buttonIndex) => {
      if (buttonIndex === 1) {
        useQuery()
      }
    },
  ); 
}
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
      <View >
        <View>
          <Text style={styles.DateText}> Posted {dateCreated}</Text>
          <Text onPress={ () => onclick()}>...</Text>
          <Text key = {elem.id} style={styles.JobText}> {elem.title}</Text> 
        
        </View>
        
        <View style={styles.JobInfo}>
          <Text style={{fontSize: 16}}> Starts {startDate}</Text>
          <Text style={{fontSize: 16}}> ${elem.hourly_rate}/hr</Text>  
        </View>
       
      </View>
{/* 
      <Card>
				<Button
					style={styles.Button}
					title={'Applicants'}
					titleStyle={styles.Archived}
				/>
      </Card> */}

</View>
    </ScrollView>
    
  )

})}
</ScrollView>
  )
}
ArchiveScreen.navigationOptions ={
  title:'Home'
}


export default ArchiveScreen