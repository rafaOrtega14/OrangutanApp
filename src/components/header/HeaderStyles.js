import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'

export default StyleSheet.create({
  header: {
    minHeight: 40,
    marginBottom: 30,
    paddingRight: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    height: 50,
    width: 50
  },
  filter: {
    maxWidth: 190
  },
  button: {
    backgroundColor: colors.backgroundLight,
    borderRadius: 10,
    padding: 14,
    paddingLeft: 20,
    paddingRight: 20
  },
  buttonText: {
    fontFamily: 'montserrat',
    color: '#fff'
  }
})
