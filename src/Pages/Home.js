import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('/Files/products.json')
      .then(res => {
        return res.json();
      })
      .then(res => {
        setProducts(res);
      })
      .catch(err => {
        // eslint-disable-next-line no-alert
        alert(err);
      });
  }, []);

  return (
    <>
      <h1 className="h1">Products</h1>
      <div id="product">
        {products.map(product => (
          <div className="card" key={product.id}>
            {/* <Link to={`/product/${product.id}`}> */}
            <img src={product.thumbnail} alt={`${product.name}`} />
            {/* </Link> */}
            <div className="content">
              <h3>
                {/* <Link to={`/product/${product.id}`}> */}
                {product.name}
                {/* </Link> */}
              </h3>
              <span>${product.price}</span>
              <span style={{ marginLeft: 'calc(100% - 150px)' }}>
                {product.inStock ? 'In Stock!' : 'Out of stock'}
              </span>
              <button type="button">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Home;
