import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
  buttonContainer: {
    marginTop: 50,
    flex: 1,
    flexDirection: 'row'
  },
  splitButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 7,
  },
  serviceButtonContainer: {
    width: '50%',
  },
  serviceButton: {
    marginHorizontal: 5,
    borderRadius: 20,
    // backgroundColor: "#314592", this does not work
  },
  startContinue: {
    width: '100%',
    borderRadius: 0,
    backgroundColor: "#314592",
  },
  back: {
		borderRadius: 0,
		backgroundColor: '#F0F0F0'
  },
  next: {
		borderRadius: 0,
    backgroundColor: "#314592",
    color: '#4d4d4d',
  },
  containerBack: {
    width: '50%',
  },
  containerNext: {
    width: '50%',
  }
})