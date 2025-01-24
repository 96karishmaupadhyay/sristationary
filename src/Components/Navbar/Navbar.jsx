import React from 'react'
import styles from "./navbar.module.css"
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.flex1}><h1>SRISTATIONARY</h1>
      <ul>
            <li>Home</li>
            <li>About</li>
            <li>Review</li>
            <li>Contact</li>
        </ul></div>

      <div className={styles.btn_container}>
        <button>Login</button>
        <button>SignUp</button>
      </div>

    </div>
  )
}

export default Navbar
