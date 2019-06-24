import React from 'react'
import Auth from '@aws-amplify/auth'

export default async function checkCognitoSession(props) {

  await Auth.currentSession()
    .then(data => {
      props.onKeyContactIdUpdate(data.accessToken.payload.username)
      // setUserID(data.accessToken.payload.username)
    })
    .catch(err => console.log(err))
  await checkSignedInUserId(
    (userId, props) => {
      if (userId == null) {
        signOut = async props => {
          await Auth.signOut()
            .then(() => {
              console.log('Sign out complete')
              props.navigation.navigate('Authloading')
            })
            .catch(err => console.log('Error while signing out!', err))
        }
      }
    }
  )
}