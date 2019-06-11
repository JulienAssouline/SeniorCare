import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'

import Icons from 'react-native-vector-icons/FontAwesome5'

import { JobDashboardStack } from '../StackNavigators/JobDashboardStack'

const MainBottomTabNavigator = createBottomTabNavigator(
  {
    JobDashboard: { screen: JobDashboardStack },
    // Hotel: { screen: HotelStack },
    // Info: { screen: InfoStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state
        let IconComponent = Icons
        let iconName
        if (routeName === 'JobDashboard') {
          iconName = `home`
        }
        // Sometimes we want to add badges to some icons.
        // You can check the implementation below.
        // IconComponent = HomeIconWithBadge
        //  else if (routeName === 'Hotel') {
        //   iconName = `hotel`
        //   // } else if (routeName === 'Favoris') {
        //   //   iconName = `heart`
        // } else if (routeName === 'Info') {
        //   iconName = `info-circle`
        // }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />
      },
    }),
    tabBarOptions: {
      activeTintColor: '#ffffff',
      inactiveTintColor: '#98A6B5',
      style: {
        backgroundColor: '#202843',
        minHeight: '7%',
      },
    },
  }
)

export default MainBottomTabNavigator