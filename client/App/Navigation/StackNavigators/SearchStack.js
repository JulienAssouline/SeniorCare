// import react
import React from 'react'
// packages imports
import { createStackNavigator } from 'react-navigation'

import SearchScreen from '../../Components/Search/SearchScreen'

export const SearchStack = createStackNavigator(
    {
      Search: { screen: SearchScreen },
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
        tabBarLabel: 'Search',
      },
    }
  )

