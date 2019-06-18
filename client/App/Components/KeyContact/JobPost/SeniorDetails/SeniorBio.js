import React from 'react'

import { Text, TextInput, View } from 'react-native'

import { Formik } from 'formik'
import { connect } from 'react-redux'

import { createSeniorProfile } from '../../../Styles/PostJob/SeniorDetailsStyles'

import PostJobBottomButtons from '../PostJobBottomButtons'

const mapStateToProps = state => {
	return {
		seniorBio: state.seniorBio
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSeniorBioUpdate: (value) => dispatch({
			type: 'SENIORBIO',
			payload: value
		})
	}
}

const SeniorBio = props => {
	const { setFormPosition } = props

	const initialFormValues = {
		bio: '',
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
							Tell us more about (insert senior name)!
						</Text>
						<View style={createSeniorProfile.multilineTextBox}>
							<TextInput
								value={values.bio}
								onChangeText={handleChange('bio')}
								placeholder='Tell us anything! You can tell us about likes/dislikes or any activities they enjoy. We like to get a sense of personality.'
								editable={true}
								multiline={true}
								numberOfLines={4}
								style={createSeniorProfile.multilineTextArea}
							/>
						</View>
						<PostJobBottomButtons
							navigation={props.navigation}
							setFormPosition={setFormPosition}
							storeReduxData={values.bio}
							storeReduxFunction={props.onSeniorBioUpdate}
						/>
					</View>
				)
			}}
		</Formik>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(SeniorBio)