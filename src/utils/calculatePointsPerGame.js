export default (totalpoints, gamesplayed) => {
  const pointsPerGame = (totalpoints / gamesplayed).toFixed(1)
  return pointsPerGame === 'NaN' ? 0 : pointsPerGame
}
