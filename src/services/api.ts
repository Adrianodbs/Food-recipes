import axios from 'axios'

const baseURL = 'https://www.themealdb.com/api/json/v1/1/'

const apiData = axios.create({
  baseURL: baseURL
})

export default apiData