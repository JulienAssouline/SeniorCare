
import { connect } from 'react-redux'
import React, {useState} from 'react'
import { Formik } from 'formik';
import { View, Text, TextInput } from 'react-native'
import { Button } from 'react-native-elements'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars'

const mapStateToProps = state => {
  return {
    address: state.address,
    city: state.city,
    postalCode: state.postalCode,
    province: state.province,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddressUpdate: (values) => dispatch({type: 'ADDRESS', payload: values}),
  }
}

const BasicInformationAddress = (props) => {

  return (
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
                  <Text>Redux State: {props.address} {props.city} {props.postalCode} {props.province}</Text>
                  <Button
                    // disabled={isSubmitting}
                    title="Submit"
                    onPress={handleSubmit}
                  />
                </View>
              )}
            </Formik>
          </View>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicInformationAddress)