import React from 'react'
import styles from '../../../styles/dashboard/DepositModal.module.css'
import cancel from '../../../assets/dashboard/cancel.svg'
import btcIcon from '../../../assets/dashboard/btcIcon.svg'
// import Success from './Success'
const WithdrawBtc = ({setShowModal}) => {
    return (
        <div className={styles.container}>
            <button onClick={() => setShowModal(false)} className={styles.cancel}>
                <img src={cancel} alt="" />
            </button>
            <form>
                <h2>Make withdrawal in Bitcoin</h2>
                <div className={styles.inputContainer}>
                    <label htmlFor="btcaddress"> Enter bitcoin wallet address</label>
                    <input type='text' id="btcaddress"/>
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="amount">Enter the amount you will like to withdraw</label>
                    <div className={styles.customInput}>
                        <img src={btcIcon} alt="" />
                        <input type="number" id="amount"/>
                    </div>
                </div>
                <div className={styles.buttonCont}>
                    <button type="submit">Withdraw</button>
                </div>
            </form>
            {/* {
                <Success message="Payment was deducted from your deposit wallet" />
            } */}
        </div>
    )
}

export default WithdrawBtc
