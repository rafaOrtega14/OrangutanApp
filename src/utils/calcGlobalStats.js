import { formatISO } from 'date-fns'
import teamImage from '../constants/teamImage'

export default (players, games) => {
  const sortGamesByDate = games?.sort((a, b) => a.date > b.date)
  const totalGames = sortGamesByDate?.filter(({ date }) => date <= formatISO(Date.now()))

  const team = {
    name: 'Orangutan',
    surname: 'Clan',
    position: 'Equipo',
    dorsal: ' ',
    stats: [
      {
        gamesplayed: totalGames?.length,
        threes: players.reduce((a, b) => a + b.stats[0].threes, 0),
        totalpoints: players.reduce((a, b) => a + b.stats[0].totalpoints, 0)
      }],
    photo: teamImage.imageString
  }

  return team
}
