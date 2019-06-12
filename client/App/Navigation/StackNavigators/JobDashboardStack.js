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
      headerTintColor: '#000',
      headerTitleStyle: { color: '#000', fontFamily: 'SFProText-Light' },
      headerStyle: {
        color: '#000',
        backgroundColor: 'transparent'
      },
    },
    navigationOptions: {
      tabBarLabel: 'Job Dashboard',
    },
  }
)

