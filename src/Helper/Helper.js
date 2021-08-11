import { useState } from 'react';
import product from '../Files/products.json';
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
const cart = [];
export const AddCart = item => {
  cart.push(item);
  return cart;
};
