import React, { useEffect, useRef } from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { formatDate, formatHour } from '../../../utils/formatDate'
import styles from './CalendarStyle'
import { addCalendar, getCalendarListRef, useStateContext } from '../../../context/context'
import EmptyData from '../../empty-data/EmptyData'
import { useLinkTo } from '@react-navigation/native'
import HomeIcon from '../../icons/HomeIcon'
import Loader from '../../loader/Loader'
import getCalendar from '../../../services/getCalendar'

const logoImage = require('../../../assets/images/logo.png')

const Calendar = () => {
  const {
    dispatch,
    state: { calendar: { games, nextGame, loading } }
  } = useStateContext()
  const flatListRef = useRef()
  const linkTo = useLinkTo()

  useEffect(() => {
    getCalendar()
      .then(res =>
        dispatch(addCalendar(res)))
      .catch(err => console.error(err))
  }, [])

  useEffect(() => {
    dispatch(getCalendarListRef(flatListRef))
  }, [flatListRef])

  return (
    <View style={styles.container}>
      {!loading && games.length !== 0 &&
        <FlatList
          ref={flatListRef}
          data={games}
          renderItem={({ item: { _id, date, court, rival } }) =>
            <View key={_id} style={[styles.card, _id === nextGame?._id && styles.highlight]}>
              {_id === nextGame?._id && <Text style={styles.nextGame}>Próximo partido</Text>}
              <Text style={styles.date}>{formatDate(date)} • {formatHour(date)}</Text>
              <Text style={styles.court}>{court}</Text>
              <View style={styles.teams}>
                <View style={styles.imageContainer}>
                  <Image style={styles.image} source={logoImage} />
                </View>
                <Text style={styles.vs}>vs</Text>
                <Text style={styles.rival} numberOfLines={2}>{rival}</Text>
              </View>
            </View>}
          keyExtractor={(item, index) => index.toString()}
        />}
      {loading && <Loader />}
      {!loading && games.length === 0 &&
        <EmptyData
          title='¡Ups!'
          description='Parece que no hay partidos en el calendario.'
          hasButton
          buttonIcon={<HomeIcon width={24} />}
          buttonFn={() => linkTo('/Home')}
        />}
    </View>
  )
}

export default Calendar
