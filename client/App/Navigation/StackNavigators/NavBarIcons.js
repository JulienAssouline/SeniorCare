import React from 'react'
import Icon from "react-native-vector-icons/Ionicons";
import { Button, TouchableOpacity, View} from 'react-native'

const NavBarIcons = (props) =>{
 console.log('hello propls',props)

  return(
    <View  style={{flex: 1, flexDirection: 'row'}}>
      <TouchableOpacity
      onPress={() =>  props.navigation.navigate("Overview")}>
        <Icon
        name="ios-add"
        color="#00a9c1"
        size={25}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>  props.navigation.navigate("Archive")} style={paddingleft='25'}>
        <Icon
        name="ios-time"
        color="#00a9c1"
        size={25}
        />
      </TouchableOpacity>
    </View>
  )
}
export default NavBarIcons