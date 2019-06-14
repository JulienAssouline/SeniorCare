import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  Senior: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderBottomColor: '#eee',
    borderColor: '#fff',
    borderStyle: 'solid',
    marginRight: 20,
    marginLeft: 20,
    padding: 10,
  },
  SeniorName: {
    fontSize: 16,
  },
  SeniorButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  SeniorButtonText: {
    fontSize: 16,
    padding: 15,
  },
  SeniorButtonIcon: {
    fontSize: 16,
    padding: 15,
    color: '#A3A3A3'
  },
  SeniorContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  SeniorPlusIcon: {
    fontSize: 16,
    padding: 15,
    color: '#3F7DFB'
  },
})

export default styles