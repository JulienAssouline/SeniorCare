
import { connect } from 'react-redux'
import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { Formik } from 'formik';
import { Button } from 'react-native-elements'
import PostJobBottomButtons from './PostJobBottomButtons'

const mapStateToProps = state => {
	const { title } = state.postJob.basicInformation
  return {
    title: title
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTitleUpdate: (values) => dispatch({type: 'TITLE', payload: values}),
  }
}

const BasicInformationTitle = (props) => {
  return (
    <View>
      <Text>What is the title of this job?</Text>
      <Formik
        initialValues={{ title: '' }}
        //onSubmit={values => console.log(values)}
        // onSubmit={values => submitTitleValue(values)}
        onSubmit={values => props.onTitleUpdate(values)}
        // validate={values => {
        //     let errors = {};
        //     if (!values.email) {
        //     errors.email = 'Required';
        //     } else if (
        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //     ) {
        //     errors.email = 'Invalid email address';
        //     }
        //     return errors;
        // }}
        // onSubmit={(values, { setSubmitting }) => {
        //     setTimeout(() => {
        //     alert(JSON.stringify(values, null, 2));
        //     setSubmitting(false);
        //     }, 400);
        // }}
        >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <View>
            <TextInput
              type="text"
              name="title"
              onChangeText={handleChange('title')}
              onBlur={handleBlur}
              value={values.title}
            />
            <Text>Redux state: {props.title}</Text>
            <Button 
              // disabled={isSubmitting}
              title="Submit"
              onPress={handleSubmit}
            />
						<PostJobBottomButtons
							navigation={props.navigation}
							storeReduxData={values.title}
							storeReduxFunction={props.onTitleUpdate}
							handleSubmit={handleSubmit}
							errors={errors}
							touched={touched}
							lastPosition={3}
						/>
          </View>
        )}
      </Formik>
    </View>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicInformationTitle)