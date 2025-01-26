import React from 'react'
import styles from "./login.module.css"
const Login = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Welcome to Sristation</h1>
      <div className={styles.login_box}>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" placeholder='Type your email here'/>
        </div>
   <div>
    <label htmlFor="">Password</label>
    <input type="password" placeholder='Password'/>
   </div>
<div>
<button>Login</button>
</div>
  
      </div>
    </div>
  )
}

export default Login
