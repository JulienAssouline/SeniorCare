import React from 'react'

import { ScrollView, Text, View } from 'react-native'
import { Button, Input } from 'react-native-elements'

import { Formik } from 'formik'
import { connect } from 'react-redux'
import { seniorDetailsValidation } from '../../../../ValidationSchemas/postAJobValidation'

import { createSeniorProfile } from '../../../Styles/PostJob/SeniorDetailsStyles'

import PostJobBottomButtons from '../PostJobBottomButtons'

const mapStateToProps = state => {
	const { seniorName, formPosition } = state.postJob.seniorDetails
	return {
		formPosition: formPosition,
		seniorName: seniorName
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
	const initialFormValues = {
		seniorName: props.seniorName,
	}

	return (
		<Formik
			initialValues={initialFormValues}
			onSubmit={async (values, { setSubmitting }) => {
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
							storeReduxData={values.seniorName}
							storeReduxFunction={props.onSeniorNameUpdate}
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

export default connect(mapStateToProps, mapDispatchToProps)(SeniorName)