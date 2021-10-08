import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'

export default StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20
  },
  wrapper: {
    borderWidth: 2,
    borderColor: colors.backgroundLight,
    borderRadius: 10,
    padding: 20,
    paddingTop: 40,
    paddingBottom: 40,
    width: '100%',
    alignItems: 'center'
  },
  image: {
    height: 150,
    width: 150,
    marginBottom: 30
  },
  title: {
    textAlign: 'center',
    fontFamily: 'montserratBold',
    color: '#fff',
    fontSize: 24,
    marginBottom: 8
  },
  description: {
    textAlign: 'center',
    fontFamily: 'montserrat',
    color: '#fff',
    fontSize: 16,
    lineHeight: 24
  },
  button: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
    padding: 7,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 28,
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonText: {
    fontFamily: 'montserrat',
    color: '#fff',
    fontSize: 16
  }
})
