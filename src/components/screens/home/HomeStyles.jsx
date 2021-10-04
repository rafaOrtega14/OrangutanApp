import { StyleSheet } from 'react-native'
import colors from '../../../constants/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    overflow: 'hidden'
  },
  icon: {
    height: 36,
    width: 36
  },
  imageBackground: {
    height: 300,
    width: 300,
    position: 'absolute',
    top: '10%',
    left: '60%',
    borderColor: '#000',
    borderWidth: 10,
    borderRadius: 1000
  },
  description: {
    marginBottom: 20,
    flex: 1,
    paddingRight: 20,
    paddingLeft: 20
  },
  h1: {
    fontSize: 30,
    fontFamily: 'montserratBold',
    color: '#fff',
    marginBottom: 4
  },
  h5: {
    fontFamily: 'montserratSemibold',
    color: '#fff',
    fontSize: 16,
    marginBottom: 4
  },
  h6: {
    fontFamily: 'montserrat',
    color: '#fff',
    fontSize: 18,
    textTransform: 'uppercase'
  },
  nickname: {
    fontFamily: 'montserratLight',
    color: '#fff',
    fontSize: 18,
    marginBottom: 8
  },
  stats: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 'auto',
    paddingRight: 20,
    paddingLeft: 20,
    zIndex: 1
  },
  statsWrapper: {
    marginRight: 20
  },
  label: {
    fontFamily: 'montserratLight',
    fontSize: 12,
    color: '#fff'
  },
  value: {
    fontFamily: 'montserratBold',
    fontSize: 28,
    color: '#fff'
  },
  cards: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 30,
    flex: 3
  }
})
