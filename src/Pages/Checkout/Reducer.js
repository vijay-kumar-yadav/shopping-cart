/* eslint-disable prefer-const */
/* eslint-disable no-param-reassign */
/* eslint-disable no-alert */
export const reducer = (state, action) => {
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
      const updatedCart = state.item.map(e => {
        if (e.id === action.payload) {
          return { ...e, quantity: e.quantity - 1 };
        }
        return e;
      });
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
    default: {
      alert('SOME ERROR HAPPEN');
    }
  }
  return state;
};
