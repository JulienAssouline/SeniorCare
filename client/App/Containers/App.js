/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
// Package imports
import apolloClient from '../../apolloClient'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import AppContainer from './AppContainer'

const App = () => {
  return (
    <ApolloHooksProvider client={apolloClient}>
      <AppContainer />
    </ApolloHooksProvider>
  )
}

export default App