import { StyleSheet } from 'react-native'

const appYellow = '#FFAD05'
const appGreyText = '#525252'



export const overview = StyleSheet.create({
	explanationContainer: {
		padding: 16,
	},	

	title: {
		fontSize: 24,
		marginTop: '8%',
	},

	description: {
		color: appGreyText,
		fontSize: 18,
		marginVertical: 16,
	},

	sectionsContainer: {
		marginVertical: '8%',
	},

	buttonIcon: {
		backgroundColor: appYellow
	},

	checkedIcon: {
		backgroundColor: '#fff'
	},

	overviewItem: {
		borderBottomWidth: 1,
		marginVertical: 0,
		paddingVertical: 10,
		paddingHorizontal: '10%',
	},
})