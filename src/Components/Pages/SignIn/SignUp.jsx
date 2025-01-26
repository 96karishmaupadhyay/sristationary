import React from 'react'
import styles from "./signup.module.css"
const SignUp = () => {
  return (
        <div className={styles.container}>
          <h1 className={styles.heading}>Welcome to Sristation</h1>
          <div className={styles.signup_box}>
            <div>
              <label htmlFor="">Email</label>
              <input type="email" placeholder='Type your email here'/>
            </div>
       <div>
        <label htmlFor="">Password</label>
        <input type="password" placeholder='Password'/>
       </div>
       <div>
        <label htmlFor="">Confirm Password</label>
        <input type="password" placeholder='Password'/>
       </div>
    <div>
    <button>Sign up</button>
    </div>
      
          </div>
        </div>
  )
}

export default SignUp
