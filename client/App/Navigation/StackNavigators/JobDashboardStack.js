import { createStackNavigator, createSwitchNavigator } from 'react-navigation'

import Overview from '../../Components/KeyContact/JobPost/Overview'
import { PostAJobStack } from './PostAJobStack'
import JobDashboardScreen from '../../Components/KeyContact/JobDashboard/JobDashboardScreen'

const JobDashboardStack = createStackNavigator(
  {
		JobDashboard: { screen: JobDashboardScreen },
		Overview: {
			screen: Overview,
			navigationOptions: {
				title: 'Overview',
			}
		},
		PostAJobStack: PostAJobStack			
	},
  {
    defaultNavigationOptions: {
      title: 'Job Dashboard',
      headerTintColor: '#000',
      headerTitleStyle: { color: '#000', fontFamily: 'SFProText-Light' },
    },
    navigationOptions: {
			tabBarLabel: 'Job Dashboard',
    },
  }
)

// This hides bottom tab navigator for post a job
JobDashboardStack.navigationOptions = ({ navigation }) => {
	let { routeName } = navigation.state.routes[navigation.state.index]
	
	let tabBarVisible = true
	if (routeName === 'Overview' || routeName === 'PostAJobStack') {
		tabBarVisible = false
	}

  return {
		tabBarVisible
	}
}

export { JobDashboardStack }