import React, { useContext } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Link } from 'react-router-dom';
import { GiShoppingCart } from 'react-icons/gi';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { CartContext } from './Context';
import Item from './Item';

const ContextCart = () => {
  const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);

  if (item.length === 0) {
    return (
      <>
        <div className="body">
          <header>
            <div className="continue-shopping">
              <Link to="/Home" style={{ color: 'black' }}>
                <IoMdArrowRoundBack size="4rem" />
              </Link>
              <h3>continue shopping</h3>
            </div>

            <div className="cart-icon">
              <GiShoppingCart size="5rem" />
              <p
                style={{
                  position: 'absolute',
                  width: '2rem',
                  height: '2rem',
                  right: '-0.6rem',
                  top: ' 2.6rem',
                  borderRadius: '50%',
                  background: ' #99cbf7',
                  boxSizing: 'border-box',
                  fontSize: '1.6rem',
                  fontWeight: ' bolder',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#333 ',
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
            <Link to="/Home" style={{ color: 'black' }}>
              <IoMdArrowRoundBack size="2rem" />
            </Link>
            <h3>continue shopping</h3>
          </div>

          <div className="cart-icon">
            <GiShoppingCart size="5rem" />

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
