import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Button, Input } from 'react-native-elements'

import { Formik } from 'formik'

import PostJobTop from '../PostJobTop'
import PostJobBottomButtons from '../PostJobBottomButtons'

import { createSeniorProfile } from '../../../Styles/PostJob/SeniorDetailsStyles'

export default CreateNewSeniorProfile = props => {
	const [formPosition, setFormPosition] = useState(0)

	const initialFormValues = {
		seniorName: '',
		gender: '',
		birthdate: '',
		
		bio: '',
		medicalCondition: '',
		language: '',
	}
	
	return (
		<ScrollView>
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
							</View>
						)

					case 1:
						return (
							<View style={createSeniorProfile.mainContainer}>
								<Text style={createSeniorProfile.question}>
									What is {values.seniorName} Gender?
								</Text>
								<Button
									title='Female'
									type='outline'
									onPress={() => setFieldValue('gender', 'female')}
								/>
								<Button
									title='Male'
									type='outline'
									onPress={() => setFieldValue('gender', 'male')}
								/>
								<Button
									title='Other'
									type='outline'
									onPress={() => setFieldValue('gender', 'female')}
								/>
							</View>
						)

					case 2:
						return (
							<View style={createSeniorProfile.mainContainer}>
								<Text style={createSeniorProfile.question}>
									When is {values.seniorName}'s birth date?
								</Text>
								<Text>Page 3</Text>
							</View>
						)

					case 3:
						return (
							<View style={createSeniorProfile.mainContainer}>
								<Text style={createSeniorProfile.question}>
									What is your relationship to {values.seniorName}?
								</Text>
								<Input
									placeholder='Daughter/Friend/Neighbour'
									value={values.relationship}
									onChangeText={handleChange('relationship')}
									onBlur={handleBlur}
								/>
							</View>
						)

					case 4:
						return (
							<View style={createSeniorProfile.mainContainer}>
								<Text style={createSeniorProfile.question}>
									Tell us more about {values.seniorName}!
								</Text>
								<Input
									placeholder='Tell us anything! You can tell us about likes/dislikes or any activities they enjoy. We like to get a sense of personality.'
									value={values.bio}
									onChangeText={handleChange('bio')}
									onBlur={handleBlur}
								/>
							</View>
						)

					case 5:
						return (
							<View style={createSeniorProfile.mainContainer}>
								<Text style={createSeniorProfile.question}>
									Are there any medical conditions to be aware of?
								</Text>
								<Input
									placeholder='Tell us about any medical conditions that we need to be aware of.'
									value={values.medicalCondition}
									onChangeText={handleChange('medicalCondition')}
									onBlur={handleBlur}
								/>
							</View>
						)

					case 6:
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
							</View>
						)

					case 7:
						return (
							<View style={createSeniorProfile.mainContainer}>
								<Text style={createSeniorProfile.question}>
									Please add a picture of {values.seniorName}.
								</Text>
								<Text>
									Adding a picture helps complete your profile and increases your chances to be viewed.
								</Text>
								<Input
									placeholder='Knows some English but mostly speaks french, etc.'
									value={values.language}
									onChangeText={handleChange('language')}
									onBlur={handleBlur}
								/>
							</View>
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