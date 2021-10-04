import React from 'react'
import App from './AppContainer'
import StateContextProvider from './src/context/context'

export default function () {
  return <StateContextProvider><App /></StateContextProvider>
}
