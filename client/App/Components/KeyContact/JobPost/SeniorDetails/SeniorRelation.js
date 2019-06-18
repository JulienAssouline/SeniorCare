import React from 'react'

import { Text, View } from 'react-native'
import { Input } from 'react-native-elements'

import { Formik } from 'formik'
import { connect } from 'react-redux'

import { createSeniorProfile } from '../../../Styles/PostJob/SeniorDetailsStyles'

import PostJobBottomButtons from '../PostJobBottomButtons'

const mapStateToProps = state => {
	return {
		seniorRelation: state.seniorRelation
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
	const { setFormPosition } = props

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
							What is your relationship to (insert seinor name)?
						</Text>
						<Input
							placeholder='Daughter/Friend/Neighbour'
							value={values.relationship}
							onChangeText={handleChange('relationship')}
							onBlur={handleBlur}
						/>
						<PostJobBottomButtons
							navigation={props.navigation}
							setFormPosition={setFormPosition}
							storeReduxData={values.relationship}
							storeReduxFunction={props.onSeniorRelationUpdate}
						/>
					</View>
				)
			}}
		</Formik>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(SeniorRelation)