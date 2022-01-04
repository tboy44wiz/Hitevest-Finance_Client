import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import styles from '../../styles/dashboard/Sidebar.module.css'
import navLinks from '../../dashboard/utils/navLinks'
import logo from '../../assets/dashboard/logo.svg'
import logout from '../../assets/dashboard/logout.svg'
import photo from '../../assets/dashboard/photo.png'
import { useDispatch, useSelector } from 'react-redux'
import { logoutReq } from '../../store/asyncActions/userAsyncActions'


const Sidebar = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const {name, referral_link } = useSelector(state => state.user.userDetails)
    const copyReferral = () => {
        window.navigator.clipboard.writeText(referral_link)
        window.alert('link copied')
    }
    const logoutUser = () => {
        window.localStorage.clear()
        dispatch(logoutReq())
        navigate('/')
    }
    return (
        <div className={styles.mainContainer}>
            <div className={styles.logo}>
                <img src={logo} alt="" />
            </div>
            <div className={styles.littleHeading}>
                <p>Menu</p>
            </div>
            <div className={styles.links}>
                {
                    navLinks.map(links => {
                        if(location.pathname === links.to) {
                            return (
                                <button className={styles.active}>
                                    <img src={links.activeIcon} alt="" />
                                    <span>{links.name}</span>
                                </button>
                            )
                        } else {
                             return (
                                <button className={styles.normal} onClick={
                                        ()=> {
                                            navigate(links.to)
                                        } 
                                    }>
                                    <img src={links.normalIcon} alt="" />
                                    <span>{links.name}</span>
                                </button>)
                        } 
                    })
                }
            </div>
            <div className={styles.userCard}>
                <div className={styles.profileImage}>
                    <div className={styles.subPic}>
                        <img src={photo} alt="" />
                    </div>
                </div>
                <p className={styles.profileName}>{name}</p>
                <div className={styles.buttonCont}>
                    {
                        location.pathname === '/dashboard/profile' ?
                        <button className={styles.activeProfileButton}>View Profile</button>:
                        <button className={styles.inActiveProfileButton} onClick={() => {
                            navigate('/dashboard/profile')
                        }}>View Profile</button>
                    }
                    <button className={styles.referalButton} onClick={copyReferral}>Copy referal link</button>
                    <button className={styles.logout} onClick={logoutUser}>
                        <img src={logout} alt="" />
                        <span>Log out</span>
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default Sidebar
