import React from 'react'
import styles from '../../../styles/dashboard/DepositModal.module.css'
import cancel from '../../../assets/dashboard/cancel.svg'
// import Success from './Success'
const WithdrawUsdt = ({setShowModal}) => {
    return (
        <div className={styles.container}>
            <span onClick={() => setShowModal(false)} className={styles.cancel}>
                <img src={cancel} alt="" />
            </span>
            {<form>
                <h2>Make withdrawal in USDT</h2>
                <div className={styles.inputContainer}>
                    <label htmlFor="amount">Enter the amount you will like to withdraw</label>
                    <div className={styles.customInput}>
                        <p>$</p>
                        <input type="number" id="amount"/>
                    </div>
                </div>
                <div className={styles.buttonCont}>
                    <button type="submit">Withdraw</button>
                </div>
            </form>
            }
            {/* {
                <Success message="Payment was deducted from your deposit wallet"/>
            } */}
        </div>
    )
}

export default WithdrawUsdt
