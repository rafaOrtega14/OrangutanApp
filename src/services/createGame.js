import axios from 'axios'

export default async (body) => {
  const options = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const { data } = await axios.post('https://orangutanclan.herokuapp.com/calendar/', body, options)
  return data
}
