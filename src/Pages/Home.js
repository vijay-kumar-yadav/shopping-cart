import React, { useContext } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { GiShoppingCart } from 'react-icons/gi';
import { useProductProvider } from '../Helper/Helper';
import Product from '../Components/Product';
import { CartContext } from './Checkout/Context';

const Home = () => {
  const { totalItem } = useContext(CartContext);
  const products = useProductProvider();
  return (
    <>
      <h1 className="h1">Products</h1>
      <div className="cart-icon">
        <Link to="/Checkout">
          <GiShoppingCart size="5rem" />

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
