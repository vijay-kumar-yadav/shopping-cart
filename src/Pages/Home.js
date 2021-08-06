import React from 'react';

import './Home.css';
import { ProductProvider } from '../Helper/Helper';

const Home = () => {
  const products = ProductProvider();
  const BtnHandler = () => {};
  return (
    <>
      <h1 className="h1">Products</h1>
      <div id="product">
        {products.map(product => (
          <div className="card" key={product.id}>
            <img src={product.thumbnail} alt={`${product.name}`} />

            <div className="content">
              <h3>{product.name}</h3>
              <span>${product.price}</span>
              <span style={{ marginLeft: 'calc(100% - 150px)' }}>
                {product.inStock ? 'In Stock!' : 'Out of stock'}
              </span>
              <button type="button" onClick={BtnHandler}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Home;
