import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import styles from './StatsStyle'
import { Table, TableWrapper, Row, Col } from 'react-native-table-component'
import { useStateContext } from '../../../context/context'
import calcGlobalStats from '../../../utils/calcGlobalStats'
import sortPlayers from '../../../utils/sortPlayers'
import Loader from '../../loader/Loader'
import EmptyData from '../../empty-data/EmptyData'
import colors from '../../../constants/colors'

const Stats = () => {
  const { state: { roster: { players: team, sortBy } } } = useStateContext()
  const [players, setPlayers] = useState([])
  const [table, setTable] = useState()
  const [loading, setLoading] = useState(true)
  const [selectedRow, setSelectedRow] = useState(0)
  const [selectedRow2, setSelectedRow2] = useState(null)

  const fillTable = () => {
    const res = sortPlayers(team, sortBy)
    const overall = calcGlobalStats(res)
    const sortedPlayers = [overall, ...res]
    setPlayers(sortedPlayers)
    setTable({
      ...table,
      head: ['', 'PT', 'PPP', '3T', 'PJ'],
      title: sortedPlayers.map(({ name, surname }, index) => `${index !== 0 ? `${index}º  ${name[0]}.${surname}` : 'Global'}`),
      data: sortedPlayers.map(({ stats }) => {
        const { totalpoints, gamesplayed, threes } = stats[0]
        return [totalpoints, (totalpoints / gamesplayed).toFixed(2), threes, gamesplayed]
      })
    })
  }

  useEffect(() => {
    fillTable()
    setLoading(false)
  }, [])

  useEffect(() => {
    fillTable()
  }, [sortBy])

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Estadísticas globales</Text>
      {loading && <Loader />}
      {!loading && table &&
        <Table style={{ flex: 1 }}>
          <Row data={table.head} flexArr={[2, 1, 1, 1, 1]} style={styles.head} textStyle={styles.text} />
          <ScrollView horizontal={false} style={{ flex: 1 }}>
            <TableWrapper style={styles.wrapper}>
              <Col
                data={table.title}
                style={styles.title}
                heightArr={players.map(() => 50)}
                textStyle={[styles.text, styles.textTitle, { height: '100%', borderWidth: 1, borderColor: 'transparent', borderBottomColor: colors.backgroundLight }]}
              />
              <Table style={{ flex: 4 }}>
                {players.map(({ stats }) => stats[0])
                  .map((rowData, index) =>
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        if (index === selectedRow) return setSelectedRow(null)
                        if (index === selectedRow2) return setSelectedRow2(null)
                        if (selectedRow === null) return setSelectedRow(index)
                        setSelectedRow2(index)
                      }}
                    >
                      <Row
                        data={[rowData.totalpoints, (rowData.totalpoints / rowData.gamesplayed).toFixed(2), rowData.threes, rowData.gamesplayed]}
                        style={[styles.row, index % 2 && { backgroundColor: colors.backgroundLight }, selectedRow === index && styles.selectedRow, selectedRow2 === index && styles.selectedRow2]}
                        textStyle={styles.text}
                      />
                    </TouchableOpacity>)}
              </Table>
            </TableWrapper>
          </ScrollView>
        </Table>}
      {!loading && !table && <EmptyData description='Parece que no hay estadísticas disponibles' hasButton />}
    </View>
  )
}

export default Stats
