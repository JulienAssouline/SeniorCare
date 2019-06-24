import React, { useState } from 'react'
import { ScrollView, Text, View, Dimensions, Image } from 'react-native'
import { SceneMap, TabView, TabBar } from 'react-native-tab-view';
import FirstRoute from './CaregiverDetails'
import gql from "graphql-tag";
import { useQuery } from 'react-apollo-hooks';
import styles from '../Styles/Caregiver/Caregiver'
import SecondRoute from './Experience'
import { connect } from 'react-redux'

const mapStateToProps = state =>{
  const { user_id } = state.user_id
  return{
    user_id: user_id
  }
}
const GET_CAREGIVERDETAILS = gql`
  query getCaregiverDetails($id: ID!){ 
    getCaregiverDetails(id: $id){
      avatar
    }
  }
`;
const Caregiver = props => {
  const [ index, setIndex ] = useState(0)
  const [ routes, setRoutes ] = useState([
    {key: 'first', title: 'About'},
    {key: 'second', title: 'Experience'}
  ])
  let id = props.user_id
  const {data, error, loading} = useQuery(GET_CAREGIVERDETAILS, {
    variables: {id}
  })
  if (data.getCaregiverDetails === undefined) { 
    return (<Text> Loading...</Text>)
  }

  return (
    <ScrollView style={styles.MainContainer}>
    <Image style={styles.avatar}
          style={{ width: 'auto', height: 250 }}
          source={{ uri: data.getCaregiverDetails.avatar }}
        />
      
      <TabView
        navigationState={{
          index,
          routes
        }}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
        renderTabBar={props => (
          <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: '#244392' }}
          style={{ backgroundColor: '#E9F6FF', textTransform: 'capitalize'}}
          labelStyle={{color: '#244392'}}
          inactiveColor={'grey'}
          
          />
          )}
          onIndexChange={index => setIndex(index)}
          initialLayout={{ width: Dimensions.get('window').width }}
          />
    </ScrollView>   
  )
}

export default connect(mapStateToProps)(Caregiver)




