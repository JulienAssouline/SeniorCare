import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#EEF5FB',
  },
  searchContainer: {
    flex: 1,
    margin: 20,
    padding: 10,
    backgroundColor: "#FFFFFF",
  },
  ratingLocationContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
  },
  experienceRateContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5,
    justifyContent: "space-between",
  },
  ratingText: {
    color: "#3F7DFB",
  },
  locationText: {
    color: "#6F6F6F",
    fontSize: 14,
  },
  backgroundInfoText: {
    color: "#6F6F6F",
    fontSize: 12,
  },
  fullName: {
    color: "#151515",
    fontSize: 20,
    marginBottom: 5,
  },
  starRating: {
    paddingRight: 3,
    paddingLeft: 1,
  },
})

export default styles