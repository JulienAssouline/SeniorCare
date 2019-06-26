import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#eef5fb'
  },
  Profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 25,
  },
  ProfileName: {
    fontSize: 20,
    padding: 15,
    fontWeight: '600',
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
  ProfileButtonForgot: {
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
  },
  Camera: {
    borderWidth: 1,
    borderColor: '#3F7DFB',
    backgroundColor: '#fff',
    borderRadius: 26,
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default styles