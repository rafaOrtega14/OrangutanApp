import axios from 'axios'

export default async (id, body) => {
  const { data } = await axios.put(`http://orangutanclan.herokuapp.com/player/${id}`, body)
  return data
}
