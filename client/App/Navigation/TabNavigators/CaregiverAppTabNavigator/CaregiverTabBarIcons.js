import React from 'react'

import Awesome5Icon from 'react-native-vector-icons/FontAwesome5'
import IonIcon from 'react-native-vector-icons/Ionicons'

export const getTabBarIcon = (navigation, focused, tintColor) => {
	const { routeName } = navigation.state
	let IconComponent
	let iconName

	if (routeName === 'About') {
		IconComponent = Awesome5Icon
		iconName = 'info-circle'
	} else if (routeName === 'Faves') {
		IconComponent = IonIcon
		iconName = 'ios-heart'
	} else if (routeName === 'Map') {
		IconComponent = IonIcon
		iconName = 'ios-map'
	} else if (routeName === 'Schedule') {
		IconComponent = IonIcon
		iconName = 'ios-calendar'
	} else {
		IconComponent = Awesome5Icon
		iconName = 'home'
	}

	return <IconComponent name={iconName} size={24} color={tintColor} />
}