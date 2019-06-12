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
      headerTintColor: '#000',
      headerTitleStyle: { color: '#000', fontFamily: 'SFProText-Light' },
      headerStyle: {
        color: '#000',
        backgroundColor: 'transparent'
      },
    },
    navigationOptions: {
      tabBarLabel: 'Messages',
    },
  }
)

