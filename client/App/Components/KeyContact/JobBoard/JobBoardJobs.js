// import React, {useEffect, useState} from 'react'
// import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
// import { Button } from 'react-native-elements'
// import styles from '../../Styles/JobDashboardScreen/JobDashboardScreenStyle'
// import gql from 'graphql-tag'
// import { useQuery } from 'react-apollo-hooks'
// import Loading from '../../Loading/Loading'

// const ARCHIVED_JOBS = gql `
//   query{
//     ArchivedJobs{
//       id
//       title
//       date_created
//       start_date
//       hourly_rate
//     }
//   }
// `

// const JobBoardJobs = (props) => {

//   const [jobs, setJobs] = useState({});

//   const { data, error, loading } = useQuery(ARCHIVED_JOBS);
//   console.log('heree my data',data)

//   if(loading){
//     return <Loading/>
//   };
//   if (error){
//     return <Text>Error!</Text>
//   }

//     return(
//       <ScrollView>
//         {data.ArchivedJobs.map(elem => (

            
//          <ScrollView> 
//           <View style={styles.MainView}>

//           <View>
//           {console.log('all my datess',elem.date)}
// //             <Text style={styles.DateText}> Posted {dateCreated}</Text>
// //             <Text onPress={ () => onclick(elem.id)}>...</Text>
// //             <Text key = {elem.id} style={styles.JobText}> {elem.title}</Text> 
// //           </View>

// //           <View style={styles.JobInfo}>
// //             <Text style={{fontSize: 16}}> Starts {startDate}</Text>
// //             <Text style={{fontSize: 16}}> ${elem.hourly_rate}/hr</Text>  
// //           </View>
 
//           </View>
//           </ScrollView> 
//         ))}


//       </ScrollView>
//     )
// }
  



  
    

// export default JobBoardJobs


