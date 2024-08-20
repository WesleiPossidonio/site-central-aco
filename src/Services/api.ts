import axios from 'axios'

const api = axios.create({
  baseURL: 'https://site-central-aco.vercel.app/',
})

export default api