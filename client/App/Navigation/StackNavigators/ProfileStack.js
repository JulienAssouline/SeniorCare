
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
      headerTintColor: '#fff',
      headerTitleStyle: { color: '#fff', fontFamily: 'SFProText-Light' },
    },
    navigationOptions: {
      tabBarLabel: 'Profile',
    },
  }
)

