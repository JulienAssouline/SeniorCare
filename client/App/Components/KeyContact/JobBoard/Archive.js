import React from 'react'
import { Text, ScrollView, View } from 'react-native'

import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'
import styles from '../../Styles/JobDashboardScreen/ArchiveScreenStyles'


const ARCHIVED_JOBS = gql`
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

const ArchiveScreen = (props) => {

  const { data, error, loading } = useQuery(ARCHIVED_JOBS);
  console.log('hellllo', data.ArchivedJobs)
  if (loading) {
    return <Text>...Loading</Text>;
  };
  if (error) {
    return <Text>Error!</Text>
  }
  return (

    <ScrollView style={styles.MainContainer}>

      {data.ArchivedJobs.map(elem => {

        let datecreated = Date(elem.date_created)
        let startdate = Date(elem.start_date);
        let enddate = Date(elem.end_date);

        return (
          <ScrollView>
            <View>
              <Text key={elem.id}>{elem.title}</Text>
              <Text >{datecreated}</Text>
              <Text >{startdate}</Text>
              <Text >{enddate}</Text>
              <Text >{elem.address}</Text>
              <Text >{elem.city}</Text>
              <Text >{elem.province}</Text>
              <Text >{elem.availability}</Text>
              <Text >{elem.hourly_rate}</Text>
              <Text >{elem.gender_pref}</Text>
            </View>
          </ScrollView>

        )

      })}
    </ScrollView>
  )
}

export default ArchiveScreen