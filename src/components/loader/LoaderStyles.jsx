import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'

export default StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50,
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
  text: {
    fontFamily: 'montserrat',
    fontSize: 24,
    color: '#fff',
    marginTop: 40
  }
})
