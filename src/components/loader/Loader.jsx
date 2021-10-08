import React, { useEffect } from 'react'
import { View, Text, Animated, Easing } from 'react-native'
import styles from './LoaderStyles'

const DEFAULT_IMAGE = require('../../assets/images/vela.webp')

const Loader = () => {
  const rotateValueHolder = new Animated.Value(0)

  const startImageRotateFunction = () => {
    rotateValueHolder.setValue(0)
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: false
    }).start(() => startImageRotateFunction())
  }

  const RotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ['360deg', '0deg']
  })

  useEffect(() => {
    startImageRotateFunction()
  })

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Animated.Image
          style={{
            width: 150,
            height: 150,
            transform: [{ rotate: RotateData }]
          }}
          source={DEFAULT_IMAGE}
        />
        <Text style={styles.text}>Cargando...</Text>
      </View>
    </View>
  )
}

export default Loader
