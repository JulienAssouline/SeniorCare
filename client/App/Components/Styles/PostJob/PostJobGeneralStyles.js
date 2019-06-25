import { StyleSheet } from 'react-native'

const mainAppBlue = '#244397'
const darkGreyText = '#525252'
const backButtonGrey = '#F0F0F0'

export const general = StyleSheet.create({
	question: {
		color: mainAppBlue,
		fontSize: 22,
		fontWeight: '500',
	},
})

export const bottomButtons = StyleSheet.create({
	buttonContainer: {
		flex: 1,
		flexDirection: 'row',
	},

	backContainer: {
		width: '50%',
	},

	nextContainer: {
		width: '50%',
	},

	backButton: {
		backgroundColor: backButtonGrey,
		borderRadius: 0,
	},
	
	nextButton: {
		backgroundColor: mainAppBlue,
		borderRadius: 0,
	},

	backButtonText: {
		color: darkGreyText,
	},
})