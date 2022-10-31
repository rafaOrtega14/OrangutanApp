import axios from 'axios'
import { BASE_URL } from '../constants/settings'

export default async (id) => {
  const headers = { headers: { 'Content-Type': 'application/json' } }
  const { data } = await axios.delete(`${BASE_URL}/calendar/${id}`, headers)
  return data
}
