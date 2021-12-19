import axios from 'axios'

export default async () => {
  const { data } = await axios.get('https://orangutanclan.herokuapp.com/players')
  return data
}
