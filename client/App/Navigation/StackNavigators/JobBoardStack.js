import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { Button, TouchableOpacity, View} from 'react-native'
import Overview from '../../Components/KeyContact/JobPost/Overview'
import { PostAJobStack } from './PostAJobStack'
import JobBoardScreen from '../../Components/KeyContact/JobBoard/JobBoardScreen'
import ArchiveScreen from '../../Components/KeyContact/JobBoard/Archive'
import NavBarIcons from './NavBarIcons'
import Icon from "react-native-vector-icons/Ionicons";


export const JobBoardStack = createStackNavigator(
  {
    JobBoard: { 
      screen: JobBoardScreen,
      navigationOptions: (props) => ({
        headerTitle: 'Job Board',  
        headerRight: <NavBarIcons {...props} />
      })
    },
    Overview: {
      screen: Overview,
      navigationOptions: {
        title: 'Overview',
        
      }
    },
    Archive: {
      screen: ArchiveScreen,
      navigationOptions: {
        headerTitle: 'Archive'
      
      },
    },
    PostAJobStack: PostAJobStack
  },

)

// {
//   defaultNavigationOptions: {
//     title: 'Job Dashboard',
//     navigationOptions: {
//       tabBarLabel: 'Job Dashboard',
//       headerRight:'HELLO',
//     },
//     headerTintColor: '#000',
//     headerTitleStyle: { color: '#000', fontFamily: 'SFProText-Light' },
//     headerStyle: {
//       color: '#000',
//       backgroundColor: '#f8f8f8'
//     },
//   },

// }
// This hides bottom tab navigator for post a job
JobBoardStack.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index]

  let tabBarVisible = true
  if (routeName === 'Overview' || routeName === 'PostAJobStack') {
    tabBarVisible = false
  }

  return {
    tabBarVisible
  }
}


    // (
      //   <Button
      //     title =""
      //     onPress={() => alert('This is a button!')}
      //     title="Info"
      //     color="#fff"
      //   />
      // ),