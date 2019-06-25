import { StyleSheet } from 'react-native'

const lightPurple = '#EEF5FB'
const mainTextPurple = '#244392'
const mainGreyText = '#525252'
const lightGreyText = '#A3A3A3'

export const jobPostListItemStyles = StyleSheet.create({
	container: {
		marginLeft: -12,
	},

	title: {
		fontSize: 14,
	},

	subtitle: {
		color: lightGreyText,
		fontSize: 10,
	},
})

export const jobPostStyles = StyleSheet.create({
	mainContainer: {
		borderWidth: 0,
	},

	jobTitle: {
		fontSize: 20,
		fontWeight: '500',
	},

	basicInfoContainer: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'nowrap',
	},

	basicInfoItemContainer: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'nowrap',
		
		marginVertical: 10,
	},

	basicInfoItemText: {
		color: mainGreyText,
		fontSize: 14,
		marginLeft: 6,
	},

	servicesContainer: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},

	serviceBubble: {
		backgroundColor: lightPurple,
		borderRadius: 10,
		margin: 8,
		marginLeft: 0,
		paddingHorizontal: 16,
		paddingVertical: 2,
	},

	serviceText: {
		color: mainTextPurple
	},
})