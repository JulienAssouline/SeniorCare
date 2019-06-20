import { connect } from 'react-redux'
import React, {useState} from 'react'
import { View, Text, TextInput } from 'react-native'
import { ButtonGroup } from 'react-native-elements'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars'

const mapStateToProps = state => {
  return {
    startDate: state.startDate,
    endDate: state.endDate,
  }
}

//MUST FIX ARROWS
//NICE TO HAVE Check if start date is before end date

const mapDispatchToProps = dispatch => {
  return {
    onStartDateUpdate: (day) => dispatch({type: 'STARTDATE', payload: day.dateString}),
    onEndDateUpdate: (day) => dispatch({type: 'ENDDATE', payload: day.dateString}),
  }
}

const BasicInformationCalendar = (props) => {

  const [calendarButtonIndex, setCalendarButtonIndex] = useState(0)
  const [dateSelected, setDateSelected] = useState({})

  const updateIndex = () => {
    if (calendarButtonIndex === 0) {
      setCalendarButtonIndex(1)
    } else if(calendarButtonIndex === 1) {
      setCalendarButtonIndex(0)
    }
  }

  const handleStartDayPress = (day) => {
    if (props.startDate.length === 0) {
      setDateSelected(
        {
          ...dateSelected,
          [day.dateString]:{startingDay: 'true', endingDay: 'false', selected: true, color: 'blue'}
        }
      )
      updateIndex()
      props.onStartDateUpdate(day)
      // console.log('this is calendarButtonIndex', calendarButtonIndex)
      // console.log('start date in dateSelected', dateSelected)  
    } else {
        // console.log(`deleting key: ${props.startDate} from ${dateSelected}`)
        delete dateSelected[props.startDate];
        setDateSelected(
          {
            ...dateSelected,
            [day.dateString]:{startingDay: 'true', endingDay: 'false', selected: true, color: 'blue'}
          }
        )
        updateIndex()
        props.onStartDateUpdate(day)
    }
  }

  const handleEndDayPress = (day) => {
    if (props.endDate.length === 0) {
      setDateSelected(
        {
          ...dateSelected,
          [day.dateString]:{startingDay: 'false', endingDay: 'true', selected: true, color: 'red'}
        }
      )
      updateIndex()
      props.onEndDateUpdate(day)
      // console.log('this is calendarButtonIndex', calendarButtonIndex)
      // console.log('start date in dateSelected', dateSelected)  
    } else {
        console.log(`deleting key: ${props.endDate}  from ${dateSelected}`)
        delete dateSelected[props.endDate];
        setDateSelected(
          {
            ...dateSelected,
            [day.dateString]:{startingDay: 'false', endingDay: 'true', selected: true, color: 'red'}
          }
        )
        updateIndex()
        props.onEndDateUpdate(day)
    }
  }

  return (
    <View>
      {/* {Reactotron.log('hello rendering world')} */}
      <ButtonGroup
        onPress={updateIndex}
        selectedIndex={calendarButtonIndex}
        buttons={['Start date ' + props.startDate, 'End Date ' + props.endDate]}
        // containerStyle={{height: 100}}
      />
      <Calendar
        // Initially visible month. Default = Date()
        // current={'2012-03-01'}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        // minDate={'2019-05-10'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        // maxDate={'2012-05-30'}
        // Handler which gets executed on day press. Default = undefined
        // onDayPress={(day) => { submitStartDate(day.dateString) }}
        // onDayPress={(day) => props.onStartDateUpdate(day) }
        onDayPress={(day) => { calendarButtonIndex === 0 ? handleStartDayPress(day) : handleEndDayPress(day) } }
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={(day) => props.onStartDateUpdate(day) }
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'MMMM yyyy'}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={(month) => { console.log('month changed', month) }}
        // Hide month navigation arrows. Default = false
        hideArrows={false}
        // Replace default arrows with custom ones (direction can be 'left' or 'right')
        // renderArrow={(direction) => (<Arrow />)}
        // renderArrow={() => (<Arrow />)}
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
        markingType={'period'}
        markedDates={dateSelected}
        />
      </View>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicInformationCalendar)