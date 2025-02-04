import React, { useState, useEffect } from 'react';
import styles from './products.module.css';
import Card from "../Card/Card";
import axios from 'axios';

const Products = () => {
  const [data, setData] = useState([]);
  const url = "https://sristationary-backend.onrender.com";

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        //
        setData(response.data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();  
  }, []);  

  if (!data || data.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div className={styles.productsWrapper}>
    
      {data.map((item) => (
        <Card key={item._id} item={item} /> 
      ))}
        
    </div>
  );
};

export default Products;
