import React from 'react'

import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'

import { Formik } from 'formik'
import { connect } from 'react-redux'

import PostJobBottomButtons from '../PostJobBottomButtons'
import { style } from '../../../Styles/PostJob/PostJobButtonsStyles'
import { general } from '../../../Styles/PostJob/PostJobGeneralStyles';

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
							<Text style={general.question}>Availability</Text>
							<View style={style.splitButtonContainer}>
								<Button
									buttonStyle={style.serviceButton}
									containerStyle={style.serviceButtonContainer}
									title='Live in'
									type={values.availability === 'livein' ? 'solid' : 'outline'}
									onPress={() => setFieldValue('availability', 'livein')}
								/>
								<Button
									buttonStyle={style.serviceButton}
									containerStyle={style.serviceButtonContainer}
									title='Live out'
									type={values.availability === 'liveout' ? 'solid' : 'outline'}
									onPress={() => setFieldValue('availability', 'liveout')}
								/>
							</View>
						</View>

						<View>
							<Text style={general.question}>Preferred Gender of the caregiver?</Text>
							<View style={style.splitButtonContainer}>
								<Button
									buttonStyle={style.serviceButton}
									containerStyle={style.serviceButtonContainer}
									title='Female'
									type={values.preferredGender === 'female' ? 'solid' : 'outline'}
									onPress={() => setFieldValue('preferredGender', 'female')}
								/>
								<Button
									buttonStyle={style.serviceButton}
									containerStyle={style.serviceButtonContainer}
									title='Male'
									type={values.preferredGender === 'male' ? 'solid' : 'outline'}
									onPress={() => setFieldValue('preferredGender', 'male')}
								/>
							</View>
							<View style={style.splitButtonContainer}>
								<Button
									buttonStyle={style.serviceButton}
									containerStyle={style.serviceButtonContainer}
									title='Other'
									type={values.preferredGender === 'other' ? 'solid' : 'outline'}
									onPress={() => setFieldValue('preferredGender', 'other')}
								/>
								<Button
									buttonStyle={style.serviceButton}
									containerStyle={style.serviceButtonContainer}
									title='No preference'
									type={values.preferredGender === 'nopreference' ? 'solid' : 'outline'}
									onPress={() => setFieldValue('preferredGender', 'nopreference')}
								/>
							</View>
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