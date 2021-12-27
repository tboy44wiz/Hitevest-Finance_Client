import React, {useEffect, useState} from 'react'
import OtpInput from 'react-otp-input'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from '../../styles/Login.module.css'
import { verifyOtp } from '../../store/asyncActions/userAsyncActions'
import { useNavigate } from 'react-router'
import Loader from '../Loader'
const Otp = () => {
    const [otp, setOtp] = useState('')
    const userId = useSelector(state => state.user.userDetails.id)
    const {loading} = useSelector(state => state.user)
    const {isVerified} = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const formObj = new FormData()
        formObj.append('otp', otp)
        formObj.append('user_id', userId)
        dispatch(verifyOtp(formObj))
    }
    useEffect(() => {
        if(isVerified) {
            navigate('/dashboard')
        }
    }, [isVerified, navigate])
    return (
        <div className={styles.leftCont}>
            {loading && <Loader />}
            <form onSubmit={handleSubmit}>
                <h2>An OTP has been sent to your Email address or Phone number</h2>
                <div className={styles.otpCont}>
                    <p className={styles.otpText1}>Enter OTP number here</p>
                    <OtpInput 
                     value={otp}
                     onChange={(OTP) => setOtp(OTP)}
                     inputStyle={{
                         border: '1px solid #0C8DE6',
                         borderRadius: '10px',
                         height: '50px',
                         width: '50px',
                         fontSize: '22px'
                     }}
                     containerStyle={{
                         display: 'flex',
                         alignItems: 'center',
                         width:'80%',
                         margin: '0 auto',
                         justifyContent: 'space-between'
                     }}
                     isInputNum={true}
                     focusStyle={{outline: 'none'}}
                     numInputs={5}
                    />
                    <p className={styles.otpText2}>Didn’t get OTP? <Link to="/">send again</Link></p>
                </div>
                <div className={styles.buttonCont}>
                    <button className={styles.submitButton}>Validate</button>
                </div>
            </form>
        </div>
    )
}

export default Otp
