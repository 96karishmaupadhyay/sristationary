import React, { useState } from 'react'
import styles from "./productlist.module.css"
import Pagination from '../Pagination/Pagination'
const ProductList = ({products,editbtn,deletebtn}) => {
    const [currentPage,setCurrentPage]=useState(1)
    const itemPerPage=10
    const indexOfLastItem=currentPage*itemPerPage;
    const indexOfFirstItem=indexOfLastItem-itemPerPage;
    const currentProducts=products.slice(indexOfFirstItem,indexOfLastItem)
  return (
    <div>
        <div className={styles.product_items}>
        {currentProducts.map((product) => (
          <div key={product._id} className={styles.product_item}>
            <img src={product.imageUrl} alt="" />
            <h6>{product.name}</h6>
            {/* <p>{product.description}</p> */}
            <p>Price: ₹{product.price}</p>
            <div className={styles.btn_container}>
            <button onClick={() => editbtn(product)} className={styles.edit}>Edit</button>
            <button onClick={() =>{
              console.log("Product object:", product)
              deletebtn(product._id)}} className={styles.delete}>Delete</button>
            </div>
            
          </div>
        ))}
      </div>
      {products.length > itemPerPage && (
        <Pagination
          totalItems={products.length}
          itemsPerPage={itemPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  )
}

export default ProductList
