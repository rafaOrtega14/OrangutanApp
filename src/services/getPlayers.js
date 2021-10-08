import axios from 'axios'

export default async () => {
  const { data } = await axios.get('http://orangutanclan.herokuapp.com/players')
  return data
}
