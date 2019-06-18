import React from 'react'

import { Text, View } from 'react-native'
import { Input } from 'react-native-elements'		

import { Formik } from 'formik'
import { connect } from 'react-redux'

import { createSeniorProfile } from '../../../Styles/PostJob/SeniorDetailsStyles'

import PostJobBottomButtons from '../PostJobBottomButtons'

const mapStateToProps = state => {
	return {
		seniorLanguage: state.seniorLanguage
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSeniorLanguageUpdate: (value) => dispatch({
			type: 'SENIORLANGUAGE',
			payload: value
		})
	}
}

const SeniorLanguage = props => {
	const { setFormPosition } = props

	const initialFormValues = {
		language: '',
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
							Do you have any language Preferences?
						</Text>
						<Input
							placeholder='Knows some English but mostly speaks french, etc.'
							value={values.language}
							onChangeText={handleChange('language')}
							onBlur={handleBlur}
						/>
						<PostJobBottomButtons
							navigation={props.navigation}
							setFormPosition={setFormPosition}
							storeReduxData={values.language}
							storeReduxFunction={props.onSeniorLanguageUpdate}
						/>
					</View>
				)
			}}
		</Formik>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(SeniorLanguage)