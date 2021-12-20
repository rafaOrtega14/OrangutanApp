import React, { useEffect, useState } from 'react'
import { Text, View, Easing, ImageBackground, Animated } from 'react-native'
import styles from './HomeStyles'
import { addPlayers, useStateContext } from '../../../context/context'
import EmptyData from '../../empty-data/EmptyData'
import Loader from '../../loader/Loader'
import getPlayers from '../../../services/getPlayers'
import sortPlayers from '../../../utils/sortPlayers'
import getCalendar from '../../../services/getCalendar'
import CarouselContainer from '../../carousel/CarouselContainer'
import calcGlobalStats from '../../../utils/calcGlobalStats'
import { positions } from '../../../constants/positions'
import calculatePointsPerGame from '../../../utils/calculatePointsPerGame'
import { TouchableOpacity } from 'react-native-gesture-handler'

const backgroundImage = require('../../../assets/images/logo.png')

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const { state: { roster: { players: team, loading, sortBy }, calendar: { games } }, dispatch } = useStateContext()
  const [players, setPlayers] = useState([])
  const [showAnimatedGif, setShowAnimatedGif] = useState(false)
  const [gifPosition, setGifPosition] = useState(new Animated.Value(400))

  const retrievePlayers = async () => {
    try {
      const playerList = await getPlayers()
      const gameList = await getCalendar()
      dispatch(addPlayers(playerList))
      const res = sortPlayers(playerList, sortBy)
      const overall = calcGlobalStats(res, gameList.games)
      setPlayers([overall, ...res])
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    retrievePlayers()
  }, [])

  useEffect(() => {
    const update = async () => {
      const gameList = await getCalendar()
      const res = sortPlayers(team, sortBy)
      const overall = calcGlobalStats(res, gameList.games)
      setPlayers([overall, ...res])
      setActiveIndex(0)
    }
    update()
  }, [sortBy, games])

  const startAnimation = () => {
    Animated.timing(gifPosition, {
      toValue: 0, duration: 400, easing: Easing.linear, useNativeDriver: false
    }).start(() => endAnimation())
  }

  const endAnimation = () => {
    Animated.timing(gifPosition, {
      toValue: 400, delay: 2000, duration: 400, easing: Easing.linear, useNativeDriver: false
    }).start(() => {
      setShowAnimatedGif(false)
      setGifPosition(new Animated.Value(400))
    })
  }

  const handleGif = (show) => {
    if (show) startAnimation()
    else endAnimation()
    setShowAnimatedGif(show)
  }

  return (
    <View style={styles.container}>
      {!loading && players.length !== 0 &&
        <>
          <View style={styles.description}>
            <Text style={styles.h5}>{positions[activeIndex]}</Text>
            <Text style={styles.h1} numberOfLines={1}>
              {activeIndex === 0
                ? `${players[activeIndex].name}-${players[activeIndex].surname}`
                : `${players[activeIndex].name} ${players[activeIndex].surname}`}
            </Text>
            <Text style={styles.nickname}>{players[activeIndex].nickname}</Text>
            <Text style={styles.h6}>{players[activeIndex].position || 'Sin posición'} {activeIndex !== 0 && '#'}{players[activeIndex].dorsal || '00'}</Text>
          </View>
          <View style={styles.stats}>
            <View style={styles.statsWrapper}>
              <Text style={styles.label}>PJ</Text>
              <Text style={styles.value}>{players[activeIndex].stats.gamesplayed}</Text>
            </View>
            <View style={styles.statsWrapper}>
              <Text style={styles.label}>PT</Text>
              <Text style={styles.value}>{players[activeIndex].stats.totalpoints}</Text>
            </View>
            <View style={styles.statsWrapper}>
              <Text style={styles.label}>3T</Text>
              <Text style={styles.value}>{players[activeIndex].stats.threes}</Text>
            </View>
            <View style={styles.statsWrapper}>
              <Text style={styles.label}>PPP</Text>
              <Text style={styles.value}>{calculatePointsPerGame(players[activeIndex].stats.totalpoints, players[activeIndex].stats.gamesplayed)}</Text>
            </View>
          </View>

          <ImageBackground
            style={styles.imageBackground}
            source={backgroundImage}
          >
            <TouchableOpacity
              onPress={() => handleGif(!showAnimatedGif)}
              style={{
                height: 300,
                width: 300
              }}
            />
          </ImageBackground>
          <Animated.Image
            source={require('../../../assets/gifs/orangutan-animated.gif')}
            style={{ transform: [{ scale: showAnimatedGif ? 1 : 0 }], height: 550, width: 550, left: gifPosition, position: 'absolute', top: '10%', zIndex: 10 }}
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
