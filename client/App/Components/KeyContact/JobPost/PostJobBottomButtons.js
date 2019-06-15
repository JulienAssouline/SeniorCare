import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import styles from '../../Styles/JobDashboardScreen/JobDashboardScreenStyle'

const PostJobBottomButtons = props => {
    return (
        <View>
            <Button title="Back" type='solid' />
            <Button title="Next" type='solid' />
        </View>
    )
}

export default PostJobBottomButtons