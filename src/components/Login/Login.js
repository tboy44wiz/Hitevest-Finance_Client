import React, { useEffect, useState } from 'react'
import styles from '../../styles/Login.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../store/asyncActions/userAsyncActions'
import { Link , useNavigate} from 'react-router-dom'
import Loader from '../Loader'

const Login = ({setStatus}) => {
    const navigate = useNavigate()
    const user = useSelector((state) => state.user.userDetails)
    const isLoading = useSelector(state => state.user.loading)
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        if(email && password){
            const formDetails = new FormData()
            formDetails.append('email', email)
            formDetails.append('password', password)
            dispatch(loginUser(formDetails))
        }    
    }
    useEffect(() => {
        if(user){
            navigate('/dashboard')
        }
    }, [user, navigate])
    
    return (
        <div className={styles.leftCont} >
            {isLoading && <Loader />}
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <h2>Login to your account</h2>
                <div className={styles.loginInputCont}>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email"/>
                </div>
                <div className={styles.loginInputCont}>
                    <label htmlFor="password">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" name="password"/>
                </div>
                <p className={styles.loginText1}>Forget password? <button onClick={() => setStatus('resetpass')}>Reset now</button></p>
                <div className={styles.buttonCont}>
                    <button className={styles.submitButton}>Login</button>
                </div>
                <p className={styles.loginText2}>Don’t have an account? <Link to="/register">Register</Link></p>
            </form>
        </div>
    )
}

export default Login
