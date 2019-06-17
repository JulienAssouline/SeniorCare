import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native' 

import { Formik } from 'formik'

import { backgroundStyles } from '../../../Styles/GeneralStyles'

import PostJobTop from '../PostJobTop'
import PostJobBottomButtons from '../PostJobBottomButtons'
import Cannabis from './Cannabis'
import Pets from './Pets'
import CigSmoke from './CigSmoke'

export default HouseDetails = props => {
	const [formPosition, setFormPosition] = useState(0)

	const initialFormValues = {
		cigSmoking: '',
		pets: '',
		cannabis: '',
	}

	return (
		<ScrollView style={backgroundStyles.background}>
			<PostJobTop
				title='House Details'
				currentPosition={1}
				stepCount={1}
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

					return (
						<View>
							<CigSmoke
								setFieldValue={setFieldValue}
							/>


							<Pets
								setFieldValue={setFieldValue}
							/>

							<Cannabis
								setFieldValue={setFieldValue}
							/>
						</View>
					)
				}}
			</Formik>

			<PostJobBottomButtons
				navigation={props.navigation}
				setFormPosition={setFormPosition}
			/>
		</ScrollView>
	)
}