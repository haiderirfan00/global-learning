import React from 'react'
import styles from '@/styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.leftnav}>
            <img src="/logo-trans.png" alt="" />
            <h2>Global Learning</h2>
        </div>
        <div className={styles.rightnav}>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Research</li>
                <li>News & Events</li>
                <li>Contact us</li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
