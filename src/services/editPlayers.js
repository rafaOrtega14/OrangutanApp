import axios from 'axios'
import { BASE_URL } from '../constants/settings'

const KEY = 'pavisoso15'

export default async (id, body) => {
  const { data } = await axios.put(`${BASE_URL}/player/${id}?password=${KEY}`, body)
  return data
}
