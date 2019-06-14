import React from 'react'
import { View, Text } from 'react-native'
import styles from '../../Styles/JobDashboardScreen/JobDashboardScreenStyle'
import Slider from '@react-native-community/slider';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'

const BasicInformationBody = props => {

    let body;

    if (props.currentPosition === 0) {
        body = <View><Text>What is the title of this job?</Text></View>
    } else if (props.currentPosition === 1) {
        body = <View>
            <Text>Date Picker</Text>
            <Calendar
                // Initially visible month. Default = Date()
                // current={'2012-03-01'}
                // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                // minDate={'2019-05-10'}
                // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                // maxDate={'2012-05-30'}
                // Handler which gets executed on day press. Default = undefined
                onDayPress={(day) => { console.log('selected day', day) }}
                // Handler which gets executed on day long press. Default = undefined
                onDayLongPress={(day) => { console.log('selected day', day) }}
                // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                monthFormat={'yyyy MM'}
                // Handler which gets executed when visible month changes in calendar. Default = undefined
                onMonthChange={(month) => { console.log('month changed', month) }}
                // Hide month navigation arrows. Default = false
                hideArrows={true}
                // Replace default arrows with custom ones (direction can be 'left' or 'right')
                renderArrow={(direction) => (<Arrow />)}
                // Do not show days of other months in month page. Default = false
                hideExtraDays={true}
                // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                // day from another month that is visible in calendar page. Default = false
                disableMonthChange={true}
                // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                firstDay={1}
                // Hide day names. Default = false
                hideDayNames={true}
                // Show week numbers to the left. Default = false
                showWeekNumbers={true}
                // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                onPressArrowLeft={substractMonth => substractMonth()}
                // Handler which gets executed when press arrow icon left. It receive a callback can go next month
                onPressArrowRight={addMonth => addMonth()}
            />
        </View>
    } else if (props.currentPosition === 2) {
        body = <View><Text>Where will the service take place?</Text></View>
    } else if (props.currentPosition === 3) {
        body = <View>
            <Text>The hourly rate is</Text>
            <Text>*Minimum wage varies per province/territory in Canada</Text>
            <Slider
                // style={{width: 200, height: 40}}
                minimumValue={14}
                maximumValue={500}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#000000"
            />
        </View>
    }

    return (
        body
    )
}

export default BasicInformationBody