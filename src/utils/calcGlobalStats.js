export default (players) => {
  /* const teamImage = require('../assets/images/team.jpg') */

  const team = {
    name: 'Orangutan',
    surname: 'Clan',
    position: 'Equipo',
    stats: [
      {
        gamesplayed: 0,
        threes: players.reduce((a, b) => a + b.stats[0].threes, 0),
        totalpoints: players.reduce((a, b) => a + b.stats[0].totalpoints, 0)
      }]
  }

  return team
}
