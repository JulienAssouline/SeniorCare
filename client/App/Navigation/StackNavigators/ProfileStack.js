import React from 'react'
import { createStackNavigator } from 'react-navigation'
import ProfileScreen from '../../Components/KeyContact/Profile/ProfileScreen'

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
        backgroundColor: 'transparent'
      },
    },
    navigationOptions: {
      tabBarLabel: 'Profile',
    },
  }
)
