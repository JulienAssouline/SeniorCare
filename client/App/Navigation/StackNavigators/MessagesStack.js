import React from 'react'
import { createStackNavigator } from 'react-navigation'
import MessagesScreen from '../../Components/Messages/MessagesScreen.js'

export const MessagesStack = createStackNavigator(
  {
    Messages: { screen: MessagesScreen },
  },
  {
    defaultNavigationOptions: {
      title: 'Messages',
      headerTintColor: '#fff',
      headerTitleStyle: { color: '#fff', fontFamily: 'SFProText-Light' },
    },
    navigationOptions: {
      tabBarLabel: 'Messages',
    },
  }
)

