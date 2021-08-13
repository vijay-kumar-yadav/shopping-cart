import { useState } from 'react';
// import { Alert } from 'rsuite';
import product from '../Files/products.json';
import 'rsuite/dist/styles/rsuite-default.css';

import categories from '../Files/categories.json';

export const useProduct = () => {
  const [products] = useState(product);

  return products;
};
export const useCategory = () => {
  const [category] = useState(categories);
  return category;
};
// export const useProduct = () => product;
// export const useCategory = () => categories;
// let cart = [];
// export const AddCart = item => {
//   if (!item.inStock && item !== []) {
//     Alert.info('Out of stock');
//   }
//   if (item !== [] && item.inStock) {
//     Alert.success('Added to cart');
//   }
//   if (item === 'clear') cart = [];
//   else cart.push(item);

//   return cart;
// };
