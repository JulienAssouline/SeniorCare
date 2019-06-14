import React from 'react';
import { View, TouchableOpacity } from 'react-native'

import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation'

import Icons from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

// Auth stack screen imports
import AuthLoadingScreen from '../../Components/AuthLoading/AuthLoadingScreen'
import WelcomeScreen from '../../Components/Welcome/WelcomeScreen'
import SignUpScreen from '../../Components/SignUp/SignUpScreen'
import SignInScreen from '../../Components/Login/SignInScreen'
import ForgetPasswordScreen from '../../Components/ForgotPassword/ForgetPasswordScreen'

// App stack screen imports
import { SearchStack } from './SearchStack'
import { JobBoardStack } from './JobBoardStack'
import { MessagesStack } from './MessagesStack'
import { ProfileStack } from './ProfileStack'


// Amplify imports and config
import Amplify from '@aws-amplify/core'
import config from '../../../aws-exports'
Amplify.configure(config)

// Configurations and options for the AppTabNavigator
const configurations = {
  Search: {
    screen: SearchStack,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({ tintColor }) => (
        <Icons style={{ fontSize: 26, color: tintColor }} name="search1" />
      )
    }
  },
  JobBoard: {
    screen: JobBoardStack,
    navigationOptions: {
      tabBarLabel: 'Job',
      tabBarIcon: ({ tintColor }) => (
        <Icon style={{ fontSize: 24, color: tintColor }} name="briefcase" />
      )
    }
  },
  Messages: {
    screen: MessagesStack,
    navigationOptions: {
      tabBarLabel: 'Messages',
      tabBarIcon: ({ tintColor }) => (
        <Icons style={{ fontSize: 24, color: tintColor }} name="message1" />
      )
    }
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Icons style={{ fontSize: 24, color: tintColor }} name="user" />
      )
    }
  },
}

const options = {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  animationEnabled: true,
  navigationOptions: {
    tabBarVisible: true
  },
  tabBarOptions: {
    showLabel: true,
    activeTintColor: '#3F7DFB',
    inactiveTintColor: '#A3A3A3',
    style: {
      backgroundColor: '#f7f8f8',
      borderTopWidth: 0.7,
      borderColor: '#A3A3A3'
    },
    labelStyle: {
      fontSize: 12,
      fontWeight: 'bold',
      marginBottom: 12,
      marginTop: 12,
    },
    upperCaseLabel: false,
    indicatorStyle: {
      height: 0,
    },
    showIcon: true,
  }
}

// Bottom App tabs
const AppTabNavigator = createMaterialTopTabNavigator(configurations, options)

// Making the common header title dynamic in AppTabNavigator
AppTabNavigator.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index]
  let headerTitle = routeName
  return {
    headerTitle,
  }
}

// const AppStackNavigator = createStackNavigator({
//   Header: {
//     screen: AppTabNavigator,
//     // Set the header icon
//     // navigationOptions: ({ navigation }) => ({
//     //   headerRight: (
//     //     <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
//     //       <View style={{ paddingHorizontal: 10 }}>
//     //         <Ionicons size={24} name="md-menu" />
//     //       </View>
//     //     </TouchableOpacity>
//     //   )
//     // })
//   }
// })


// Auth stack
const AuthStackNavigator = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: () => ({
      title: `Welcome to this App`, // for the header screen
      headerBackTitle: 'Back'
    }),
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: () => ({
      title: `Create a new account`,
    }),
  },
  SignIn: {
    screen: SignInScreen,
    navigationOptions: () => ({
      title: `Log in to your account`,
    }),
  },
  ForgetPassword: {
    screen: ForgetPasswordScreen,
    navigationOptions: () => ({
      title: `Create a new password`,
    }),
  },
})

const MainAppStack = createSwitchNavigator({
  Authloading: AuthLoadingScreen,
  Auth: AuthStackNavigator, // the Auth stack
  App: AppTabNavigator, // the App stack
})

export default MainAppStack

