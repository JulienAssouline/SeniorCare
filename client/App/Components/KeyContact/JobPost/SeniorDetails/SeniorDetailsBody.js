import React from 'react'
import { Text, View } from 'react-native'

import { Formik } from 'formik'

import SeniorName from './SeniorName'
import SeniorGender from './SeniorGender'
import SeniorBirthdate from './SeniorBirthdate'
import SeniorRelation from './SeniorRelation'
import SeniorBio from './SeniorBio'
import SeniorMedicalCondition from './SeniorMedicalCondition'
import SeniorLanguage from './SeniorLanguage'
import SeniorUploadAvatar from './SeniorUploadAvatar'

export default SeniorDetailsBody = props => {
	const { formPosition, setFormPosition } = props

	// const initialFormValues = {
	// 	seniorName: '',
	// 	gender: '',
	// 	birthdate: new Date(),
	// 	relationship: '',
	// 	bio: '',
	// 	medicalCondition: '',
	// 	language: '',
	// }

	switch (formPosition) {
		case 0:
			return (
				<SeniorName
					navigation={props.navigation}
					setFormPosition={setFormPosition}
				/>
			)
		case 1:
			return (
				<SeniorGender
					navigation={props.navigation}
					setFormPosition={setFormPosition}
				/>
			)
		case 2:
			return (
				<SeniorBirthdate
					navigation={props.navigation}
					setFormPosition={setFormPosition}
				/>
			)
		case 3:
			return (
				<SeniorRelation
					navigation={props.navigation}
					setFormPosition={setFormPosition}
				/>
			)
		case 4:
			return (
				<SeniorBio
					navigation={props.navigation}
					setFormPosition={setFormPosition}
				/>
			)
		case 5:
			return (
				<SeniorMedicalCondition
					navigation={props.navigation}
					setFormPosition={setFormPosition}
				/>
			)
		case 6:
			return (
				<SeniorLanguage
					navigation={props.navigation}
					setFormPosition={setFormPosition}
				/>
			)
		case 7:
			return (
				<SeniorUploadAvatar
					navigation={props.navigation}
					setFormPosition={setFormPosition}
				/>
			)
	}

	// return (
	// 	<Formik
	// 			initialValues={initialFormValues}
	// 			onSubmit={async (values, { setSubmitting }) => {
	// 				try {
	// 					console.log(values)
	// 				} catch(err) {
	// 					throw err
	// 				}
	// 				setSubmitting(false)
	// 			}}
	// 		>
	// 		{formikProps => {
	// 			const {
	// 				values,
	// 				touched,
	// 				errors,
	// 				dirty,
	// 				isSubmitting,
	// 				handleChange,
	// 				handleBlur,
	// 				handleSubmit,
	// 				handleReset,
	// 				setFieldValue,
	// 			} = formikProps

	// 			switch (formPosition) {
	// 				case 0:
	// 					return (
	// 						<SeniorName
	// 							values={values}
	// 							handleChange={handleChange}
	// 							handleBlur={handleBlur}
	// 							setFormPosition={setFormPosition}
	// 							navigation={props.navigation}
	// 						/>
	// 					)

	// 				case 1:
	// 					return (
	// 						<SeniorGender
	// 							values={values}
	// 							setFieldValue={setFieldValue}
	// 						/>
	// 					)

	// 				case 2:
	// 					return (
	// 						<SeniorBirthdate
	// 							values={values}
	// 							setFieldValue={setFieldValue}
	// 						/>
	// 					)

	// 				case 3:
	// 					return (
	// 						<SeniorRelation
	// 							values={values}
	// 							handleChange={handleChange}
	// 							handleBlur={handleBlur}
	// 						/>
	// 					)

	// 				case 4:
	// 					return (
	// 						<SeniorBio
	// 							values={values}
	// 							handleChange={handleChange}
	// 							handleBlur={handleBlur}
	// 						/>
	// 					)

	// 				case 5:
	// 					return (
	// 						<SeniorMedicalCondition
	// 							values={values}
	// 							handleChange={handleChange}
	// 							handleBlur={handleBlur}
	// 						/>
	// 					)

	// 				case 6:
	// 					return (
	// 						<SeniorLanguage
	// 							values={values}
	// 							handleChange={handleChange}
	// 							handleBlur={handleBlur}
	// 						/>
	// 					)

	// 				case 7:
	// 					return (
	// 						<SeniorUploadAvatar
	// 							values={values}
	// 						/>
	// 					)
				
	// 				default:
	// 					return (
	// 						<View>
	// 							<Text>Page default</Text>
	// 						</View>
	// 					)
	// 			}
	// 		}}
	// 		</Formik>
	// )
}