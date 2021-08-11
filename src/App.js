import React, { useEffect, useReducer, useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Category from './Pages/Category';
import Checkout from './Pages/Checkout/Cart';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Landing from './Pages/Landing';
import { CartContext } from './Pages/Checkout/Context';
import { Reducer } from './Pages/Checkout/Reducer';
import { useCategory } from './Helper/Helper';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const initialState = localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list'))
    : {
        item: [],
        totalAmount: [],
        totalItem: [],
      };
  const [state, dispatch] = useReducer(Reducer, initialState);

  // store in local storage
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(state));
  }, [state]);
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
  // add to cart
  const AddToCart = product => {
    return dispatch({
      type: 'ADDTOCART',
      products: product,
    });
  };
  const category = useCategory();
  // we will use the useEffect to update the data
  useEffect(() => {
    dispatch({ type: 'GET_TOTAL' });
    dispatch({ type: 'GET_TOTAL_AMOUNT' });
  }, [state.item.length, state.item]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        category,
        removeItem,
        clearCart,
        increment,
        decrement,
        AddToCart,
      }}
    >
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Switch>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route exact path="/Category">
          <Category />
        </Route>
        <Route exact path="/Checkout">
          <Checkout />
        </Route>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route>
          <div>Not found</div>
        </Route>
      </Switch>
    </CartContext.Provider>
  );
}

export default App;
