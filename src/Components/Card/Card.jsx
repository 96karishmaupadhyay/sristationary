import React from 'react'
import styles from "./card.module.css"

const Card = ({item}) => {
  console.log(item.image)
  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <img src={item.image} alt={item.name}  width={250} height={250}  />
      </div>
      <div className={styles.text_container}>
        <h5>{item.name}      <span style={{float:'right'}}>${item.price}</span></h5>
        <p>{item.description}</p>
      </div>
      <div className={styles.cart_btn}>
        <button>Add to cart</button>
      </div>
    </div>
  )
}

export default Card
