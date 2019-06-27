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
query getKeyContactJobPosts($id:ID!) {
	getKeyContactJobPosts(id: $id) {
    id
    key_contact_id
    date_created
    title
    start_date
    hourly_rate
    applicants {
      id
      email
      phone_number
      fullname
      avatar
      date_created
      caregiver_id
    }
  }
}
`

const JobBoardJobs = (props) => {

  let user_id = props.user_id

  const { data, error, loading } = useQuery(KEY_CONTACT_JOBS, {
    variables: {id: user_id}
  })
console.log('here is my data',data)
  if(loading) return <Loading/>

  if(error) {

    return <Loading/>
  }
  
  return (

    <ScrollView style={styles.MainContainer}>

      {data.getKeyContactJobPosts.map((elem, index) => {

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
                <View style = {styles.Card}>
                    <View>
                      <Text style={styles.DateText}> Posted {dateCreated}</Text>
                      <Text key={elem.id} style={styles.JobText}> {elem.title}</Text>
                    </View>

                    <View style={styles.JobInfo}>
                      <Text>{elem.fullname}</Text>
                      <Text style={{ fontSize: 14 }}> Starts {startDate}</Text>
                      <Text style={{ fontSize: 14 }}> ${elem.hourly_rate}/hr</Text>
                    </View>
              </View>

              <View >
                <View style={styles.Applicants}>
                  <Text style={{color:'white', fontSize:45,paddingTop:20}}>{elem.applicants.length}</Text>
                  <Text style={styles.JobText2}>Applicants</Text>
                </View>
              </View>
            </View>

          </ScrollView>

        )

      })}
    </ScrollView>
  )

}

export default connect(mapStateToProps, mapDispatchToProps)(JobBoardJobs)


