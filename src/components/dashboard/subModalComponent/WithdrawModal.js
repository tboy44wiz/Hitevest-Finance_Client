import React from 'react'
import styles from '../../../styles/dashboard/DepositModal.module.css'
const WithdrawModal = ({setShowModal}) => {
    return (
        <div className={styles.container}>
            <button onClick={() => setShowModal(false)}>x</button>
            <form>
                <h2>Make payment in Bitcoin</h2>
                <div className={styles.inputContainer}>
                    <label htmlFor="btcaddress"> Enter bitcoin wallet address</label>
                    <input type='text' id="btcaddress"/>
                </div>
                <div className={styles.buttonCont}>
                    <button type="submit">Withdraw</button>
                </div>
            </form>
        </div>
    )
}

export default WithdrawModal
