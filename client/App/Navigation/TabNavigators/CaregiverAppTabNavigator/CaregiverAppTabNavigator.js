import React from 'react';

import {
  createMaterialTopTabNavigator,
} from 'react-navigation'

import Icon from 'react-native-vector-icons/SimpleLineIcons'

// App stack screen imports
import { CaregiverFindStack } from '../../StackNavigators/CaregiverFindStack'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const configurations = {
  CaregiverFind: {
    screen: CaregiverFindStack,
    navigationOptions: {
      tabBarLabel: 'Find',
      tabBarIcon: ({ tintColor }) => (
        <Icon style={{ fontSize: 26, color: tintColor }} name="magnifier" />
      )
    }
  },
}

const options = {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  animationEnabled: true,
  navigationOptions: {
    tabBarVisible: true
  },
  tabBarOptions: {
    showLabel: true,
    activeTintColor: '#3F7DFB',
    inactiveTintColor: '#A3A3A3',
    style: {
      backgroundColor: '#f7f8f8',
      borderTopWidth: 0.7,
      borderColor: '#A3A3A3'
    },
    labelStyle: {
      fontSize: 12,
      fontWeight: 'bold',
      marginBottom: hp(1),
    },
    upperCaseLabel: false,
    indicatorStyle: {
      height: 0,
    },
    showIcon: true,
  }
}

const CaregiverAppTabNavigator = createMaterialTopTabNavigator(configurations, options)

CaregiverAppTabNavigator.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index]
  let headerTitle = routeName
  return {
    headerTitle,
  }
}

export default CaregiverAppTabNavigator