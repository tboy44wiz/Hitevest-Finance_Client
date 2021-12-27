import React, { useState } from 'react'
import styles from '../../styles/dashboard/Nav.module.css'
import searchIcon from '../../assets/dashboard/search.svg'
import notification from '../../assets/dashboard/notification.svg'
import setting from '../../assets/dashboard/setting.svg'
import security from '../../assets/dashboard/security.svg'
import wallet from '../../assets/dashboard/wallet.svg'
import lock from '../../assets/dashboard/lock.svg'
import people from '../../assets/dashboard/people.svg'
import shop from '../../assets/dashboard/shop.svg'

const Nav = () => {
    const [search, setSearch] = useState('')
    const [showDropdown, setShowDropdown] = useState(false)
    return (
        <div className={styles.navContainer}>
            <div className={styles.searchContainer}>
                <form>
                    <img src={searchIcon} alt="" />
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for something"/>
                    <button>Search</button>
                </form>
            </div>
            <div className={styles.controlsContainer}>
                <button><img src={notification} alt=""/><span>3</span></button>
                <button onClick={() => setShowDropdown(!showDropdown)}><img src={setting} alt="" /></button>
            </div>
            {
                showDropdown && (
                    <div className={styles.dropdown}>
                        <DropdownBtn text={'Transfer Balance'} image={wallet} />
                        <DropdownBtn text={'Change Password'} image={lock} />
                        <DropdownBtn text={'Support Ticket'} image={people} />
                        <DropdownBtn text={'2FA Security'} image={security} />
                        <DropdownBtn text={'Promotional Tools'} image={shop} />
                    </div>
                )
            }
            
        </div>
    )
}

const DropdownBtn = ({text, image}) => {
    return (
        <button className={styles.dropBtn}>
            <img src={image} alt="" />
            <span>{text}</span>
        </button>
    )
}

export default Nav
