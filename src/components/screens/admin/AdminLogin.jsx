import React, { useState } from 'react'
import {
  Image, Text, TextInput, View,
  TouchableOpacity, Keyboard, BackHandler, ScrollView
} from 'react-native'
import { setLogged, useStateContext } from '../../../context/context'
import Bubble from '../../bubble/Bubble'
import styles from './AdminLoginStyle'
import AdminNavigation from './AdminNavigation'

const IMAGE = require('../../../assets/images/rafa.webp')

const FAIL_PASS_ATTEMPT_RESPONSES = [
  '¡Eh! Sólo puedes acceder si eres admin.',
  '¿Seguro que eres el admin? Prueba otra vez.',
  'Sospecho que no lo eres...',
  'Deja de engañarme. No eres el admin.',
  'Para... estás haciendo el ridículo.',
  'Si sigues, te echo de la app.',
  '...',
  'Último aviso.'
]

const AdminLogin = () => {
  const { state: { ui: { isLogged } }, dispatch } = useStateContext()
  const [input, setInput] = React.useState('')
  const [attempts, setAttempts] = useState(0)

  const checkPassword = () => {
    Keyboard.dismiss()
    setInput('')

    if (input === 'pavisoso15') {
      setAttempts(0)
      return dispatch(setLogged(true))
    }
    if (attempts > FAIL_PASS_ATTEMPT_RESPONSES.length - 2) {
      BackHandler.exitApp()
      return setAttempts(0)
    }
    setAttempts(attempts => attempts + 1)
  }

  return (
    <View style={styles.container}>
      {!isLogged &&
        <ScrollView
          horizontal={false} style={{ flex: 1 }}
          keyboardShouldPersistTaps='handled'
        >
          <Text style={styles.title}>Área de administrador</Text>

          <Text style={styles.label}>Escribe la contraseña:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setInput(text)}
            value={input}
            placeholder='No es 1234...'
            placeholderTextColor='#B0B0B0'
            secureTextEntry
          />
          <TouchableOpacity
            onPress={checkPassword}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <View style={styles.wrapper}>
            <View style={styles.bubble}>
              <Bubble text={FAIL_PASS_ATTEMPT_RESPONSES[attempts]} />
            </View>
            <Image style={styles.image} source={IMAGE} />
          </View>
        </ScrollView>}
      {isLogged &&
        <AdminNavigation />}
    </View>

  )
}

export default AdminLogin
