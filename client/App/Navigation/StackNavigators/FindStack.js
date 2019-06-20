// import react
import React from 'react'
import { Text, View } from 'react-native'
import Icons from 'react-native-vector-icons/Octicons'

// packages imports
import { createStackNavigator } from 'react-navigation'

import FindScreen from '../../Components/Find/FindScreen'
import FindFilter from '../../Components/Find/FindFilter'


export const FindStack = createStackNavigator(
  {
    Find:
    {
      screen: FindScreen,
      navigationOptions: ({ navigation }) => ({
        headerRight:
          <View style={{ padding: 10 }}>
            <Icons
              name={"settings"}
              size={20}
              color={"#3F7DFB"}
              onPress={() => navigation.navigate("FindFilter")}
            />
          </View>
      })
    },
    FindFilter: {
      screen: FindFilter
    }
  },
  {
    defaultNavigationOptions: {
      title: 'Find',
      headerTintColor: '#000',
      headerTitleStyle: { color: '#000', fontFamily: 'SFProText-Light' },
    },
    navigationOptions: {
      tabBarLabel: 'Find',
    },
  }
)