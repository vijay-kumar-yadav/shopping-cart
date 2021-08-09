import { useEffect, useState } from 'react';
// import { Alert } from 'rsuite';
import product from '../Files/products.json';
import categories from '../Files/categories.json';
import 'rsuite/dist/styles/rsuite-default.css';

export const useProductProvider = () => {
  const [products, setProducts] = useState(product);
  useEffect(() => {
    let isComponentMounted = true;
    const fetchData = async () => {
      const response = await fetch('/Files/products.json');
      const newData = await response.json();
      if (isComponentMounted) {
        setProducts(newData);
      }
    };
    fetchData();
    return () => {
      isComponentMounted = false;
    };
  }, []);

  return products;
};
export const useCategoryProvider = () => {
  const [category, setCategory] = useState(categories);
  useEffect(() => {
    let isComponentMounted = true;
    const fetchData = async () => {
      const response = await fetch('/Files/categories.json');
      const newData = await response.json();
      if (isComponentMounted) {
        setCategory(newData);
      }
    };
    fetchData();
    return () => {
      isComponentMounted = false;
    };
  }, []);
  return category;
};
