import { connect } from 'react-redux'
import React, {useState} from 'react'
import { Formik } from 'formik';
import { View, Text } from 'react-native'
import { Button, Input } from 'react-native-elements'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars'
import PostJobBottomButtons from '../PostJobBottomButtons'
import { general } from '../../../Styles/PostJob/PostJobGeneralStyles'

const mapStateToProps = state => {
	const { address, city, postalCode, province } = state.postJob.basicInformation
  return {
    address: address,
    city: city,
    postalCode: postalCode,
    province: province,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddressUpdate: (values) => dispatch({type: 'ADDRESS', payload: values}),
  }
}

const BasicInformationAddress = (props) => {

  return (
    <View style={{flex: 1}}>
			<Text style={general.question}>Where will the service take place?</Text>
			<Text>You address will not be displayed on your profile</Text>
			<Formik
				initialValues={{
					address: "",
					city: "",
					province: "",
					postalCode: ""
				}}
				//onSubmit={values => console.log(values)}
				//onSubmit={values => submitAddressValues(values)}
				onSubmit={values => props.onAddressUpdate(values)}
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
						<Text style={general.formInputTitle}>Address</Text>
						<Input
							placeholder="31 Iceboat Terrace"
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
						<Text style={general.formInputTitle}>City</Text>
						<Input
							placeholder="Toronto"
							name="city"
							onChangeText={handleChange("city")}
							onBlur={handleBlur}
							value={values.city}
						/>
						<Text style={general.formInputTitle}>Province</Text>
						<Input
							placeholder="Ontario"
							name="province"
							onChangeText={handleChange("province")}
							onBlur={handleBlur}
							value={values.province}
						/>
						<Text style={general.formInputTitle}>Postal Code</Text>
						<Input
							placeholder="M5V 3E9"
							name="postalCode"
							onChangeText={handleChange("postalCode")}
							onBlur={handleBlur}
							value={values.postalCode}
						/>
						<Text />
						{/* {errors.password && touched.password && errors.password} */}
						<PostJobBottomButtons
							navigation={props.navigation}
							storeReduxData={values}
							storeReduxFunction={props.onAddressUpdate}
							handleSubmit={handleSubmit}
							errors={errors}
							touched={touched}
							lastPosition={3}
						/>
					</View>
				)}
			</Formik>
		</View>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicInformationAddress)