import React, { useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import ChevronRightIcon from '../../icons/ChevronRightIcon'
import CalendarIcon from '../../icons/CalendarIcon'
import PlayerIcon from '../../icons/PlayerIcon'
import styles from './AdminMenuStyle'
import { screens } from '../../../constants/screens'
import getCalendar from '../../../services/getCalendar'
import { useStateContext, addCalendar } from '../../../context/context'

const AdminMenu = ({ navigation }) => {
  const { dispatch } = useStateContext()

  useEffect(() => {
    getCalendar()
      .then(res =>
        dispatch(addCalendar(res)))
      .catch(err => console.error(err))
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Área de administrador</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate(screens.ADMIN_PLAYERS)}
        style={styles.button}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <PlayerIcon width='30' style={{ marginRight: 6 }} />
          <Text style={styles.buttonText}>Editar jugadores</Text>
        </View>
        <ChevronRightIcon />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(screens.ADMIN_CALENDAR)}
        style={styles.button}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <CalendarIcon width='26' style={{ marginRight: 12 }} />
          <Text style={styles.buttonText}>Editar calendario</Text>
        </View>
        <ChevronRightIcon />
      </TouchableOpacity>
    </View>
  )
}

export default AdminMenu
