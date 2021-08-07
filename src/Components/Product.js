import React from 'react';
import '../Pages/Home.css';

const Product = ({ product }) => {
  return (
    <>
      <div className="card">
        <img src={product.thumbnail} alt={`${product.name}`} />

        <div className="content">
          <h3>{product.name}</h3>
          <span>${product.price}</span>
          <span style={{ marginLeft: 'calc(100% - 150px)' }}>
            {product.inStock ? 'In Stock!' : 'Out of stock'}
          </span>
          <button type="button">Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default Product;
