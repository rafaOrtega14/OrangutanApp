import React, { useRef, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import {
  useFonts,
  Montserrat_400Regular as montserrat,
  Montserrat_300Light as montserratLight,
  Montserrat_600SemiBold as montserratSemibold,
  Montserrat_700Bold as montserratBold
} from '@expo-google-fonts/montserrat'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './src/components/navigation/Navigation'
import Header from './src/components/header/Header'
import Constants from 'expo-constants'
import colors from './src/constants/colors'

export default function App () {
  const navigationRef = useRef()
  const [route, setRoute] = useState()

  const getActiveRouteName = () => navigationRef.current.getCurrentRoute().name

  const [fontsLoaded] = useFonts({
    montserrat,
    montserratLight,
    montserratSemibold,
    montserratBold
  })

  if (!fontsLoaded) {
    return null
  } else {
    return (
      <NavigationContainer
        ref={navigationRef}
        onReady={() => setRoute(getActiveRouteName)}
        onStateChange={() => setRoute(getActiveRouteName)}
      >
        <View style={styles.container}>
          <StatusBar style='auto' />
          <Header route={route} />
          <Navigation />
        </View>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,
    height: '100.6%',
    width: '100%',
    backgroundColor: colors.background
  }
})
