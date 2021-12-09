import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { screens } from '../../../constants/screens'
import AdminMenu from './AdminMenu'
import AdminPlayers from './AdminPlayers'
import AdminCalendar from './AdminCalendar'

const Stack = createNativeStackNavigator()
const NAV_OPTIONS = { headerShown: false, tabBarShowLabel: false }

const AdminNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={screens.ADMIN_MENU}>
      <Stack.Screen name={screens.ADMIN_MENU} component={AdminMenu} options={NAV_OPTIONS} />
      <Stack.Screen name={screens.ADMIN_PLAYERS} component={AdminPlayers} options={NAV_OPTIONS} />
      <Stack.Screen name={screens.ADMIN_CALENDAR} component={AdminCalendar} options={NAV_OPTIONS} />
    </Stack.Navigator>
  )
}

export default AdminNavigation
