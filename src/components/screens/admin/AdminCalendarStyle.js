import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../../constants/colors'

const windowWidth = Dimensions.get('window').width

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    position: 'relative'
  },
  title: {
    fontFamily: 'montserratSemibold',
    fontSize: 24,
    color: '#fff',
    marginBottom: 24
  },
  text: {
    fontFamily: 'montserratSemibold',
    fontSize: 14,
    color: '#fff',
    textDecorationLine: 'underline'
  },
  wrapper: {
    marginBottom: 20
  },
  inputContainer: {
    marginBottom: 20,
    borderBottomColor: '#404040',
    paddingBottom: 20,
    borderBottomWidth: 0.5
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
    borderColor: '#999',
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
    fontSize: 12,
    color: '#999'
  },
  dateButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  dateButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundLight,
    borderRadius: 5,
    margin: 2,
    padding: 8,
    width: '50%'
  },
  dateButtonText: {
    fontFamily: 'montserratSemibold',
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    display: 'flex',
    width: '100%'
  },
  deleteButtonText: {
    marginTop: 20,
    fontFamily: 'montserratSemibold',
    fontSize: 14,
    color: 'red',
    textDecorationLine: 'underline'
  },
  modal: {
    height: '100%',
    backgroundColor: colors.background,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 9999,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  modalBody: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  modalText: {
    fontFamily: 'montserratSemibold',
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 30
  },
  modalButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalButton: {
    backgroundColor: colors.backgroundLight,
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 14,
    borderRadius: 5
  },
  modalButtonText: {
    fontFamily: 'montserratSemibold',
    fontSize: 14,
    color: '#fff'
  }
})
