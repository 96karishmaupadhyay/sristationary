import React, { useState } from 'react'
import styles from "./productmodal.module.css"
import axios from "axios"
const ProductModel = ({addProduct,modal}) => {//both from 
    const [product,setProduct]=useState({
        name:"",
        price:"",
        stock:"",
        image:""
    })

    
    const handleChange = (e) => {
      const { name, value } = e.target;
      
      if (name === 'file') {
       
        const file = e.target.files[0];
        if (file) {
          
          const imageUrl = URL.createObjectURL(file);
    
          setProduct({
            ...product,
            image: file, 
            imageUrl: imageUrl, 
          });
          localStorage.setItem("product", JSON.stringify({
            ...product,
            image: file,
            imageUrl: imageUrl
          }));
        }
      } else {
        setProduct({ ...product, [name]: value });
      }
    };
    

    
    const handleSave=async(e)=>{
e.preventDefault();
if(!product.image){
  console.error("image is manadatory");
  return;
}
const productData=new FormData();
productData.append("name",product.name);
productData.append("price",product.price);
productData.append("stock",product.stock);
productData.append("image",product.image)
try {
  console.log('Product data to be sent:', product);

  // Send product data to the backend
  const response = await axios.post('http://localhost:5500/api/products', productData, {
    headers: {
      'Content-Type': 'multipart/form-data', // Important for file upload
    },
  });
  addProduct({ ...product, _id: response.data._id })
  console.log(`Response data: ${JSON.stringify(response.data)}`);

  modal(false);
} catch (error) {
  console.error('Error saving product:', error.response ? error.response.data : error.message);
}

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
