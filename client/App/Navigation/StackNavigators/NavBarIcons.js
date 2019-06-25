import React from 'react'
import Icon from "react-native-vector-icons/Ionicons";
import { Button, TouchableOpacity, View, StyleSheet} from 'react-native'

const NavBarIcons = (props) =>{
 

  return(
    <View  style={{flex: 1, flexDirection: 'row'}}>
      <TouchableOpacity
      style={styles.overview}
      onPress={() =>  props.navigation.navigate("Overview")}>
        <Icon
        name="ios-add"
        color="#00a9c1"
        size={30}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>  props.navigation.navigate("Archive")} style={styles.archive}>
        <Icon
        name="ios-time"
        color="#00a9c1"
        size={30}
        />
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  overview: {
    paddingLeft:15,
    paddingRight:15,
  },
  archive: {
    paddingRight:15,
  },
 
});


export default NavBarIcons