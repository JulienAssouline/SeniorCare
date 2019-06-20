// import react
import React from 'react'
import { Text, View } from 'react-native'
import Icons from 'react-native-vector-icons/Octicons'

// packages imports
import { createStackNavigator } from 'react-navigation'

import SearchScreen from '../../Components/Search/SearchScreen'
import SearchFilter from '../../Components/Search/SearchFilter'


export const SearchStack = createStackNavigator(
  {
    Search:
    {
      screen: SearchScreen,
      navigationOptions: ({ navigation }) => ({
        headerRight:
          <View style={{ padding: 10 }}>
            <Icons
              name={"settings"}
              size={20}
              color={"#3F7DFB"}
              onPress={() => navigation.navigate("SearchFilter")}
            />
          </View>
      })
    },
    SearchFilter: {
      screen: SearchFilter
    }
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