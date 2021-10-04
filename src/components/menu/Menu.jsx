import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../screens/home/Home'

const Drawer = createDrawerNavigator()

const Menu = () => {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name='Home' component={Home} />
    </Drawer.Navigator>
  )
}

export default Menu
