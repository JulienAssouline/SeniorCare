import { createStackNavigator } from 'react-navigation'

import Find from '../../Components/Caregiver/Find/Find'

export const CaregiverFindStack = createStackNavigator(
  {
    CaregiverFind: {
      screen: Find,
      navigationOptions: {
        title: 'Find',
      }
    },
	},
  {
    defaultNavigationOptions: {
      title: 'Search',
      headerTintColor: '#000',
      headerTitleStyle: { color: '#000', fontFamily: 'SFProText-Light' },
    },
    navigationOptions: {
      tabBarLabel: 'Search',
    },
  }
)