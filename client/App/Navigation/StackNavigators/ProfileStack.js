import React from 'react'
import { createStackNavigator, navigation } from 'react-navigation'

//import ProfileScreen from '../../Components/KeyContact/JobDashboard/JobDashboardScreen'
//import { SignUpScreen } from './SignUpStack';
import ProfileScreen from '../../Components/Profile/ProfileScreen'
import Senior from '../../Components/Profile/Senior/Senior'

import Help from '../../Components/Profile/Help/Help'

import AccountDetails from '../../Components/Profile/Account'
import SeniorIndex from '../../Components/Profile/Senior/Index'

export const ProfileStack = createStackNavigator(
  {
    Profile: { 
      screen: ProfileScreen 
    },
    Help: {
      screen: Help
    },
    Seniors: {
      screen: Senior,
      navigationOptions: {
        title: 'Seniors'
      },
      
      
    },
    SeniorDetails:{
      screen: SeniorIndex,
        navigationOptions: {
          title: 'Caregiver for'
          // title: `${navigation.title}`,
        },
    },
    Account: {
      screen: AccountDetails,
      navigationOptions: {
        title: 'Account'
      }
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
