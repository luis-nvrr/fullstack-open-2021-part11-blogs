import axios from 'axios'

const baseUrl = '/users'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const register = async (userData) => {
  const response = await axios.post(baseUrl, userData)
  return response.data
}

export default { getAll, register }
