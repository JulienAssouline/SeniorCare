import React from 'react'
import { View } from 'react-native'
import { Button } from '@ant-design/react-native'
import styles from '../../Styles/JobDashboardScreen/JobDashboardScreenStyle'


const PostJobBottomButtons = props => {
    return (
        <View>
            <Button type='primary'>Back</Button>
            <Button type='primary'>Next</Button>
        </View>
    )
}

export default PostJobBottomButtons