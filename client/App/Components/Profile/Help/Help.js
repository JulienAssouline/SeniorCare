import React from 'react'
import { ScrollView, Text, View, Image, WebView } from 'react-native'
import { Button } from '@ant-design/react-native';
import { useQuery } from 'react-apollo-hooks';
import gql from "graphql-tag";
import styles from '../../Styles/Profile/Senior/Senior'
import Icons from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native-gesture-handler';


const Help = ( ) =>{
  return(
    <WebView
    source={{uri: 'https://github.com/facebook/react-native'}}
    style={{marginTop: 20}}
  />
  )
}
export default Help