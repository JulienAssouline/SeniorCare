import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#eef5fb'

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
  ProfileButtonIcon: {
    fontSize: 16,
    padding: 15,
    color: '#3F7DFB'
  },
  input: {
      flex: 1,
      fontSize: 16,
      width: '100%',
      padding: 5,
      marginTop: 5,
      marginBottom: 5,
      borderWidth: 1,
      color: '#000000',
      borderBottomColor: '#A3A3A3',
      borderColor: '#fff',
      borderStyle: 'solid',
    },
    inputDesxription: {
        flex: 1,
        fontSize: 16,
        width: '100%',
        padding: 5,
        marginTop: 5,
        marginBottom: 5,
        borderWidth: 1,
        color: '#000000',
        borderBottomColor: '#A3A3A3',
        borderColor: '#fff',
        borderStyle: 'solid',
        height: 80,
      },
    inputNumber: {
      flex: 1,
      fontSize: 16,
      width: '100%',
      padding: 5,
      marginTop: 5,
      marginRight: 20,
      marginBottom: 5,
      borderWidth: 1,
      color: '#000000',
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
    headingsText: {
      fontSize: 18,
      padding: 0,
      color: '#244392',
    },
    headingsTextGender: {
      marginBottom: 10,
      fontSize: 18,
      padding: 0,
      color: '#244392',
    },
    availabilityTextPadding: {
      marginBottom: 5,
      fontSize: 18,
      color: '#244392',
    },
    availabilityOptionText: {
      fontSize: 14,
      color: "#000000",
      margin: 5,
    },
    fieldContainer: {
      margin: 10,
    },
    fieldGenderContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    buttonText: {
        flex: 1,
        justifyContent: 'center',
        fontSize: 18,
        color: '#FFF',
        textAlign: 'center',
      },
  switchContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  numberInputsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
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