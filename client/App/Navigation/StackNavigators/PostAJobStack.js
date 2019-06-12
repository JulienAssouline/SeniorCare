import { createStackNavigator, createSwitchNavigator } from 'react-navigation'

import Overview from '../../Components/KeyContact/JobPost/Overview'
import SeniorDetails from '../../Components/KeyContact/JobPost/SeniorDetails/SeniorDetails'

export const PostAJobStack = createSwitchNavigator(
	{
		JobPostSeniorDetails: {
			screen: SeniorDetails,
		},
	},
	{
		// initialRouteName: 'Overview',
		defaultNavigationOptions: {
			headerStyle: {
				color: '#000',
				backgroundColor: 'transparent',
			},
      headerTintColor: '#000',
      headerTitleStyle: { color: '#000', fontFamily: 'SFProText-Light' },
    },
    navigationOptions: {
			tabBarLabel: 'Post a Job',
			tabBarVisible: false,
    },
	}
)