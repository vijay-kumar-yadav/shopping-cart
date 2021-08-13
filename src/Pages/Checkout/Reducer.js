/* eslint-disable prefer-const */
/* eslint-disable no-param-reassign */
/* eslint-disable no-alert */
import { Alert } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

let cart = [];
export const AddCart = item => {
  if (!item.inStock && item !== []) {
    Alert.info('Out of stock');
  }
  if (item !== [] && item.inStock) {
    Alert.success('Added to cart');
  }
  if (item === 'clear') cart = [];
  else cart.push(item);

  return cart;
};
export const Reducer = (state, action) => {
  // const product = useProduct();
  switch (action.type) {
    case 'REMOVE_ITEM': {
      cart = state.item.filter(curElem => {
        return curElem.id !== action.payload;
      });
      return {
        ...state,
        item: cart,
      };
    }
    case 'CLEAR_CART': {
      Alert.success('Cart cleared');
      cart = AddCart('clear');

      return {
        ...state,
        item: cart,
      };
    }
    case 'INCREMENT': {
      const updatedCart = state.item.map(e => {
        if (e.id === action.payload) {
          return { ...e, quantity: e.quantity + 1 };
        }
        return e;
      });

      return { ...state, item: updatedCart };
    }
    case 'DECREMENT': {
      const updatedCart = state.item
        .map(e => {
          if (e.id === action.payload) {
            return { ...e, quantity: e.quantity - 1 };
          }
          return e;
        })
        .filter(curElem => {
          return curElem.quantity !== 0;
        });
      cart = updatedCart;

      return { ...state, item: updatedCart };
    }
    case 'GET_TOTAL': {
      const { totalItem } = state.item.reduce(
        (accum, curVal) => {
          const { quantity } = curVal;
          accum.totalItem += quantity;
          return accum;
        },
        { totalItem: 0 }
      );
      return { ...state, totalItem };
    }
    case 'GET_TOTAL_AMOUNT': {
      const { totalAmount } = state.item.reduce(
        (accum, curVal) => {
          let { price, quantity } = curVal;
          price *= quantity;
          accum.totalAmount += price;
          return accum;
        },
        { totalAmount: 0 }
      );
      return { ...state, totalAmount };
    }
    case 'ADDTOCART': {
      const oldItem = state.item.includes(action.products);
      if (oldItem) {
        Alert.info('Product already in cart');
        return { ...state };
      }
      cart = AddCart(action.products).filter(e => e.inStock === true);
      return {
        ...state,
        item: cart,
      };
    }
    default: {
      alert('SOME ERROR HAPPEN');
    }
  }
  return state;
};
