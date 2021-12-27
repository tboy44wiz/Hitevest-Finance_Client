import React, { useState } from 'react'
import styles from '../../styles/Login.module.css'
import eye from '../../assets/eye.svg'
const ResetPass = ({setStatus}) => {
    const [showP1, setShowP1] = useState(false)
    const [showP2, setShowP2] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus('login')
    }
    return (
        <div className={styles.leftCont}>
            <form onSubmit={handleSubmit} className={styles.resetForm}>
            <h2>Reset your password</h2>
                <div className={styles.otpInputCont}>
                    <label htmlFor="pass1">Enter new password</label>
                    <div className={styles.customInput}>
                        <input type={showP1 ? "text": "password"} id="pass1" name="pass1"/>
                        <button type="button" onClick={(e) => {
                            e.preventDefault()
                            setShowP1(!showP1)
                            }}>
                         <img src={eye} alt="toggle" />
                        </button>
                    </div>
                </div>
                <div className={styles.otpInputCont}>
                    <label htmlFor="pass2">Enter new password again</label>
                    <div className={styles.customInput}>
                        <input  type={showP2 ? "text": "password"} id="pass2" name="pass2"/>
                        <button type="button" onClick={(e) => {
                            e.preventDefault()
                            setShowP2(!showP2)
                            }}>
                         <img src={eye} alt="toggle" />
                        </button>
                    </div>
                </div>
                <div className={styles.buttonCont}>
                    <button className={styles.submitButton}>Reset password</button>
                </div>
            </form>
        </div>
    )
}

export default ResetPass
