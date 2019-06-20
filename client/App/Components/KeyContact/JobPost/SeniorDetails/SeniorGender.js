import React from 'react'

import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'

import { Formik } from 'formik'
import { connect } from 'react-redux'

import { createSeniorProfile } from '../../../Styles/PostJob/SeniorDetailsStyles'

import PostJobBottomButtons from '../PostJobBottomButtons'

const mapStateToProps = state => {
	const { gender, seniorName } = state.postJob.seniorDetails
	return {
		seniorName: seniorName,
		gender: gender
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSeniorGenderUpdate: (value) => dispatch({
			type: 'SENIORGENDER',
			payload: value
		})
	}
}

const SeniorGender = props => {

	const initialFormValues = {
		gender: props.gender,
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
							What is {props.seniorName}'s Gender?
						</Text>
						<Button
							title='Female'
							type='outline'
							onPress={() => setFieldValue('gender', 'female')}
						/>
						<Button
							title='Male'
							type='outline'
							onPress={() => setFieldValue('gender', 'male')}
						/>
						<Button
							title='Other'
							type='outline'
							onPress={() => setFieldValue('gender', 'female')}
						/>
						<PostJobBottomButtons
							navigation={props.navigation}
							storeReduxData={values.gender}
							storeReduxFunction={props.onSeniorGenderUpdate}
							handleSubmit={handleSubmit}
							errors={errors}
							touched={touched}
							lastPosition={7}
						/>
					</View>
				)
			}}
		</Formik>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(SeniorGender)