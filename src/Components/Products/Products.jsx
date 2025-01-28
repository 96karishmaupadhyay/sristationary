import React from 'react';
import styles from './products.module.css';
import data from '../../data';
import Card from '../Card/Card';

const Products = () => {
  console.log(data)
  if (!data || data.length === 0) {
    return <p>No products available</p>;  // Added empty state handling
  }

  return (
    <div className={styles.productsWrapper}>  {/* Wrapper class for styling */}
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
      {/* {products.length > itemPerPage && (
        <Pagination
          totalItems={products.length}
          itemsPerPage={itemPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )} */}
    </div>
  );
};

export default Products;
