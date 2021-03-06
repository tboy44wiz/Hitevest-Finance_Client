import React from 'react'
import styles from '../styles/Login.module.css'
import landingImg from '../assets/landing.png'
import ResetPass from '../components/Login/ResetPass'
import { Navigate } from 'react-router'
import { useSelector } from 'react-redux'

const Login = () => {
    const user = useSelector(state => state.user.userDetails)
    if(user){
        return <Navigate to='/dashboard' />
    }
    return (
        <div className={styles.mainContainer}>
            <div className={styles.subContainer}>
                <img src={landingImg} alt="" />
                <ResetPass />
            </div>

        </div>
    )
}

export default Login
