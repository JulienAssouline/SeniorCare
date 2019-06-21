import React from 'react'
import {View,  StyleSheet, Dimensions } from 'react-native'
import { SceneMap, TabView, TabBar } from 'react-native-tab-view';
import FirstRoute from './CaregiverDetails'

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#FFF' }]} />
);
const GET_CAREGIVERDETAILS = gql`
  query getCaregiverDetails($id: ID!){ 
    getCaregiverDetails(id: $id){
      fullname
      avatar
    }
  }
`;
export const Caregiver = ()=> {
  
  const index = 0,
  const routes = [
    { key: 'first', title: 'About' },
    { key: 'second', title: 'Experience' },
  ]
  let id = 1
  const {data, error, loading} = useQuery(GET_CAREGIVERDETAILS, {
    variables: {id}
  })
  if (data.getKeyContactProfile === undefined) { 
    return (<Text> Loading...</Text>)
  }
    return (
      <TabView
        navigationState={this.state}
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
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});





