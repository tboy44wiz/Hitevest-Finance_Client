import axiosHelper from "../../request/axiosHelper";
import { updateUser, isError, isLoading, verified, logout } from "../slices/userSlice";

export const loginUser = (data) => dispatch => {
    dispatch(isLoading())
    axiosHelper.post('/login', data)
    .then(res =>{
        dispatch(verified())
        localStorage.setItem('user', JSON.stringify(res.data))
        dispatch(updateUser(res.data))
       })
    .catch(() => {
        dispatch(isError())
    })
} 
export const registerUser = (data) => dispatch => {
    dispatch(isLoading())
    axiosHelper.post('/register', data)
    .then(res =>{
         dispatch(updateUser(res.data))
        })
    .catch(() => {
        dispatch(isError())
    })

} 
export const verifyOtp = (data) => dispatch => {
    dispatch(isLoading())
    axiosHelper.post('/verify-otp', data)
    .then(res =>{
         localStorage.setItem('user', JSON.stringify(res.data))
         dispatch(updateUser(res.data))
         dispatch(verified())
        })
    .catch(() => {
        dispatch(isError())
    })
} 
export const logoutReq = () => dispatch => {
    dispatch(logout())
}