import { createStackNavigator } from 'react-navigation'

import Messages from '../../Components/Caregiver/Messages/Messages'

export const CaregiverMessagesStack = createStackNavigator(
  {
    CaregiverMessages: {
      screen: Messages,
      navigationOptions: {
        title: 'Messages',
      }
    },
	},
  {
    defaultNavigationOptions: {
      title: 'Messages',
      headerTintColor: '#000',
      headerTitleStyle: { color: '#000', fontFamily: 'SFProText-Light' },
    },
    navigationOptions: {
      tabBarLabel: 'Messages',
    },
  }
)