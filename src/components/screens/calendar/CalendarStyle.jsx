import { StyleSheet } from 'react-native'
import colors from '../../../constants/colors'

export default StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    height: '100%'
  },
  card: {
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
    borderWidth: 2,
    borderColor: colors.backgroundLight,
    backgroundColor: colors.background,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    position: 'relative'
  },
  highlight: {
    borderWidth: 2,
    borderColor: colors.primary,
    marginTop: 4
  },
  nextGame: {
    fontFamily: 'montserratSemibold',
    color: colors.primary,
    position: 'absolute',
    top: -12,
    backgroundColor: colors.background,
    paddingLeft: 10,
    paddingRight: 10
  },
  date: {
    fontFamily: 'montserrat',
    fontSize: 16,
    color: '#fff',
    marginBottom: 12
  },
  court: {
    fontFamily: 'montserrat',
    color: '#fff',
    textTransform: 'capitalize'
  },
  teams: {
    fontFamily: 'montserrat',
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    width: 50,
    height: 50
  },
  vs: {
    fontFamily: 'montserratBold',
    flex: 1,
    textAlign: 'center',
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 24
  },
  rival: {
    fontFamily: 'montserrat',
    flex: 1,
    color: '#fff',
    textTransform: 'capitalize',
    fontSize: 16,
    textAlign: 'center'
  }
})
