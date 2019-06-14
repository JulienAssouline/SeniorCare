import { createStackNavigator, createSwitchNavigator } from 'react-navigation'

import Overview from '../../Components/KeyContact/JobPost/Overview'
import SeniorDetails from '../../Components/KeyContact/JobPost/SeniorDetails/SeniorDetails'
import BasicInformation from '../../Components/KeyContact/JobPost/BasicInformation'

export const PostAJobStack = createSwitchNavigator(
	{
		JobPostSeniorDetails: {
			screen: SeniorDetails,
		},
		BasicInformation: {
			screen: BasicInformation,
		}
	},
	{
		// initialRouteName: 'Overview',
		defaultNavigationOptions: {
			headerStyle: {
				color: '#000',
				backgroundColor: '#f8f8f8',
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