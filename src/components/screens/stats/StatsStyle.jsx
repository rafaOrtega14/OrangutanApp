import { StyleSheet } from 'react-native'
import colors from '../../../constants/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    height: '100%',
    padding: 20,
    paddingTop: 0
  },
  head: {
    paddingBottom: 10
  },
  h1: {
    color: '#fff',
    fontFamily: 'montserratSemibold',
    fontSize: 24,
    marginBottom: 32
  },
  text: {
    color: '#fff',
    fontFamily: 'montserrat',
    fontSize: 14,
    textAlign: 'center'
  },
  textTitle: {
    textAlign: 'left',
    textAlignVertical: 'center'
  },
  wrapper: {
    flexDirection: 'row'
  },
  title: {
    flex: 2
  },
  row: {
    height: 50,
    flex: 1
  },
  selectedRow: {
    backgroundColor: colors.primary
  },
  selectedRow2: {
    backgroundColor: colors.secondary
  }
})
