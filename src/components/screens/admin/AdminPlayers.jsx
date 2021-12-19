import React, { useEffect, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import { TextInput } from 'react-native-gesture-handler'
import colors from '../../../constants/colors'
import { stats } from '../../../constants/stats'
import { addPlayers, changePlayersSortValue, useStateContext } from '../../../context/context'
import editPlayers from '../../../services/editPlayers'
import getPlayers from '../../../services/getPlayers'
import EmptyData from '../../empty-data/EmptyData'
import styles from './AdminPlayersStyle'

const AdminPlayers = () => {
  const { state, dispatch } = useStateContext()
  const [value, setValue] = useState()
  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState([])
  const [input, setInput] = useState({
    id: null,
    gamesplayed: 0,
    threes: 0,
    totalpoints: 0
  })
  const [oldPlayerData, setOldPlayerData] = useState({
    gamesplayed: 0,
    threes: 0,
    totalpoints: 0
  })
  const [updating, setUpdating] = useState(false)
  const [isUpdated, setUpdated] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const playerNames = state.roster.players
      .map((player, index) => ({ id: player._id, label: `${player.name} ${player.surname}`, value: player }))
    setOptions(playerNames)
  }, [])

  const handleChangeValue = (player) => {
    setInput({
      ...input,
      id: player?._id,
      totalpoints: player?.stats[0].gamesplayed !== null ? player?.stats[0].totalpoints.toString() : '0',
      gamesplayed: player?.stats[0].gamesplayed !== null ? player?.stats[0].gamesplayed.toString() : '0',
      threes: player?.stats[0].gamesplayed !== null ? player?.stats[0].threes.toString() : '0'
    })
    setOldPlayerData({
      ...oldPlayerData,
      totalpoints: player?.stats[0].gamesplayed !== null ? player?.stats[0].totalpoints.toString() : '0',
      gamesplayed: player?.stats[0].gamesplayed !== null ? player?.stats[0].gamesplayed.toString() : '0',
      threes: player?.stats[0].gamesplayed !== null ? player?.stats[0].threes.toString() : '0'
    })
    setUpdated(false)
    setError(false)
  }

  const updatePlayer = () => {
    const body = {
      totalpoints: parseInt(input.totalpoints),
      gamesplayed: parseInt(input.gamesplayed),
      threes: parseInt(input.threes)
    }
    setUpdating(true)
    editPlayers(input.id, body)
      .then(res => {
        setUpdating(false)
        setUpdated(true)
        getPlayers()
          .then(res => {
            dispatch(addPlayers(res))
            dispatch(changePlayersSortValue(stats.TOTAL_POINTS))
          })
          .catch(err => console.error(err))
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
    /*  updating ? 'Guardando...' : error ? '¡Error! No se pudo guardar' : isUpdated ? '¡Hecho!' : 'Guardar cambios' */
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar estadísticas</Text>
      <DropDownPicker
        style={{ backgroundColor: colors.backgroundLight, borderWidth: 0, height: 45, marginBottom: 20 }}
        labelStyle={{ color: '#fff', fontFamily: 'montserrat' }}
        placeholder='Elige un jugador'
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
                  <Text style={styles.inputLabel}>Partidos jugados: </Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={gamesplayed => {
                      setInput({ ...input, gamesplayed })
                      setUpdated(false)
                      setError(false)
                    }}
                    value={input.gamesplayed}
                    placeholder={input.gamesplayed}
                    placeholderTextColor='#B0B0B0'
                    keyboardType='numeric'
                  />
                  <Text style={styles.smallText}>Antes: {oldPlayerData.gamesplayed}</Text>
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Puntos totales: </Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={totalpoints => {
                      setInput({ ...input, totalpoints })
                      setUpdated(false)
                      setError(false)
                    }}
                    value={input.totalpoints}
                    placeholder={input.totalpoints}
                    placeholderTextColor='#B0B0B0'
                    keyboardType='numeric'
                  />
                  <Text style={styles.smallText}>Antes: {oldPlayerData.totalpoints}</Text>
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Triples: </Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={threes => {
                      setInput({ ...input, threes })
                      setUpdated(false)
                      setError(false)
                    }}
                    value={input.threes}
                    placeholder={input.threes}
                    placeholderTextColor='#B0B0B0'
                    keyboardType='numeric'
                  />
                  <Text style={styles.smallText}>Antes: {oldPlayerData.threes}</Text>
                </View>
              </View>
            </ScrollView>
          </View>
          <TouchableOpacity
            onPress={updatePlayer}
            style={[styles.button, (error || updating || isUpdated) && styles.buttonDisabled]}
            disabled={error || updating || isUpdated}
          >
            <Text style={styles.buttonText}>
              {setButtonText()}
            </Text>
          </TouchableOpacity>
        </>}
      {!value && <EmptyData title='¡Ey!' description='Parece que aún no has seleccionado ningún jugador.' />}
    </View>
  )
}

export default AdminPlayers
