import { createAppContainer } from 'react-navigation'

import MainTabNavigator from '../Navigation/TabNavigators/MainTabNavigator'

const AppContainer = createAppContainer(MainTabNavigator)

export default AppContainer