import axiosHelper from "../../request/axiosHelper";
import { updateUser, updateMessage, isError, isLoading, verified, logout } from "../slices/userSlice";

export const loginUser = (data) => dispatch => {
    dispatch(isLoading())
    axiosHelper.post('/login', data)
    .then(res =>{
        const { id, name, email, phone, bvn, image, dob, sex, status, withdrawal_limit, shutdown_level } = res.data.user;
        const { message, referral_link, deposit_wallet, interest_wallet, access_token, expires } = res.data;
        const userData = {
            id,
            name,
            email,
            phone,
            bvn,
            image,
            dob, 
            sex, 
            status, 
            withdrawalLimit: withdrawal_limit, 
            shutdownLevel: shutdown_level,

            referralLink: referral_link,
            depositWallet: deposit_wallet,
            interestWallet: interest_wallet,
            accessToken: access_token,
            expiresIn: expires,
            message: message,
        };
        dispatch(verified());
        localStorage.setItem('user', JSON.stringify(userData));
        dispatch(updateUser(userData));
       })
    .catch(() => {
        dispatch(isError())
    })
} 
export const registerUser = (data) => dispatch => {
    dispatch(isLoading())
    axiosHelper.post('/register', data)
    .then(res =>{
        const { id, name, email, phone, password } = res.data.Data
        const userData = {
            id,
            name,
            email,
            phone,
            password,
            message: res.data.message,
            status: res.data.status,
        };
        dispatch(updateMessage(userData.message));
        dispatch(updateUser(userData));
    })
    .catch(() => {
        dispatch(isError())
    })

} 
export const verifyOtp = (data) => dispatch => {
    dispatch(isLoading())
    axiosHelper.post('/verify-otp', data)
    .then(res =>{
        const { id, name, email, phone, password } = res.data.user;
        const { account_number, data, referral_link, deposit_wallet, interest_wallet } = res.data;
        const userData = {
            id,
            name,
            email,
            phone,
            password,
            message: res.data.message,
            accountNumbers: account_number,
            referralLink: referral_link,
            depositWallet: deposit_wallet,
            interestWallet: interest_wallet,
            accessToken: data.access_token,
            expiresIn: data.expires_in,
            status: data.status,
        };
        localStorage.setItem('user', JSON.stringify(userData));
        dispatch(updateUser(userData));
        dispatch(verified());
    })
    .catch(() => {
        dispatch(isError())
    })
} 
export const logoutReq = () => dispatch => {
    dispatch(logout())
}