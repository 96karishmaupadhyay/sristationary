import React, { useState } from 'react'
import styles from "./productmodal.module.css"
const ProductModel = ({addProduct,modal}) => {//both from 
    const [product,setProduct]=useState({
        name:"",
        price:"",
        stock:"",
        image:""
    })
    const handleChange=(e)=>{
        const {name,value}=e.target;
        if (name === 'file') {
            // Handle image file separately
            const file = e.target.files[0];
            if (file) {
              const imageUrl = URL.createObjectURL(file); // Create a URL for the uploaded image
              setProduct({
                ...product,
                image: imageUrl, // Store image URL in state
              });
            }
          } else {
            setProduct({ ...product, [name]: value });
          }
    }
    const handleSave=(e)=>{
e.preventDefault();
addProduct(product)
  modal(false)
    }
    const handleCancle=()=>{
        modal(false)
    }
  return (
    <div className={styles.container}>
      <input type="text" placeholder='Product name' onChange={handleChange} name='name' value={product.name}/>
      <input type="text" placeholder='Price' onChange={handleChange} name='price' value={product.price}/>
      <input type="number" onChange={handleChange} name='stock' value={product.stock}/>
      <input type="file" onChange={handleChange}  name='file'   accept="image/*"/>
      <div className={styles.btn_box}>
      <button className={styles.cancle} onClick={handleCancle}>Cancle</button>
      <button className={styles.save} onClick={handleSave}>Save Product</button>
      </div>
      
    </div>
  )
}

export default ProductModel
