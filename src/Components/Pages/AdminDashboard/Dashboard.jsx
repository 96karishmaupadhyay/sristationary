import React, { useState } from 'react'
import styles from "./dashboard.module.css"
import img from "../../../assets/img1.png"
import ProductModel from '../../ProductModal/ProductModel'
import ProductList from '../../ProductList/ProductList'
import axios from 'axios'
const Dashboard = () => {
    const [showModel,setShowmodel]=useState(false)
    const [products,setProducts]=useState([])
    const addProduct=(newproduct)=>{
        setProducts([...products,newproduct])
    }
  const  handleEdit=(newdetail)=>{
    setShowmodel(true)
    setProducts(products.map(product=>product._id === newdetail._id ? newdetail : product))
    }
    const handleDelete=async(_id)=>{
      try {
        
        
          setProducts((prevProducts) =>
            prevProducts.filter((product) => product._id !== _id)
      
        )
        console.log(`id num: ${_id}`);
      } catch (error) {
        console.error('Error deleting product:', error.response ? error.response.data.message : error.message);
      }
    }
  return (
    <div className={styles.container}>
      <div className={styles.admin}>
        <h1>Ram Kumar</h1>
        <img src={img} alt="" height={80} width={80} />
        <h6>Hi,I am Ram kumar a seller of stationary Product.</h6>
        <div><a href="mailto:karishmaupadhyay1996@gmail.com">admin@gmail.com</a> </div>
    <div><a href="tel:+918010634033">+91-8010634033</a></div>
        
      </div>
      <hr/>
      <div className={styles.product_list}>
        <div className={styles.add_product}>
            <h4>Add your product here</h4>
            <button onClick={()=>setShowmodel(true)}>Add here</button>
        </div>
        <div>
            <ProductList products={products} editbtn={handleEdit} deletebtn={handleDelete}/>
        </div>
        {showModel && 
        <ProductModel modal={setShowmodel} addProduct={addProduct}/>}
      </div>
    </div>
  )
}

export default Dashboard

