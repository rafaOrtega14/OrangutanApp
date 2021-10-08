import React, { useState, useEffect } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import styles from './HeaderStyles.js'
import DropDownPicker from 'react-native-dropdown-picker'
import colors from '../../constants/colors'
import { changePlayersSortValue, setLogged, useStateContext } from '../../context/context.js'
import { stats } from '../../constants/stats.js'
import { screens } from '../../constants/screens.js'

const logoImage = require('../../assets/images/logo.png')

const OPTIONS = [
  { label: 'Puntos totales', value: stats.TOTAL_POINTS },
  { label: 'Puntos por partido', value: stats.POINTS_PER_GAME },
  { label: 'Triples', value: stats.THREES },
  { label: 'Partidos jugados', value: stats.GAMES_PLAYED }
]

const Header = ({ route }) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(OPTIONS[0].value)
  const [options, setOptions] = useState(OPTIONS)
  const {
    dispatch,
    state: { calendar: { games, nextGame }, ui: { calendarListRef, isLogged } }
  } = useStateContext()

  const goToNextGame = () => {
    const index = games.findIndex(({ _id }) => _id === nextGame._id)
    calendarListRef.current.scrollToIndex({ animated: true, index })
  }

  useEffect(() => {
    if (route === screens.HOME || route === screens.STATS) {
      dispatch(changePlayersSortValue(value))
    }
  }, [])

  return (
    <View style={styles.header}>
      <Image
        style={styles.logo}
        source={logoImage}
      />

      {(route === screens.HOME || route === screens.STATS) &&
        <View style={styles.filter}>
          <DropDownPicker
            style={{ backgroundColor: colors.backgroundLight, borderWidth: 0, height: 45 }}
            labelStyle={{ color: '#fff', fontFamily: 'montserrat' }}
            dropDownContainerStyle={{ borderWidth: 0, backgroundColor: colors.backgroundLight }}
            listItemContainerStyle={{ backgroundColor: colors.backgroundLight }}
            listItemLabelStyle={{ padding: 0, color: '#fff' }}
            selectedItemLabelStyle={{ color: colors.primary }}
            textStyle={{ fontFamily: 'montserrat' }}
            arrowIconStyle={{ tintColor: '#fff' }}
            tickIconStyle={{ tintColor: colors.primary }}
            open={open}
            value={value}
            items={options}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setOptions}
            onChangeValue={() => dispatch(changePlayersSortValue(value))}
          />
        </View>}

      {route === screens.CALENDAR &&
      games?.length !== 0 &&
        <TouchableOpacity
          onPress={goToNextGame}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Ir al próximo partido</Text>
        </TouchableOpacity>}

      {route === screens.ADMIN && isLogged &&
        <TouchableOpacity
          onPress={() => dispatch(setLogged(false))}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Cerrar sesión</Text>
        </TouchableOpacity>}
    </View>
  )
}

export default Header
