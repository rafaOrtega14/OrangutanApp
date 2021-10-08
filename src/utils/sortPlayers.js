import { stats } from '../constants/stats'

export default (players, sortBy) => {
  if (sortBy === stats.POINTS_PER_GAME) {
    return players.sort((a, b) => (b.stats[0].totalpoints / b.stats[0].gamesplayed) - (a.stats[0].totalpoints / a.stats[0].gamesplayed))
  }
  return players.sort((a, b) => b.stats[0][sortBy] - a.stats[0][sortBy]
  )
}
