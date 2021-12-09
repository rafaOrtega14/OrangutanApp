import React, { useEffect, useState } from 'react'
import { useStateContext } from '../../../context/context'
import { ScrollView, Text, TextInput, TouchableOpacity, View, Platform } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import colors from '../../../constants/colors'
import styles from './AdminCalendarStyle'
import editCalendar from '../../../services/editCalendar'
import DateTimePicker from '@react-native-community/datetimepicker'
import { formatDate, formatHour } from '../../../utils/formatDate'

const AdminCalendar = () => {
  const { state } = useStateContext()
  const [value, setValue] = useState()
  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState([])
  const [input, setInput] = useState({
    id: null,
    rival: '',
    date: '',
    court: ''
  })
  const [oldGameData, setOldGameData] = useState({
    rival: '',
    date: '',
    court: ''
  })

  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)

  const [updating, setUpdating] = useState(false)
  const [isUpdated, setUpdated] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const rivalNames = state.calendar.games
      .map((game, index) => ({ id: game._id, label: game.rival, value: game }))
    setOptions(rivalNames)
  }, [])

  const handleChangeValue = (game) => {
    setInput({
      ...input,
      id: game?._id,
      rival: game?.rival,
      date: game?.date,
      court: game?.court
    })
    setOldGameData({
      ...oldGameData,
      rival: game?.rival,
      date: game?.date,
      court: game?.court
    })
    setUpdated(false)
    setError(false)
  }

  const updateGame = () => {
    const body = {
      rival: input.rival,
      date: input.date,
      court: input.court
    }
    setUpdating(true)
    editCalendar(input.id, body)
      .then(res => {
        console.log('res', res)
        setUpdating(false)
        setUpdated(true)
      })
      .catch(e => {
        console.log('error', e)
        setUpdating(false)
        setError(true)
      })
  }

  const setButtonText = () => {
    if (updating) return 'Guardando...'
    else if (error && !isUpdated) return '¡Error! No se pudo guardar'
    else if (!isUpdated) return 'Guardar cambios'
    else return '¡Hecho!'
  }

  const onChangeDate = (event, date) => {
    if (event.type === 'set') {
      setShow(Platform.OS === 'ios')
      setInput({ ...input, date })
      setUpdated(false)
      setError(false)
    }
    setShow(Platform.OS === 'ios')
  }

  const showMode = (currentMode) => {
    setShow(true)
    setMode(currentMode)
  }

  const showDatepicker = () => {
    showMode('date')
  }

  const showTimepicker = () => {
    showMode('time')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar partidos</Text>
      <DropDownPicker
        style={{ backgroundColor: colors.backgroundLight, borderWidth: 0, height: 45, marginBottom: 20 }}
        labelStyle={{ color: '#fff', fontFamily: 'montserrat' }}
        placeholder='Elige un partido'
        placeholderStyle={{ color: '#fff' }}
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
        onChangeValue={(value) => handleChangeValue(value)}
        itemKey='id'
      />
      {value !== undefined &&
        <>
          <View style={styles.inputContainer}>
            <ScrollView
              horizontal={false}
              keyboardShouldPersistTaps='handled'
            >
              <View style={{ paddingTop: 0, paddingBottom: 120 }}>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Equipo rival: </Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={rival => {
                      setInput({ ...input, rival })
                      setUpdated(false)
                      setError(false)
                    }}
                    value={input.rival}
                    placeholder={input.rival}
                    placeholderTextColor='#B0B0B0'
                  />
                  <Text style={styles.smallText}>Antes: {oldGameData.rival}</Text>
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Fecha: </Text>
                  <TextInput
                    style={styles.input}
                    value={input.date ? `${formatDate(input.date)} ${formatHour(input.date)}` : null}
                    editable={false}
                  />
                  <Text style={styles.smallText}>Antes: {input.date ? `${formatDate(oldGameData.date)} ${formatHour(oldGameData.date)}` : null}</Text>
                  <View style={styles.dateButtonContainer}>
                    <TouchableOpacity style={styles.dateButton} onPress={showDatepicker}>
                      <Text style={styles.dateButtonText}>Cambiar fecha</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dateButton} onPress={showTimepicker} title='Cambiar hora'>
                      <Text style={styles.dateButtonText}>Cambiar hora</Text>
                    </TouchableOpacity>
                  </View>
                  {show &&
                    <DateTimePicker
                      value={new Date(input.date)}
                      mode={mode}
                      display='default'
                      is24Hour
                      onChange={onChangeDate}
                      timeZoneOffsetInMinutes={0}
                    />}

                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Pista: </Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={court => {
                      setInput({ ...input, court })
                      setUpdated(false)
                      setError(false)
                    }}
                    value={input.court}
                    placeholder={input.court}
                    placeholderTextColor='#B0B0B0'
                  />
                  <Text style={styles.smallText}>Antes: {oldGameData.court}</Text>
                </View>
              </View>
            </ScrollView>
          </View>
          <TouchableOpacity
            onPress={updateGame}
            style={[styles.button, (error || updating || isUpdated) && styles.buttonDisabled]}
            disabled={error || updating || isUpdated}
          >
            <Text style={styles.buttonText}>
              {setButtonText()}
            </Text>
          </TouchableOpacity>
        </>}
    </View>
  )
}

export default AdminCalendar
