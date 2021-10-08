import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'

export default StyleSheet.create({
  container: {
    margin: 40,
    position: 'relative',
    height: 'auto',
    backgroundColor: '#fff',
    borderRadius: 25
  },
  corner: {
    position: 'absolute',
    width: 0,
    height: 0,
    left: 38,
    right: 'auto',
    bottom: -20,
    borderWidth: 12,
    borderTopColor: '#fff',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: '#fff'
  },
  text: {
    fontFamily: 'montserratSemibold',
    padding: 20,
    lineHeight: 18,
    color: colors.background
  }
})
