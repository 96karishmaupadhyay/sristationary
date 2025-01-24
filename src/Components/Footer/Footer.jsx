import React from 'react'
import styles from "./footer.module.css"
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
    <div >
        <h2>Policy</h2>
        <div className={styles.list_container}>
        <ul className={styles.list}>
            <li>Products</li>
            <li>Policy</li>
            <li>Newsletter</li>
        </ul>
        <ul className={styles.list}>
            <li>Review</li>
            <li>About</li>
        </ul>
        </div>
        <div className={styles.corner}><span>fb</span>
        <span>instagram</span>
        <span>twitter</span></div>
    </div>
    <div className={styles.query}>
        <h2>Contact Us</h2>
        <input type="text" placeholder='@gmail or number' className={styles.query_input}/>
        <input type="text" placeholder='query' className={styles.query_input}/>
        <button className={styles.query_btn}>Submit</button>
    </div>
   
      </div>
      <hr/>
      <h6>All rights are related to the @company Privacy</h6>
    </div>
  )
}

export default Footer
