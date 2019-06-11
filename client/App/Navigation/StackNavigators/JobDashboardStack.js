import React from 'react'
import { createStackNavigator } from 'react-navigation'
import JobDashboardScreen from '../../Components/KeyContact/JobDashboard/JobDashboardScreen'
import SearchScreen from '../../Components/Search/SearchScreen'

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

