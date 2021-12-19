import { formatISO } from 'date-fns'
import axios from 'axios'

export default async () => {
  const { data: games } = await axios.get('https://orangutanclan.herokuapp.com/calendar')
  const sortGamesByDate = games.sort((a, b) => a.date > b.date)
  const nextGame = sortGamesByDate.find(({ date }) => date >= formatISO(Date.now()))

  return { games: sortGamesByDate, nextGame }
}
