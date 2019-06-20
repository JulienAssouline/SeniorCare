import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  Profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 25,
  },
  ProfileName: {
    fontSize: 20,
  },
  ProfileButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderBottomColor: '#eee',
    borderColor: '#fff',
    borderStyle: 'solid',
    marginRight: 20,
    marginLeft: 20,
  },
  ProfileButtonText: {
    fontSize: 16,
    padding: 15,
  },
  ProfileButtonIcon: {
    fontSize: 16,
    padding: 15,
    color: '#3F7DFB'
  }
})

export default styles