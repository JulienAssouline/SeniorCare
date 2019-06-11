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
        headerTintColor: '#fff',
        headerTitleStyle: { color: '#fff', fontFamily: 'SFProText-Light' },
      },
      navigationOptions: {
        tabBarLabel: 'Search',
      },
    }
  )

