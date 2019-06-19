import React from 'react'

import { Text, View } from 'react-native'
import { Button, Input } from 'react-native-elements'

import { Formik } from 'formik'
import { connect } from 'react-redux'
import { seniorDetailsValidation } from '../../../../ValidationSchemas/postAJobValidation'

import { createSeniorProfile } from '../../../Styles/PostJob/SeniorDetailsStyles'

import PostJobBottomButtons from '../PostJobBottomButtons'

const mapStateToProps = state => {
	return {
		seniorName: state.seniorName
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSeniorNameUpdate: (value) => dispatch({
			type: 'SENIORNAME',
			payload: value
		})
	}
}

const SeniorName = props => {
	const { setFormPosition } = props

	const initialFormValues = {
		seniorName: '',
	}

	return (
		<Formik
			initialValues={initialFormValues}
			onSubmit={async (values, { setSubmitting }) => {
				console.log('about to submit')
				try {
					console.log('submitting in onSubmit SeniorName', values)
				} catch(err) {
					console.log('we have errors in onSubmit SeniorName: ', err)
					throw err
				}
				setSubmitting(false)
			}}
			validationSchema= {seniorDetailsValidation}
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
							What is the Senior's Name?
						</Text>
						<Input
							placeholder='Angel'
							value={values.seniorName}
							onChangeText={handleChange('seniorName')}
							onBlur={handleBlur}
						/>
						<PostJobBottomButtons
							navigation={props.navigation}
							setFormPosition={setFormPosition}
							storeReduxData={values.seniorName}
							storeReduxFunction={props.onSeniorNameUpdate}
							handleSubmit={handleSubmit}
							errors={errors}
							touched={touched}
						/>
					</View>
				)
			}}
		</Formik>

	)
}

export default connect(mapStateToProps, mapDispatchToProps)(SeniorName)