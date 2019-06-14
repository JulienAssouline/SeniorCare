import React from 'react'
import { createStackNavigator } from 'react-navigation'

import ProfileScreen from '../../Components/Profile/ProfileScreen'


export const ProfileStack = createStackNavigator(
  {
    Profile: { screen: ProfileScreen },

  },

  {
    defaultNavigationOptions: {
      title: 'Profile',
      headerTintColor: '#000',
      headerTitleStyle: { color: '#000', fontFamily: 'SFProText-Light' },
      headerStyle: {
        color: '#000',
        backgroundColor: '#f8f8f8'
      },
    },
    navigationOptions: {
      tabBarLabel: 'Profile',
    },

  }
)
