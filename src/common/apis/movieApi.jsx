import axios from 'axios'
import { apiKey } from './apiKey'

export default axios.create(
    {
        baseURL:"https://www.omdbapi.com",
    }
)