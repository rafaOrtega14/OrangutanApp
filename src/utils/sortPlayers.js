import { stats } from '../constants/stats'

export default (players, sortBy) => {
  if (sortBy === stats.POINTS_PER_GAME) {
    return players.sort((a, b) => (b.stats.totalpoints / b.stats.gamesplayed) - (a.stats.totalpoints / a.stats.gamesplayed))
  }
  return players.sort((a, b) => b.stats[sortBy] - a.stats[sortBy])
}
