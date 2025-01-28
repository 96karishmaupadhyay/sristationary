import React from 'react';
import styles from './pagination.module.css';

const Pagination = ({ totalItems, itemsPerPage, currentPage, setCurrentPage }) => {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [...Array(pageCount).keys()].map(num => num + 1);

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${styles.pageButton} ${styles.prevNextButton}`}
      >
        &lt; 
      </button>

      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => handlePageChange(number)}
          className={`${styles.pageButton} ${number === currentPage ? styles.active : ''}`}
        >
          {number}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === pageCount}
        className={`${styles.pageButton} ${styles.prevNextButton}`}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
