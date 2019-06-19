import React from 'react'

import { DatePickerIOS, Text, View } from 'react-native'

import { Formik } from 'formik'
import { connect } from 'react-redux'

import { createSeniorProfile } from '../../../Styles/PostJob/SeniorDetailsStyles'

import PostJobBottomButtons from '../PostJobBottomButtons'

const mapStateToProps = state => {
	return {
		seniorBirthdate: state.seniorBirthdate
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSeniorBirthdateUpdate: (value) => dispatch({
			type: 'SENIORBIRTHDATE',
			payload: value
		})
	}
}

const SeniorBirthdate = props => {

	const initialFormValues = {
		birthdate: new Date(),
	}

	return (
		<Formik
			initialValues={initialFormValues}
			onSubmit={async (values, { setSubmitting }) => {
				try {
					console.log(values)
				} catch(err) {
					throw err
				}
				setSubmitting(false)
			}}
		>
			{formikProps => {
				const {
					values,
					touched,
					errors,
					dirty,
					isSubmitting,
					handleChange,
					handleBlur,
					handleSubmit,
					handleReset,
					setFieldValue,
				} = formikProps

				return (
					<View style={createSeniorProfile.mainContainer}>
						<Text style={createSeniorProfile.question}>
							When is (insert seinor name)'s birth date?
						</Text>
						<DatePickerIOS
							date={values.birthdate}
							mode={'date'}
							onDateChange={newDate => setFieldValue('birthdate', newDate)}
						/>
						<PostJobBottomButtons
							navigation={props.navigation}
							storeReduxData={values.birthdate}
							storeReduxFunction={props.onSeniorBirthdateUpdate}
							handleSubmit={handleSubmit}
							error={errors}
						/>
					</View>
				)
			}}
		</Formik>
	)
}


export default connect(mapStateToProps, mapDispatchToProps)(SeniorBirthdate)