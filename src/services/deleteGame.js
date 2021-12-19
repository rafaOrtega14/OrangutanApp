import axios from 'axios'

export default async (id) => {
  const headers = { headers: { 'Content-Type': 'application/json' } }
  const { data } = await axios.delete(`https://orangutanclan.herokuapp.com/calendar/${id}`, headers)
  return data
}
