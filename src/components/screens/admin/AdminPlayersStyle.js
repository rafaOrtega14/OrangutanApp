import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../../constants/colors'

const windowWidth = Dimensions.get('window').width

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  title: {
    fontFamily: 'montserratSemibold',
    fontSize: 24,
    color: '#fff',
    marginBottom: 24
  },
  inputContainer: {
    marginBottom: 20
  },
  inputLabel: {
    fontFamily: 'montserrat',
    fontSize: 15,
    color: '#fff',
    marginBottom: 12
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
    marginBottom: 8
  },
  button: {
    backgroundColor: colors.secondary,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: windowWidth,
    borderRadius: 0,
    marginTop: 10,
    marginLeft: -20
  },
  buttonText: {
    fontFamily: 'montserratSemibold',
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    display: 'flex',
    width: windowWidth,
    marginLeft: -20
  },
  buttonDisabled: {
    backgroundColor: '#2e096b'
  },
  smallText: {
    fontFamily: 'montserrat',
    fontSize: 14,
    color: '#ccc'
  }
})
