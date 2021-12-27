import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userDetails: JSON.parse(localStorage.getItem('user'))?JSON.parse(localStorage.getItem('user')): null,
        isVerified: false,
        error: '',
        loading: false
    },
    reducers: {
        updateUser: (state, action) => {
            state.userDetails = action.payload
            state.loading = false
        },
        clearUser: (state) => {
            state.isVerified = false;
            state.user = null
        },
        isError: (state) => {
            state.error = "There was an error"
            state.loading = false
        },
        isLoading: (state) => {
            state.loading = true
        },
        verified: (state) => {
            state.isVerified = true
        },
        logout: (state) => {
            state.isVerified = false
            state.userDetails = null
        }
    }
})



export const {updateUser, clearUser, isError, isLoading, verified, logout} = userSlice.actions

export default userSlice.reducer