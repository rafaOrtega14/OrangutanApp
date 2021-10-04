import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/home/Home.jsx'
import Calendar from '../screens/calendar/Calendar.jsx'
import Stats from '../screens//stats/Stats.jsx'
import Admin from '../screens/admin/Admin.jsx'
import HomeIcon from '../icons/HomeIcon.jsx'
import CalendarIcon from '../icons/CalendarIcon.jsx'
import StatsIcon from '../icons/StatsIcon.jsx'
import AdminIcon from '../icons/AdminIcon.jsx'
import colors from '../../constants/colors'
import { screens } from '../../constants/screens.js'

const Tab = createBottomTabNavigator()

const TAB_OPTIONS = { headerShown: false, tabBarShowLabel: false }

const Navbar = () => {
  const getIcon = (route, color) => {
    const icons = {
      Home: <HomeIcon color={color} />,
      Calendar: <CalendarIcon color={color} />,
      Stats: <StatsIcon color={color} />,
      Admin: <AdminIcon color={color} />
    }
    return icons[route.name]
  }

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName={screens.HOME}
        screenOptions={({ route }) => ({
          tabBarStyle: { backgroundColor: '#181829', borderTopWidth: 0 },
          tabBarIcon: ({ color }) => getIcon(route, color),
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: '#fff'
        })}
      >
        <Tab.Screen name={screens.HOME} component={Home} options={TAB_OPTIONS} />
        <Tab.Screen name={screens.CALENDAR} component={Calendar} options={TAB_OPTIONS} />
        <Tab.Screen name={screens.STATS} component={Stats} options={TAB_OPTIONS} />
        <Tab.Screen name={screens.ADMIN} component={Admin} options={TAB_OPTIONS} />
      </Tab.Navigator>
    </View>
  )
}

export default Navbar
