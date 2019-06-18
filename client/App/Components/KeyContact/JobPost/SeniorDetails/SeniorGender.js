import React from 'react'

import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'

import { Formik } from 'formik'
import { connect } from 'react-redux'

import { createSeniorProfile } from '../../../Styles/PostJob/SeniorDetailsStyles'

import PostJobBottomButtons from '../PostJobBottomButtons'

const mapStateToProps = state => {
	return {
		seniorGender: state.seniorGender
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
	const { setFormPosition } = props

	const initialFormValues = {
		gender: '',
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
							What is (insert seinor name) Gender?
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
							setFormPosition={setFormPosition}
							storeReduxData={values.gender}
							storeReduxFunction={props.onSeniorGenderUpdate}
						/>
					</View>
				)
			}}
		</Formik>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(SeniorGender)