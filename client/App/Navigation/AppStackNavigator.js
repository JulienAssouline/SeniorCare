import React from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation";

// THIS WILL NEED TO CHANGE BASED ON NEW SCREENS AND LOGIN USING KOGNITO
// THIS FILE IS CURRENTLY NOT BEING USED
const AppStackNavigator = StackNavigator({
    loginFlow: {
      screen: StackNavigator({
        splash: { screen: SplashScreen },
        login: { screen: LoginScreen },
      })
    },
    mainFlow: {
      screen: StackNavigator({
        main: { screen: MainScreen },
        settings: { screen: SettingsScreen },
        someTab: {
          screen: TabNavigator({
            firstTab: { screen: FirstTabScreen },
            secondTab: { screen: SecondTabScreen },
            thirdTab: { screen: ThirdTabScreen }
          })
        }
      })
    }
  });

  export default AppStackNavigator;

