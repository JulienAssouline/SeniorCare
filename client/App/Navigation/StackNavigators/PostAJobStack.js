import { createStackNavigator, createSwitchNavigator } from 'react-navigation'

import Overview from '../../Components/KeyContact/JobPost/Overview'
import SeniorDetails from '../../Components/KeyContact/JobPost/SeniorDetails/SeniorDetails'
import BasicInformation from '../../Components/KeyContact/JobPost/BasicInformation'
import CreateNewSeniorProfile from '../../Components/KeyContact/JobPost/SeniorDetails/CreateNewSeniorProfile'

export const PostAJobStack = createSwitchNavigator(
	{
		JobPostSeniorDetails: {
			screen: SeniorDetails,
		},
		BasicInformation: {
			screen: BasicInformation,
		},
		SeniorDetails: {
			screen: SeniorDetails,
		},
		CreateNewSeniorProfile: {
			screen: CreateNewSeniorProfile,
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