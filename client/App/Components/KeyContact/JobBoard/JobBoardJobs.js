import React, { useEffect, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Button, Card } from 'react-native-elements'
import styles from '../../Styles/JobDashboardScreen/JobDashboardScreenStyle'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'
import Loading from '../../Loading/Loading'
import {connect} from 'react-redux'
import checkCognitoSession from '../../utils/checkCognitoSession'

// const ARCHIVED_JOBS = gql`
//   query{
//     ArchivedJobs{
//       id
//       title
//     
//       key_contact_id
//     }
//   }
// `

const mapStateToProps =  state => {
  console.log("props inside state2 ", state)
  
  const user_id = state.user_id
  return{
    user_id: user_id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onKeyContactIdUpdate: (value) => dispatch({ type: 'KEYCONTACTID', payload: value })
  }
}

const KEY_CONTACT_JOBS = gql`
query getKeyContactJobPosts($key_contact_id:ID!) {
	getKeyContactJobPosts(key_contact_id: $key_contact_id) {
		id
    date_created
    applicants {
      id
      fullname
      email
      avatar
    }
  }
}
`

const JobBoardJobs = (props) => {

  console.log('here my props man', props)

  let user_id = props.user_id

  const { data, error, loading } = useQuery(KEY_CONTACT_JOBS, {
    variables : {key_contact_id: user_id}
  })

  console.log('here is my data',data)
  console.log('here is my loading',loading)
  console.log('here is my error',error)

  if(loading) return <Loading/>

  if(error) return <Loading/>
   
  
 

  return (
    
    <ScrollView style={styles.MainContainer}>

      {data.ArchivedJobs.map((elem, index) => {
        let date = new Date(parseInt(elem.date_created));
        let options = {
          month: 'long', year: 'numeric', day: 'numeric',
        };
        let dateCreated = date.toLocaleDateString('en', options);

        let newDate = new Date(parseInt(elem.start_date));
        let startDate = newDate.toLocaleDateString('en', options)

        return (

          <ScrollView key={index}>
            <View style={styles.CutCard}>
              <View>
                <Card containerStyle={styles.CutCard}>
                  <View>
                    <View>
                      <Text style={styles.DateText}> Posted {dateCreated}</Text>
                      <Text key={elem.id} style={styles.JobText}> {elem.description}</Text>
                    </View>

                    <View style={styles.JobInfo}>
                      <Text style={{ fontSize: 16 }}> Starts {startDate}</Text>
                      <Text style={{ fontSize: 16 }}> ${elem.hourly_rate}/hr</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(JobBoardJobs) 


