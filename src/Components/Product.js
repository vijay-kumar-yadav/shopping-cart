import React, { useContext } from 'react';
import { CartContext } from '../Pages/Checkout/Context';
import '../Pages/Home.css';

const Product = ({ product }) => {
  const { AddToCart } = useContext(CartContext);

  return (
    <>
      <div className="card">
        <img src={product.thumbnail} alt={`${product.name}`} />
        <div className="content">
          <h3>{product.name}</h3>
          <span>${product.price}</span>
          <span style={{ marginLeft: 'calc(100% - 105px)' }}>
            {product.inStock ? 'In Stock!' : 'Out of stock'}
          </span>
          <button type="button" onClick={() => AddToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
