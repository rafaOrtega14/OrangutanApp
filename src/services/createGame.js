import axios from 'axios'
import { BASE_URL } from '../constants/settings'

export default async (body) => {
  const headers = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const { data } = await axios.post(`${BASE_URL}/calendar/`, body, headers)
  return data
}
