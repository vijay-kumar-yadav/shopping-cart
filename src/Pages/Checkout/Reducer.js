/* eslint-disable prefer-const */
/* eslint-disable no-param-reassign */
/* eslint-disable no-alert */

import { AddCart } from '../../Helper/Helper';

export const Reducer = (state, action) => {
  // const product = useProduct();
  switch (action.type) {
    case 'REMOVE_ITEM': {
      return {
        ...state,
        item: state.item.filter(curElem => {
          return curElem.id !== action.payload;
        }),
      };
    }
    case 'CLEAR_CART': {
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
        return { ...state };
      }
      const cart = AddCart(action.products);
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
