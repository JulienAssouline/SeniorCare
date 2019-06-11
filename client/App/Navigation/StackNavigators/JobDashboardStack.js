// import react
import React from 'react'
// packages imports
import { createStackNavigator } from 'react-navigation'



import JobDashboardScreen from '../../Components/KeyContact/JobDashboard/JobDashboardScreen'


export const JobDashboardStack = createStackNavigator(
  {
    JobDashboard: { screen: JobDashboardScreen },
  },
  {
    defaultNavigationOptions: {
      title: 'Job Dashboard',
      headerTintColor: '#fff',
      headerTitleStyle: { color: '#fff', fontFamily: 'SFProText-Light' },
    },
    navigationOptions: {
      tabBarLabel: 'Job Dashboard',
    },
  }
)

