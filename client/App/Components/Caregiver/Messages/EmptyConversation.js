import React from 'react'
import { Dimensions, ScrollView, Text, View, Image } from 'react-native'
import styles from '../../Styles/Messages/MessagesStyles'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Card } from 'native-base'

const EmptyConversation = (props) => {

  return (
      <Card style={{ zIndex: 100, position: 'relative', width: wp(90), marginLeft: wp(5), padding: 20 }}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>You have no messages. Only a Key Contact can start a conversatin.</Text>
      </Card>
  )
}

export default EmptyConversation
