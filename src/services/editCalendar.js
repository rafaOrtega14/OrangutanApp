import axios from 'axios'
import { BASE_URL } from '../constants/settings'

export default async (id, body) => {
  const headers = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const { data } = await axios.put(`${BASE_URL}/calendar/${id}`, body, headers)
  return data
}
