import React, {useState} from 'react'
import TransCard from '../../components/dashboard/TransCard'
import styles from '../../styles/dashboard/Withdraw.module.css'
import btcIcon from '../../assets/dashboard/bitcoin.png'
import wireIcon from '../../assets/dashboard/wireIcon.png'
import Modal from '../../components/Modal'
import WithdrawBtc from '../../components/dashboard/subModalComponent/WithdrawBtc'
import WithdrawUsdt from '../../components/dashboard/subModalComponent/WithdrawUsdt'
import calendar from '../../assets/dashboard/calendar.svg'
const Withdraw = () => {
    const [showModal, setShowModal] = useState(false)
    const [withdrawType, setWithdrawType] = useState('btc')
    return (
        <div>
            <div className={styles.topContainer}>
                <TransCard
                 image={btcIcon}
                 heading="Make a withdrawal in Bitcoin"
                 limit="Limit: 1000 to 100000 USD"
                 charges="Charge: 0 USD + 0%"
                 onClick={()=>{
                     setWithdrawType('btc')
                     setShowModal(true)
                 }}
                 btnValue="Withdraw"
                />
                <TransCard
                 image={wireIcon}
                 heading="Make a withdrawal with bank transfer"
                 limit="Limit: 1000 to 100000 USD"
                 charges="Charge: 0 USD + 0%"
                 onClick={()=>{
                     setWithdrawType('usdt')
                     setShowModal(true)
                 }}
                 btnValue="Withdraw"
                />
            </div>
            <div className={styles.bottomContainer}>
                <div className={styles.tableTop}>
                    <div className={styles.tableTab}>
                        <h2>Withdraw</h2>
                    </div> 
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
                        <div>Amount Withdrawn</div>
                        <div>Rate</div>
                        <div>Charge</div>
                        <div>Amount Received</div>
                        <div>Status</div>
                        <div>Date</div>
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
                    <Modal setShowModal={setShowModal} Component={withdrawType === 'btc' ? WithdrawBtc: WithdrawUsdt}/>
                )
            }
        </div>
    )
}

export default Withdraw
