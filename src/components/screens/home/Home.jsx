import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import styles from './HomeStyles'
import { addPlayers, useStateContext } from '../../../context/context'
import EmptyData from '../../empty-data/EmptyData'
import Loader from '../../loader/Loader'
import getPlayers from '../../../services/getPlayers'
import sortPlayers from '../../../utils/sortPlayers'
import CarouselContainer from '../../carousel/CarouselContainer'
import calcGlobalStats from '../../../utils/calcGlobalStats'
import { positions } from '../../../constants/positions'

const backgroundImage = require('../../../assets/images/logo.png')

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const { state: { roster: { players: team, loading, sortBy } }, dispatch } = useStateContext()
  const [players, setPlayers] = useState([])

  const retrievePlayers = async () => {
    try {
      const playerList = await getPlayers()
      dispatch(addPlayers(playerList))
      const res = sortPlayers(playerList, sortBy)
      const overall = calcGlobalStats(res)
      setPlayers([overall, ...res])
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    retrievePlayers()
  }, [])

  useEffect(() => {
    const res = sortPlayers(team, sortBy)
    const overall = calcGlobalStats(res)
    setPlayers([overall, ...res])
    setActiveIndex(0)
  }, [sortBy])

  return (
    <View style={styles.container}>
      {!loading && players.length !== 0 &&
        <>
          <View style={styles.description}>
            <Text style={styles.h5}>{positions[activeIndex - 1]}</Text>
            <Text style={styles.h1} numberOfLines={1}>
              {activeIndex === 0
                ? `${players[activeIndex].name}-${players[activeIndex].surname}`
                : `${players[activeIndex].name} ${players[activeIndex].surname}`}
            </Text>
            {/* <Text style={styles.nickname}>aka Oinhb</Text> */}
            <Text style={styles.h6}>{players[activeIndex].position || 'Sin posición'} {activeIndex !== 0 && '#'}{players[activeIndex].dorsal || '00'}</Text>
          </View>
          <View style={styles.stats}>
            <View style={styles.statsWrapper}>
              <Text style={styles.label}>PJ</Text>
              <Text style={styles.value}>{players[activeIndex].stats[0].gamesplayed}</Text>
            </View>
            <View style={styles.statsWrapper}>
              <Text style={styles.label}>PT</Text>
              <Text style={styles.value}>{players[activeIndex].stats[0].totalpoints}</Text>
            </View>
            <View style={styles.statsWrapper}>
              <Text style={styles.label}>3T</Text>
              <Text style={styles.value}>{players[activeIndex].stats[0].threes}</Text>
            </View>
            <View style={styles.statsWrapper}>
              <Text style={styles.label}>PPP</Text>
              <Text style={styles.value}>{(players[activeIndex].stats[0].totalpoints / players[activeIndex].stats[0].gamesplayed).toFixed(2)}</Text>
            </View>
          </View>
          <Image
            style={styles.imageBackground}
            source={backgroundImage}
          />
          <View style={styles.cards}>
            <CarouselContainer
              players={players}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              sortBy={sortBy}
            />
          </View>
        </>}
      {loading && <Loader />}
      {!loading && players.length === 0 &&
        <EmptyData
          title='¡Ups!'
          description='Parece que aún no hay jugadores en la plantilla.'
          hasButton={false}
        />}
    </View>
  )
}

export default Home
