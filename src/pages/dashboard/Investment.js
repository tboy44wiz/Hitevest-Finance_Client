import React from 'react'
import stylesT from '../../styles/dashboard/Withdraw.module.css'
import styles from '../../styles/dashboard/Investment.module.css'
import calendar from '../../assets/dashboard/calendar.svg'

const Investment = () => {
    return (
        <div>
            <div className={styles.topContainer}>
                <Card
                 type='left'
                 header='Starter Plan'
                 percentage={20}
                />
                <Card
                 type='right'
                 header='Enterprise Plan'
                 percentage={40}
                />
            </div>
            <div className={stylesT.bottomContainer}>
                <div className={stylesT.tableTop}>
                    <div className={stylesT.tableTab}>
                        <h2>Investments</h2>
                    </div> 
                    <div className={stylesT.tableDate}>
                        <button className={stylesT.active}><img src={calendar} alt="" /></button> 
                        <button className={stylesT.active}>D</button>
                        <button className={stylesT.normalDate}>W</button>
                        <button className={stylesT.normalDate}>M</button>
                        <button className={stylesT.normalDate}>Y</button>
                    </div> 
                </div>
                <div className={styles.tableCont}>
                    <div className={styles.tableHeader}>
                        <div>S/N</div>
                        <div>Plan</div>
                        <div>Return</div>
                        <div>Received</div>
                        <div>Date Received</div>
                        <div>Next Payment</div>
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
        </div>
    )
}

const Card = ({header, type, percentage}) => {
    return(
        <div className={styles.card}>
            <h4>{header}</h4>
            <div className={styles.subCardCont}>
                <p>{percentage}%  returns on Investment</p>
                <p>Monthly payment on Investement</p>
                <p>Payments made for 12 months</p>
                <p>{
                   type ==='left'?  <span className={styles.leftTag}>Total 240%</span> : <span className={styles.rightTag}>Total 480%</span> 
                } + Capitals</p>
                <h2 className={type ==='left'? styles.left : styles.right}>$ 1000 - $ 199999 </h2>
                <form>
                    <input type='number' placeholder='Enter investment amount'/>
                    <button>Invest Now</button>
                </form>
            </div>
        </div>
    )
}



export default Investment
