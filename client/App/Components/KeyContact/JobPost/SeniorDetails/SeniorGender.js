import React from 'react'

import { ScrollView, Text, View } from 'react-native'
import { Button } from 'react-native-elements'

import { Formik } from 'formik'
import { connect } from 'react-redux'

import { general, postJobButtons } from '../../../Styles/PostJob/PostJobGeneralStyles'
import { backgroundStyles } from '../../../Styles/GeneralStyles'
import { createSeniorProfile } from '../../../Styles/PostJob/SeniorDetailsStyles'
import { overview } from '../../../Styles/PostJob/OverviewStyles'

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
					<View style={{...backgroundStyles.background, ...overview.mainContainer}}>
						<ScrollView style={createSeniorProfile.mainContainer}>
							<Text style={general.question}>
								What is {props.seniorName}'s Gender?
							</Text>
							<View style={postJobButtons.mainButtonContainer}>
								<Button
									title='Female'
									titleStye={values.gender === 'female' ? postJobButtons.selectedText : postJobButtons.deselectedText}
									containerStyle={postJobButtons.buttonContainer}
									buttonStyle={values.gender === 'female' ? postJobButtons.selectedButton : postJobButtons.deselectedButton}
									type={values.gender === 'female' ? 'solid' : 'outline'}
									onPress={() => setFieldValue('gender', 'female')}
								/>
								<Button
									title='Male'
									titleStye={values.gender === 'male' ? postJobButtons.selectedText : postJobButtons.deselectedText}
									containerStyle={postJobButtons.buttonContainer}
									buttonStyle={values.gender === 'male' ? postJobButtons.selectedButton : postJobButtons.deselectedButton}
									type={values.gender === 'male' ? 'solid' : 'outline'}
									onPress={() => setFieldValue('gender', 'male')}
								/>
							</View>
							<View style={postJobButtons.mainButtonContainer}>
								<Button
									title='Other'
									titleStye={values.gender === 'other' ? postJobButtons.selectedText : postJobButtons.deselectedText}
									containerStyle={postJobButtons.buttonContainer}
									buttonStyle={values.gender === 'other' ? postJobButtons.selectedButton : postJobButtons.deselectedButton}
									type={values.gender === 'other' ? 'solid' : 'outline'}
									onPress={() => setFieldValue('gender', 'other')}
								/>
							</View>
						</ScrollView>
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