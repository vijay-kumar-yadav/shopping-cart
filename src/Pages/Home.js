import React from 'react';

import './Home.css';
import { ProductProvider } from '../Helper/Helper';
import Product from '../Components/Product';

const Home = () => {
  const products = ProductProvider();
  return (
    <>
      <h1 className="h1">Products</h1>
      <div id="product">
        {products.map(product => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};
export default Home;
