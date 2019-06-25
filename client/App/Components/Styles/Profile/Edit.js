import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#eef5fb',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 15,
  },
  e: {
    height: 110,
  },
  label: {
    fontSize: 18,
    padding: 5,
    color: '#244392',
  },
  input: {
    flex: 1,
    fontSize: 16,
    width: '100%',
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 1,
    color: '#A3A3A3',
    borderBottomColor: '#A3A3A3',
    borderColor: '#fff',
    borderStyle: 'solid',
  },
  submitButton: {
    borderWidth: 1,
    borderRadius: 75,
    width: 150,
    backgroundColor: '#244392',
    borderColor: '#244392',
    borderStyle: 'solid',
    padding: 5,
    margin: 10,
    justifyContent: 'center',
  },
  buttonText: {
    flex: 1,
    justifyContent: 'center',
    fontSize: 18,
    color: '#FFF',
    textAlign: 'center',
  }
})

export default styles