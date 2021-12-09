import teamImage from '../constants/teamImage'

export default (players, games) => {
  const team = {
    name: 'Orangutan',
    surname: 'Clan',
    position: 'Equipo',
    dorsal: ' ',
    stats: [
      {
        gamesplayed: 12,
        threes: players.reduce((a, b) => a + b.stats[0].threes, 0),
        totalpoints: players.reduce((a, b) => a + b.stats[0].totalpoints, 0)
      }],
    photo: teamImage.imageString
  }

  return team
}
