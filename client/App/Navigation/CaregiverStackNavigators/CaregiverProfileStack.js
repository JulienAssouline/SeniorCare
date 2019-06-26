import { createStackNavigator } from 'react-navigation'
import { Text, View, TouchableOpacity } from 'react-native'
import Profile from '../../Components/Caregiver/Profile/Profile'
import JobDashboard from '../../Components/Caregiver/Jobs/Jobs'
import React from 'react'
import EditCaregiver from '../../Components/Caregiver/Profile/EditCaregiver'


import Account from '../../Components/Profile/Account'

export const CaregiverProfileStack = createStackNavigator(
  {
    CaregiverProfile: {
      screen: Profile,
      navigationOptions: {
        title: 'Profile',
      }
    },
    JobDashboard: {
      screen: JobDashboard,
      navigationOptions: {
        title: 'Jobs'
      },
    },
    EditCaregiver: {
      screen: EditCaregiver,
    },
    Account: {
      screen: Account,
      navigationOptions: (props) => ({
        headerRight:
          <View  style={{ padding: 10 }}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Account")}
              style={{ flex: 1, flexDirection: 'row' }}
            >
              <Text
               onPress = {() => props.navigation.navigate("EditCaregiver")}
               style={{ fontFamily: 'SFProText-Medium', color: '#3F7DFB', fontSize: 17 }}>
                Edit
              </Text>
            </TouchableOpacity>
          </View>
        })
    }
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