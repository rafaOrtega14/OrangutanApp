import axios from 'axios'

export default async (body) => {
  const headers = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const { data } = await axios.post('https://orangutanclan.herokuapp.com/calendar/', body, headers)
  return data
}
