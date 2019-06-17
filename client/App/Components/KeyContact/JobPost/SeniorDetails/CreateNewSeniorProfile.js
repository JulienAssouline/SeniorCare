import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'

import { Formik } from 'formik'

import PostJobTop from '../PostJobTop'
import PostJobBottomButtons from '../PostJobBottomButtons'
import SeniorName from './SeniorName'
import SeniorGender from './SeniorGender';
import SeniorBirthdate from './SeniorBirthdate';
import SeniorRelation from './SeniorRelation';
import SeniorBio from './SeniorBio';
import SeniorMedicalCondition from './SeniorMedicalCondition';
import SeniorLanguage from './SeniorLanguage';
import SeniorUploadAvatar from './SeniorUploadAvatar';

import { defaultStyles } from '../../../Styles/PostJob/SeniorDetailsStyles'

export default CreateNewSeniorProfile = props => {
	const [formPosition, setFormPosition] = useState(0)

	const initialFormValues = {
		seniorName: '',
		gender: '',
		birthdate: '',
		relationship: '',
		bio: '',
		medicalCondition: '',
		language: '',
	}
	
	return (
		<ScrollView style={defaultStyles.background}>
			<PostJobTop
				title="Senior's Profile"
				currentPosition={formPosition}
				stepCount={8}
			/>

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

				switch (formPosition) {
					case 0:
						return (
							<SeniorName
								values={values}
								handleChange={handleChange}
								handleBlur={handleBlur}
							/>
						)

					case 1:
						return (
							<SeniorGender
								values={values}
								setFieldValue={setFieldValue}
							/>
						)

					case 2:
						return (
							<SeniorBirthdate
								values={values}
							/>
						)

					case 3:
						return (
							<SeniorRelation
								values={values}
								handleChange={handleChange}
								handleBlur={handleBlur}
							/>
						)

					case 4:
						return (
							<SeniorBio
								values={values}
								handleChange={handleChange}
								handleBlur={handleBlur}
							/>
						)

					case 5:
						return (
							<SeniorMedicalCondition
								values={values}
								handleChange={handleChange}
								handleBlur={handleBlur}
							/>
						)

					case 6:
						return (
							<SeniorLanguage
								values={values}
								handleChange={handleChange}
								handleBlur={handleBlur}
							/>
						)

					case 7:
						return (
							<SeniorUploadAvatar
								values={values}
							/>
						)
				
					default:
						return (
							<View>
								<Text>Page default</Text>
							</View>
						)
				}
			}}
			</Formik>

			<PostJobBottomButtons
				navigation={props.navigation}
			 	setFormPosition={setFormPosition}
			/>
		</ScrollView>
	)
}