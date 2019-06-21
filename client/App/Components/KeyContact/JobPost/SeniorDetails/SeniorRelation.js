import React from 'react'

import { Text, View } from 'react-native'
import { Input } from 'react-native-elements'

import { Formik } from 'formik'
import { connect } from 'react-redux'

import { createSeniorProfile } from '../../../Styles/PostJob/SeniorDetailsStyles'

import PostJobBottomButtons from '../PostJobBottomButtons'

const mapStateToProps = state => {
	const { seniorName, relationship } = state.postJob.seniorDetails
	return {
		seniorName: seniorName,
		relationship: relationship
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSeniorRelationUpdate: (value) => dispatch({
			type: 'SENIORRELATION',
			payload: value
		})
	}
}

const SeniorRelation = props => {
	const initialFormValues = {
		relationship: '',
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
							What is your relationship to {props.seniorName}?
						</Text>
						<Input
							placeholder='Daughter/Friend/Neighbour'
							value={values.relationship}
							onChangeText={handleChange('relationship')}
							onBlur={handleBlur}
						/>
						<PostJobBottomButtons
							navigation={props.navigation}
							storeReduxData={values.relationship}
							storeReduxFunction={props.onSeniorRelationUpdate}
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

export default connect(mapStateToProps, mapDispatchToProps)(SeniorRelation)