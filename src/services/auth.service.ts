import api from './api'

export const authService = {
    login: async (credentials: any) => {
        const response = await api.post('/auth/login', credentials)
        return response.data
    },
    register: async (userData: any) => {
        const response = await api.post('/auth/register', userData)
        return response.data
    },
    logout: async () => {
        const response = await api.post('/auth/logout')
        return response.data
    },
    getCurrentUser: async () => {
        const response = await api.get('/auth/me')
        return response.data
    },
}
