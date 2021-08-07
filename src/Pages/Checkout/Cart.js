import React, { useReducer, useEffect } from 'react';

import './Cart.css';
import ContextCart from './ContextCart';
import { ProductProvider, CategoryProvider } from '../../Helper/Helper';
import { reducer } from './Reducer';
import { CartContext } from './Context';

const Cart = () => {
  const products = ProductProvider();
  const category = CategoryProvider();

  const initialState = {
    item: products,
    totalAmount: 0,
    totalItem: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  // to delete the indv. elements from an Item Cart
  const removeItem = id => {
    return dispatch({
      type: 'REMOVE_ITEM',
      payload: id,
    });
  };

  // clear the cart
  const clearCart = () => {
    return dispatch({ type: 'CLEAR_CART' });
  };

  // increment the item
  const increment = id => {
    return dispatch({
      type: 'INCREMENT',
      payload: id,
    });
  };

  // decrement the item
  const decrement = id => {
    return dispatch({
      type: 'DECREMENT',
      payload: id,
    });
  };

  // we will use the useEffect to update the data
  useEffect(() => {
    dispatch({ type: 'GET_TOTAL' });
    dispatch({ type: 'GET_TOTAL_AMOUNT' });
  }, [state.item]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        category,
        removeItem,
        clearCart,
        increment,
        decrement,
      }}
    >
      <ContextCart />
    </CartContext.Provider>
  );
};

export default Cart;
