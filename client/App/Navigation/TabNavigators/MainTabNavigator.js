import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import Icons from 'react-native-vector-icons/FontAwesome5'
import { JobDashboardStack } from '../StackNavigators/JobDashboardStack'
import { FindStack } from '../StackNavigators/FindStack'
import { ProfileStack } from '../StackNavigators/ProfileStack'
import { MessagesStack } from '../StackNavigators/MessagesStack'
import DevLinksScreen from '../../Components/Dev/DevLinksScreen'

const MainBottomTabNavigator = createBottomTabNavigator(
  {
    JobDashboard: { screen: JobDashboardStack },
    Find: { screen: FindStack },
    Profile: { screen: ProfileStack },
    Messages: { screen: MessagesStack },
    DevLinks: { screen: DevLinksScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state
        let IconComponent = Icons
        let iconName
        if (routeName === 'JobDashboard') {
          iconName = `home`
        } else if (routeName === 'Profile') {
          iconName = `user`
        } else if (routeName === 'Find') {
          iconName = `Find`
        } else if (routeName === 'Messages') {
          iconName = `comment`
        } else if (routeName === 'DevLinks') {
          iconName = `brain`
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