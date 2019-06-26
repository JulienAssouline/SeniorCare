import React from 'react'

import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'

import { Formik } from 'formik'
import { connect } from 'react-redux'

import PostJobBottomButtons from '../PostJobBottomButtons'
import { style } from '../../../Styles/PostJob/PostJobButtonsStyles'
import { general, postJobButtons } from '../../../Styles/PostJob/PostJobGeneralStyles';



const mapStateToProps = state => {
	const { validDriverLicense } = state.postJob.caregiverPreferences
	return {
		validDriverLicense: validDriverLicense,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onCaregiverPref2Update: (value) => dispatch({
			type: 'CAREGIVERPREF2',
			payload: value
		})
	}
}

const CaregiverPref1 = props => {
	const initialFormValues = {
		validDriverLicense: props.validDriverLicense,
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
							<Text style={general.question}>Should the caregiver have a valid driver's license?</Text>
							<View style={style.splitButtonContainer}>
								<Button
									title='Yes'
									titleStye={values.validDriverLicense === true ? postJobButtons.selectedText : postJobButtons.deselectedText}
									containerStyle={postJobButtons.buttonContainer}
									buttonStyle={values.validDriverLicense === true ? postJobButtons.selectedButton : postJobButtons.deselectedButton}
									type={values.validDriverLicense === true ? 'solid' : 'outline'}
									onPress={() => setFieldValue('validDriverLicense', true)}
								/>
								<Button
									title='No'
									titleStye={values.validDriverLicense === false ? postJobButtons.selectedText : postJobButtons.deselectedText}
									containerStyle={postJobButtons.buttonContainer}
									buttonStyle={values.validDriverLicense === false ? postJobButtons.selectedButton : postJobButtons.deselectedButton}
									type={values.validDriverLicense === false ? 'solid' : 'outline'}
									onPress={() => setFieldValue('validDriverLicense', false)}
								/>
							</View>
						</View>

						<PostJobBottomButtons
							navigation={props.navigation}
							storeReduxData={values.validDriverLicense}
							storeReduxFunction={props.onCaregiverPref2Update}
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