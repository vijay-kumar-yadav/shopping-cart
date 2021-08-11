import React, { useContext } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import cart from './Checkout/images/cart.png';
import { useProduct } from '../Helper/Helper';
import Product from '../Components/Product';
import { CartContext } from './Checkout/Context';

const Home = () => {
  const { totalItem } = useContext(CartContext);
  const products = useProduct();
  return (
    <>
      <h1 className="h1">Products</h1>
      <div className="cart-icon">
        <Link to="/Checkout">
          <img src={cart} alt="cart" />
          <p>{totalItem}</p>
        </Link>
      </div>
      <div id="product">
        {products.map(product => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};
export default Home;
