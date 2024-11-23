import axios from 'axios'
import { CONSTANTS } from '../config/constants'

const api = axios.create({
    baseURL: CONSTANTS.BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

// Add interceptors for token handling
api.interceptors.request.use(
    (config: any) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default api
