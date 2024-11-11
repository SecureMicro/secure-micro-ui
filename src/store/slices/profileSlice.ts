import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../services/api'

const initialState = {
    userProfile: null,
    loading: false,
    error: null,
}

export const fetchProfile = createAsyncThunk(
    'profile/fetchProfile',
    async () => {
        const token = localStorage.getItem('token') // Assume the token is stored in local storage
        if (!token) throw new Error('No token found')
        const profileData = await api.get('/ums/api/v1/user/profile')
        return profileData
    }
)

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfile.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchProfile.fulfilled, (state, action: any) => {
                state.loading = false
                state.userProfile = action.payload
            })
            .addCase(fetchProfile.rejected, (state, action: any) => {
                state.loading = false
                state.error = action.error.message
            })
    },
})

export default profileSlice.reducer
