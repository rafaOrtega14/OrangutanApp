import { StyleSheet } from 'react-native'
import colors from '../../../constants/colors'

export default StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    height: '100%',
    paddingLeft: 20,
    paddingRight: 20
  },
  title: {
    fontFamily: 'montserratSemibold',
    fontSize: 24,
    color: '#fff',
    marginBottom: 24
  },
  label: {
    fontFamily: 'montserrat',
    fontSize: 18,
    color: '#fff',
    alignSelf: 'flex-start',
    marginBottom: 8
  },
  input: {
    fontFamily: 'montserrat',
    fontSize: 16,
    borderRadius: 5,
    color: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    width: '100%',
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 24
  },
  button: {
    backgroundColor: colors.secondary,
    borderRadius: 5,
    padding: 14,
    paddingLeft: 20,
    paddingRight: 20,
    alignSelf: 'flex-start'
  },
  buttonText: {
    fontFamily: 'montserrat',
    color: '#fff'
  },
  wrapper: {
    padding: 20
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 24
  }
})
