import React, { useState } from 'react'
import TransCard from '../../components/dashboard/TransCard'
import styles from '../../styles/dashboard/Deposit.module.css'
import btcIcon from '../../assets/dashboard/bitcoin.png'
import tether from '../../assets/dashboard/tether.png'
import Modal from '../../components/Modal'
import DepositModalBtc from '../../components/dashboard/subModalComponent/DepositModalBtc'
import calendar from '../../assets/dashboard/calendar.svg'
import DepositModalUsdt from '../../components/dashboard/subModalComponent/DepositModalUsdt'
const Deposit = () => {
    const [showModal, setShowModal] = useState(false)
    const [depositType, setDepositType] = useState('')
    return (
        <div>
            <div className={styles.topContainer}>
                <TransCard
                 image={btcIcon}
                 heading="Make a deposit in Bitcoin"
                 limit="Limit: 1000 to 100000 USD"
                 charges="Charge: 0 USD + 0%"
                 onClick={()=>{
                    setShowModal(true);
                    setDepositType('btc')
                 }}
                 btnValue="Deposit"
                />
                <TransCard
                 image={tether}
                 heading="Make a deposit in USDT"
                 limit="Limit: 1000 to 100000 USD"
                 charges="Charge: 0 USD + 0%"
                 onClick={()=>{
                    setShowModal(true);
                    setDepositType('usdt')
                 }}
                 btnValue="Deposit"
                />
            </div>
            <div className={styles.bottomContainer}>
                <div className={styles.tableTop}>
                    <h2>Deposit</h2>
                    <div className={styles.tableDate}>
                        <button className={styles.active}><img src={calendar} alt="" /></button> 
                        <button className={styles.active}>D</button>
                        <button className={styles.normalDate}>W</button>
                        <button className={styles.normalDate}>M</button>
                        <button className={styles.normalDate}>Y</button>
                    </div> 
                </div>
                <div className={styles.tableCont}>
                    <div className={styles.tableHeader}>
                        <div>S/N</div>
                        <div>Transaction ID</div>
                        <div>Payment mode</div>
                        <div>Amount</div>
                        <div>Status</div>
                        <div>Time</div>
                    </div>
                    {/* {
                        data.map((row, index) => {
                            return (
                            <div className={styles.tableRow} key={index}>
                                <div>{index + 1}</div>
                                <div>{row.date}</div>
                                <div>{row.transactionId}</div>
                                <div>{row.amount}</div>
                                <div>{row.balance}</div>
                                <div>{row.details}</div>
                            </div>
                            )
                        })
                    } */}
                </div>
            </div>
            {
             showModal && (
                    <Modal setShowModal={setShowModal} Component={depositType === 'btc'? DepositModalBtc : DepositModalUsdt}/>
                )
            }
        </div>
    )
}

export default Deposit
