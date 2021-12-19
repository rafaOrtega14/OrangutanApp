import axios from 'axios'

const KEY = 'pavisoso15'

export default async (id, body) => {
  const { data } = await axios.put(`https://orangutanclan.herokuapp.com/player/${id}?password=${KEY}`, body)
  return data
}
