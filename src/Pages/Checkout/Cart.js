import React, { useEffect, useReducer } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { ErrorBoundary } from '../../Components/ErrorBoundry';
import { CategoryProvider, ProductProvider } from '../../Helper/Helper';
import './Cart.css';
import { Item } from './Item';
import { reducer } from './Reducer';

const Cart = () => {
  const products = ProductProvider();
  const category = CategoryProvider();
  const initialState = {
    item: products,
    totalAmount: 0,
    totalItem: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const removeItem = id => {
    return dispatch({
      type: 'REMOVE_ITEM',
      payload: id,
    });
  };
  const clearCart = () => {
    return dispatch({
      type: 'CLEAR_CART',
    });
  };
  const increment = id => {
    return dispatch({
      type: 'INCREMENT',
      payload: id,
    });
  };
  const decrement = id => {
    return dispatch({
      type: 'DECREMENT',
      payload: id,
    });
  };
  useEffect(() => {
    dispatch({ type: 'GET_TOTAL' });
    dispatch({ type: 'GET_TOTAL_AMOUNT' });
  }, [state.item]);
  if (state.item.length === 0) {
    return (
      <>
        <div className="body">
          <header>
            <div className="continue-shopping">
              <img
                src="./images/arrow.png"
                alt="arrow"
                className="arrow-icon"
              />
              <h3>continue shopping</h3>
            </div>
            <div className="cart-icon">
              <img src="./images/cart.png" alt="cart" />
              <p>0</p>
            </div>
          </header>
          <section className="main-cart-section">
            <h1>shopping cart</h1>
            <p className="total-items">
              you have <span className="total-items-count">0</span> items in
              shopping cart
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
            <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
            <h3>continue shopping</h3>
          </div>
          <div className="cart-icon">
            <img src="./images/cart.png" alt="cart" />
            <p>{state.totalItem}</p>
          </div>
        </header>
        <section className="main-cart-section">
          <h1>shopping cart</h1>
          <p className="total-items">
            you have{' '}
            <span className="total-items-count">{state.totalItem}</span> items
            in shopping cart
          </p>
          <div className="cart-items">
            <ErrorBoundary>
              <div className="cart-items-container">
                <Scrollbars>
                  {state.item.map(product => (
                    <Item
                      key={product.id}
                      name={product.name}
                      price={product.price}
                      img={product.thumbnail}
                      id={product.id}
                      quantity={product.quantity}
                      removeItem={removeItem}
                      increment={increment}
                      decrement={decrement}
                      {...state}
                      description={
                        product.categoryId === category[0].id
                          ? category[0].description
                          : category[1].description
                      }
                    />
                  ))}
                </Scrollbars>
              </div>
            </ErrorBoundary>
          </div>
          <div className="card-total">
            <h3>
              Cart Total : <span>${state.totalAmount}</span>
            </h3>
            <button type="button">Checkout</button>
            <button type="button" className="clear-cart" onClick={clearCart}>
              Clear cart
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cart;
