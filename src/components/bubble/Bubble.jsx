import React from 'react'
import { View, Text } from 'react-native'
import styles from './BubbleStyles'

const Bubble = ({ text }) => {
  return (
    <View style={[styles.container]}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.corner} />
    </View>
  )
}

export default Bubble
