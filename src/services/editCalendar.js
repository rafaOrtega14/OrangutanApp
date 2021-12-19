import axios from 'axios'

export default async (id, body) => {
  const headers = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const { data } = await axios.put(`https://orangutanclan.herokuapp.com/calendar/${id}`, body, headers)
  return data
}
