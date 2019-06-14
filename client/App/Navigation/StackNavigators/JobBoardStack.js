import { createStackNavigator } from 'react-navigation'

import Overview from '../../Components/KeyContact/JobPost/Overview'
import { PostAJobStack } from './PostAJobStack'
import JobBoardScreen from '../../Components/KeyContact/JobBoard/JobBoardScreen'
import ArchiveScreen from '../../Components/KeyContact/JobBoard/Archive'


export const JobBoardStack = createStackNavigator(
  {
    JobBoard: { screen: JobBoardScreen },
    Overview: {
      screen: Overview,
      navigationOptions: {
        title: 'Overview',
      }
    },
    Archive: {
      screen: ArchiveScreen,
      navigationOptions: {
        headerTitle: 'Archive',
      },
    },
    PostAJobStack: PostAJobStack
  },

  {
    defaultNavigationOptions: {
      title: 'Job Dashboard',
      headerTintColor: '#000',
      headerTitleStyle: { color: '#000', fontFamily: 'SFProText-Light' },
      headerStyle: {
        color: '#000',
        backgroundColor: '#f8f8f8'
      },
    },
    navigationOptions: {
      tabBarLabel: 'Job Dashboard',
    },
  }
)

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

