import React, {useState} from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from '../../Styles/JobDashboardScreen/JobDashboardScreenStyle'
import Slider from '@react-native-community/slider';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars'
import { Formik } from 'formik';
import { Button, ButtonGroup, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import Reactotron from 'reactotron-react-native'
import moment from 'moment';

const BasicInformationBody = props => {

    const minimumRate = 14
    const maximumRate = 150

		let body;
		
		// let startDateString = 'Start Date';
		// let endDate = 'End Date';

		const [valueTitleStore, setTitleValue] = useState(0)
		const [calendarButtonIndex, setCalendarButtonIndex] = useState(0)
		const [startDayStore, setStartDate] = useState('')
    const [valuesAddressStore, setAddressValues] = useState({})
    const [valueRateStore, setRate] = useState(0)

		const submitTitleValue = (value) => {
			setTitleValue(value)
			console.log('value of title in submitTitleValue ', value);
		}

		const updateIndex = (selectedIndex) => {
			setCalendarButtonIndex(selectedIndex)
		}

		const submitStartDate = (dateString) => {
      let date = moment(dateString).format('MMMM DD')
      console.log('date is ', date)
      setStartDate(date)
			//console.log('value of start date in submitDayStart', dateString)
		}	

    const submitAddressValues = (values) => {
        setAddressValues(values)
        //props.currentPosition = 3;
        console.log('values in submitAddressValues', values)
    }

    const submitRateValue = (value) => {
        setRate(value)
        console.log('value in valueRateStore', value)
		}

    if (props.currentPosition === 0) {
        body = 
        <View>
          <Text>What is the title of this job?</Text>
          <Formik
						initialValues={{ title: '' }}
						//onSubmit={values => console.log(values)}
						onSubmit={values => submitTitleValue(values)}
						// validate={values => {
						//     let errors = {};
						//     if (!values.email) {
						//     errors.email = 'Required';
						//     } else if (
						//     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
						//     ) {
						//     errors.email = 'Invalid email address';
						//     }
						//     return errors;
						// }}
						// onSubmit={(values, { setSubmitting }) => {
						//     setTimeout(() => {
						//     alert(JSON.stringify(values, null, 2));
						//     setSubmitting(false);
						//     }, 400);
						// }}
						>
						{({
							values,
							errors,
							touched,
							handleChange,
							handleBlur,
							handleSubmit,
							isSubmitting,
						}) => (
							<View>
								<TextInput
									type="text"
									name="title"
									onChangeText={handleChange('title')}
									onBlur={handleBlur}
									value={values.title}
								/>
								<Text></Text>
								<Button 
									// disabled={isSubmitting}
									title="Submit"
									onPress={handleSubmit}
								/>
							</View>
						)}
          </Formik>
        </View>
    } else if (props.currentPosition === 1) {
        body = 
				<View>
          {/* {Reactotron.log('hello rendering world')} */}
					<ButtonGroup
						onPress={updateIndex}
						selectedIndex={calendarButtonIndex}
						buttons={['Start date ' + startDayStore, 'End Date']}
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
						onDayPress={(day) => { submitStartDate(day.dateString) }}
						// Handler which gets executed on day long press. Default = undefined
						onDayLongPress={(day) => { submitStartDate(day.dateString) }}
						// Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
						monthFormat={'MMMM yyyy'}
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
        body = (
          <View>
            <Text>Where will the service take place?</Text>
            <Formik
              initialValues={{
                address: "",
                city: "",
                province: "",
                postalCode: ""
              }}
              //onSubmit={values => console.log(values)}
              onSubmit={values => submitAddressValues(values)}
              // validate={values => {
              //     let errors = {};
              //     if (!values.email) {
              //     errors.email = 'Required';
              //     } else if (
              //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              //     ) {
              //     errors.email = 'Invalid email address';
              //     }
              //     return errors;
              // }}
              // onSubmit={(values, { setSubmitting }) => {
              //     setTimeout(() => {
              //     alert(JSON.stringify(values, null, 2));
              //     setSubmitting(false);
              //     }, 400);
              // }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
              }) => (
                <View>
                  <Text>Address</Text>
                  <TextInput
                    type="text"
                    name="address"
                    onChangeText={handleChange("address")}
                    onBlur={handleBlur}
                    value={values.address}
                  />
                  {/* <TextInput
                                    onChangeText={props.handleChange('email')}
                                    onBlur={props.handleBlur('email')}
                                    value={props.values.email}
                                /> */}
                  {/* {errors.email && touched.email && errors.email} */}
                  <Text>City</Text>
                  <TextInput
                    type="text"
                    name="city"
                    onChangeText={handleChange("city")}
                    onBlur={handleBlur}
                    value={values.city}
                  />
                  <Text>Province</Text>
                  <TextInput
                    type="text"
                    name="province"
                    onChangeText={handleChange("province")}
                    onBlur={handleBlur}
                    value={values.province}
                  />
                  <Text>Postal Code</Text>
                  <TextInput
                    type="text"
                    name="postalCode"
                    onChangeText={handleChange("postalCode")}
                    onBlur={handleBlur}
                    value={values.postalCode}
                  />
                  <Text />
                  {/* {errors.password && touched.password && errors.password} */}
                  <Button
                    // disabled={isSubmitting}
                    title="Submit"
                    onPress={handleSubmit}
                  />
                </View>
              )}
            </Formik>
          </View>
        );

        body = <View><Text>Where will the service take place?</Text></View>

    } else if (props.currentPosition === 3) {
        body = 
				<View>
					<Text>The hourly rate is</Text>
					<Text>*Minimum wage varies per province/territory in Canada</Text>
					<Text>${Math.round(valueRateStore)}</Text>
					<Slider
							// style={{width: 200, height: 40}}
							minimumValue={minimumRate}
							maximumValue={maximumRate}
							minimumTrackTintColor="#000000"
							maximumTrackTintColor="#000000"
							onSlidingComplete={value => submitRateValue(value)}
					/>
					<Text>${Math.round(minimumRate)}</Text>
        </View>
    }

    return (
        body
    )
}

export default BasicInformationBody