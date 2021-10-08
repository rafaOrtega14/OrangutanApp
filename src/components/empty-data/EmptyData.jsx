import React from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import styles from './EmptyDataStyle'

const DEFAULT_IMAGE = require('../../assets/images/vela.webp')

const EmptyData = ({ image, title, description, hasButton, buttonFn, buttonText, buttonIcon }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image style={styles.image} source={image || DEFAULT_IMAGE} />
        <Text style={styles.title}>{title || '¡Ups!'}</Text>
        <Text style={styles.description}>{description || 'Parece que no hay información disponible.'}</Text>
        {hasButton &&
          <TouchableOpacity
            onPress={buttonFn}
            style={styles.button}
          >
            {buttonIcon &&
              <View style={{ marginRight: 10 }}>
                {buttonIcon}
              </View>}
            <Text style={styles.buttonText}>{buttonText || 'Volver al inicio'}</Text>
          </TouchableOpacity>}
      </View>
    </View>
  )
}

export default EmptyData
