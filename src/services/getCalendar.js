import { games } from '../mock'
import { formatISO } from 'date-fns'

export default () => {
  const sortGamesByDate = games.sort((a, b) => a.date > b.date)
  const nextGame = sortGamesByDate.find(({ date }) => date >= formatISO(Date.now()))

  return { games: sortGamesByDate, nextGame }
}
