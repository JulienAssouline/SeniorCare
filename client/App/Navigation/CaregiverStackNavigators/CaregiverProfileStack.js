import { createStackNavigator } from 'react-navigation'

import Profile from '../../Components/Caregiver/Profile/Profile'

export const CaregiverProfileStack = createStackNavigator(
  {
    CaregiverProfile: {
      screen: Profile,
      navigationOptions: {
        title: 'Profile',
      }
    },
	},
  {
    defaultNavigationOptions: {
      title: 'Profile',
      headerTintColor: '#000',
      headerTitleStyle: { color: '#000', fontFamily: 'SFProText-Light' },
    },
    navigationOptions: {
      tabBarLabel: 'Profile',
    },
  }
)