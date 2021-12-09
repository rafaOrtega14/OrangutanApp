import { StyleSheet } from 'react-native'
import colors from '../../../constants/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 12
  },
  title: {
    fontFamily: 'montserratSemibold',
    fontSize: 24,
    color: '#fff',
    marginBottom: 24
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.backgroundLight,
    borderRadius: 10,
    padding: 12,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 12
  },
  buttonText: {
    fontFamily: 'montserrat',
    color: '#fff',
    fontSize: 14
  }
})
