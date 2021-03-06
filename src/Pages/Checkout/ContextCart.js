import React, { useContext } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Link } from 'react-router-dom';
import { Alert } from 'rsuite';
import { CartContext } from './Context';
import Item from './Item';
import arrow from './images/arrow.png';
import cart from './images/cart.png';
import 'rsuite/dist/styles/rsuite-default.css';

const ContextCart = () => {
  const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);

  if (item.length === 0) {
    Alert.info('Cart is empty');
    return (
      <>
        <div className="body">
          <header>
            <div className="continue-shopping">
              <Link to="/Home" style={{ color: 'black' }}>
                <img src={arrow} alt="arrow" className="arrow-icon" />
              </Link>
              <h3>continue shopping</h3>
            </div>

            <div className="cart-icon">
              <img src={cart} alt="cart" />
              <p
                style={{
                  position: 'absolute',
                  width: '2rem',
                  height: '2rem',
                  right: '-0.6rem',
                  top: '2.5rem',
                  borderRadius: ' 50%',
                  background: ' #99cbf7',

                  boxSizing: 'border-box',
                  fontSize: '1.6rem',
                  fontWeight: 'bolder',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: ' #333',
                }}
              >
                {totalItem}
              </p>
            </div>
          </header>

          <section className="main-cart-section">
            <h1>shopping Cart</h1>
            <p className="total-items">
              you have <span className="total-items-count">{totalItem} </span>{' '}
              items in shopping cart
            </p>
          </section>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="body">
        <header>
          <div className="continue-shopping">
            <Link to="/Home">
              <img src={arrow} alt="arrow" className="arrow-icon" />
            </Link>
            <h3>continue shopping</h3>
          </div>

          <div className="cart-icon">
            <img src={cart} alt="cart" />
            <p
              style={{
                position: 'absolute',
                width: '2rem',
                height: '2rem',
                right: '-0.6rem',
                top: '2.5rem',
                borderRadius: ' 50%',
                background: ' #99cbf7',

                boxSizing: 'border-box',
                fontSize: '1.6rem',
                fontWeight: 'bolder',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: ' #333',
              }}
            >
              {totalItem}
            </p>
          </div>
        </header>

        <section className="main-cart-section">
          <h1>shopping Cart</h1>
          <p className="total-items">
            you have <span className="total-items-count">{totalItem} </span>{' '}
            items in shopping cart
          </p>

          <div className="cart-items">
            <div className="cart-items-container">
              <Scrollbars>
                {item.map(curItem => {
                  return <Item key={curItem.id} {...curItem} />;
                })}
              </Scrollbars>
            </div>
          </div>

          <div className="card-total">
            <h3>
              Cart Total : <span>${totalAmount}</span>
            </h3>
            <button type="button">checkout</button>
            <button type="button" className="clear-cart" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContextCart;
