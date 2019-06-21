import React from 'react'

import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'

import { Formik } from 'formik'
import { connect } from 'react-redux'

import PostJobBottomButtons from '../PostJobBottomButtons'

const mapStateToProps = state => {
	const { preferredGender, availability } = state.postJob.caregiverPreferences
	return {
		availability: availability,
		preferredGender: preferredGender,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onCaregiverPref1Update: (value) => dispatch({
			type: 'CAREGIVERPREF1',
			payload: value
		})
	}
}

const CaregiverPref1 = props => {
	const initialFormValues = {
		availability: props.availability,
		preferredGender: props.preferredGender
	}

	return (
		<Formik
			initialValues={initialFormValues}
			onSubmit={(values, { setSubmitting }) => {
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
					<View>
						<View>
							<Text>Availability</Text>
							<Button
								title='Live in'
								type={values.availability === 'livein' ? 'solid' : 'outline'}
								onPress={() => setFieldValue('availability', 'livein')}
							/>
							<Button
								title='Live out'
								type={values.availability === 'liveout' ? 'solid' : 'outline'}
								onPress={() => setFieldValue('availability', 'liveout')}
							/>
						</View>

						<View>
							<Text>Preferred Gender of the caregiver?</Text>
							<Button
								title='Female'
								type={values.preferredGender === 'female' ? 'solid' : 'outline'}
								onPress={() => setFieldValue('preferredGender', 'female')}
							/>
							<Button
								title='Male'
								type={values.preferredGender === 'male' ? 'solid' : 'outline'}
								onPress={() => setFieldValue('preferredGender', 'male')}
							/>
							<Button
								title='Other'
								type={values.preferredGender === 'other' ? 'solid' : 'outline'}
								onPress={() => setFieldValue('preferredGender', 'other')}
							/>
							<Button
								title='No preference'
								type={values.preferredGender === 'nopreference' ? 'solid' : 'outline'}
								onPress={() => setFieldValue('preferredGender', 'nopreference')}
							/>
						</View>

						<PostJobBottomButtons
							navigation={props.navigation}
							storeReduxData={values}
							storeReduxFunction={props.onCaregiverPref1Update}
							handleSubmit={handleSubmit}
							errors={errors}
							touched={touched}
							lastPosition={1}
						/>
					</View>
				)
			}}
		</Formik>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(CaregiverPref1)