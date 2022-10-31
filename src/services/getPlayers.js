import axios from 'axios'
import { BASE_URL } from '../constants/settings'

export default async () => {
  const { data } = await axios.get(`${BASE_URL}/players`)
  return data
}
