import React from 'react'
import { createStackNavigator } from 'react-navigation'


import ProfileScreen from '../../Components/KeyContact/Profile/ProfileScreen'
import Senior from '../../Components/KeyContact/Profile/Senior/Senior'

export const ProfileStack = createStackNavigator(
  {
    Profile: { 
      screen: ProfileScreen 
    },
    Seniors: {
      screen: Senior
    }

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
