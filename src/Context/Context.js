import { useEffect, useState } from 'react';
import { Alert } from 'rsuite';

export const ProductProvider = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('/Files/products.json')
      .then(res => {
        return res.json();
      })
      .then(res => {
        setProducts(res);
      })
      .catch(err => {
        Alert.error(err.message, 4000);
      });
  }, []);
  return products;
};
export const CategoryProvider = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch('/Files/categories.json')
      .then(res => {
        return res.json();
      })
      .then(res => {
        setCategory(res);
      })
      .catch(err => {
        Alert.error(err.message, 4000);
      });
  }, []);
  return category;
};
