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
  console.log('heres my state in mapStatetoProps',state)
  const { user_id } = state.user_id
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

  useEffect(
    () => {
      console.log("props", props)
      checkCognitoSession(props)
    }, [props.user_id])

  const [id, setId] = useState('')

console.log('heres my keycontactid bitch',props.user_id)

  // if (loading) {
  //   return <Loading />
  // };
  // if (error) {
  //   return <Text>Error!</Text>
  // }

  // if (props.user_id == undefined) { 
  //   return (<Loading/>)
  // }

  setId(props.user_id)

  console.log(id)

  if (id !== undefined) {

  console.log('heres my keycontactid after the props check', props.user_id)

  const { data, error, loading } = useQuery(KEY_CONTACT_JOBS, {
    variables : {key_contact_id: id }
  })

  console.log(data)

  setId(props.user_id)



  return (
    <ScrollView style={styles.MainContainer}>

      {data.getKeyContactJobPosts.map(elem => {
        let date = new Date(parseInt(elem.date_created));
        let options = {
          month: 'long', year: 'numeric', day: 'numeric',
        };
        let dateCreated = date.toLocaleDateString('en', options);

        let newDate = new Date(parseInt(elem.start_date));
        let startDate = newDate.toLocaleDateString('en', options)

        return (

          <ScrollView>
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
    }else {

      return null
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobBoardJobs) 


