/* eslint-disable prefer-const */
/* eslint-disable no-param-reassign */
/* eslint-disable no-alert */
import 'rsuite/dist/styles/rsuite-default.css';
import { Alert } from 'rsuite';
import product from '../../Files/products.json';

let cart = [];
export const Reducer = (state, action) => {
  switch (action.type) {
    case 'REMOVE_ITEM': {
      cart = state.item.filter(curElem => {
        return curElem.id !== action.payload;
      });
      return {
        ...state,
        item: state.item.filter(curElem => {
          return curElem.id !== action.payload;
        }),
      };
    }
    case 'CLEAR_CART': {
      cart = [];
      return {
        ...state,
        item: [],
      };
    }
    case 'INCREMENT': {
      const updatedCart = state.item.map(e => {
        if (e.id === action.payload) {
          return { ...e, quantity: e.quantity + 1 };
        }
        return e;
      });
      cart = updatedCart;
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
        .filter(curElem => curElem.quantity !== 0);
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
      const id = action.payload;
      const isOld = state.item.map(item => item.id).includes(id);
      // let cartItems = null;
      if (isOld) {
        Alert.info('Product Already in the Cart', 3500);

        return {
          ...state,
        };
      }
      const items = product.filter(item => {
        return item.id === id;
      });
      const [delivery] = items;
      if (!delivery.inStock) {
        Alert.info('Out of Stock');
        return {
          ...state,
        };
      }
      Alert.info('Product Added to Cart', 3500);
      const total = cart.push(...items);

      const { totalAmount } = state.item.reduce(
        (accum, curVal) => {
          let { price, quantity } = curVal;
          price *= quantity;
          accum.totalAmount += price;
          return accum;
        },
        { totalAmount: 0 }
      );
      return {
        ...state,
        item: cart,
        totalItem: total,
        totalAmount,
      };
    }
    default: {
      alert('SOME ERROR HAPPEN');
    }
  }
  return state;
};
