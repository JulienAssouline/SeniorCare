
import React from 'react'
import { createStackNavigator } from 'react-navigation'

import ProfileScreen from '../../Components/KeyContact/JobDashboard/JobDashboardScreen'


export const ProfileStack = createStackNavigator(
  {
    Profile: { screen: ProfileScreen },
  },
  {
    defaultNavigationOptions: {
      title: 'Profile',
      headerTintColor: '#fff',
      headerTitleStyle: { color: '#fff', fontFamily: 'SFProText-Light' },
    },
    navigationOptions: {
      tabBarLabel: 'Profile',
    },
  }
)

