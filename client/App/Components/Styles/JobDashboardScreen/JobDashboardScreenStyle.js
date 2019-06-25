import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#E9F6FF'
  },
  MainView:{
    flex: 1,
    flexDirection: 'row',
    margin: 20,
    backgroundColor: "#FFFFFF",
  },
  ExempleText: {
    fontFamily: 'SFProText-Bold',
    fontSize: 22,
    color: '#98A6B5'
  },
  ExempleButton: {
    backgroundColor: '#569CF2',
  },
  bluebox:{
    width: 100,
    height: 90,
    backgroundColor: '#0000FF',
    position: 'absolute',
    left:     250,
    top:      0,
  },
  CutCard:{
    flex: 1,
    flexDirection: 'row',
    margin: 5,
  },
  Applicants:{
    backgroundColor:"#3633ff",
  },  AppText:{
    fontFamily: 'SFProText-Bold',
    fontSize: 14,
    color: 'blue',
    marginLeft: -5,
  },
  DateText: {
    fontFamily: 'SFProText-Bold',
    fontSize: 14,
    color: '#98A6B5',
  }, 
  JobText: {
    fontFamily: 'SFProText-Bold',
    fontSize: 20,
    color: 'black',
    flex: 1,
    marginBottom: '10%'
  },  
  JobInfo:{
    flex: 1,
    flexDirection: 'row',
  },
})



export default styles