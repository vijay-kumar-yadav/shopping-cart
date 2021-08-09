import React, { useContext, useEffect, useState } from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import './Checkout/Cart.css';
import { Checkbox, CheckboxGroup, Dropdown, Icon } from 'rsuite';
import { Link } from 'react-router-dom';
import { useCategoryProvider, useProductProvider } from '../Helper/Helper';
import {
  Dropdown1,
  Container,
  Main,
  Sidebar,
  SidebarBtn,
} from './Category.Styled';

import './Home.css';
import Product from '../Components/Product';
import { CartContext } from './Checkout/Context';

const Category = () => {
  const { totalItem } = useContext(CartContext);
  const category = useCategoryProvider();
  const products = useProductProvider();
  const [filter, setFilter] = useState([]);
  const [disable1, setDisable1] = useState(0);
  const [disable2, setDisable2] = useState(0);
  const [disable3, setDisable3] = useState(0);

  let filteredProducts = null;
  useEffect(() => {
    setFilter(products);
  }, [products]);

  const onChange = (categoryId, ifCheck) => {
    if (ifCheck) {
      filteredProducts = products.filter((el, index) =>
        categoryId === el.categoryId ? products[index] : null
      );
      setFilter(filteredProducts);
      if (categoryId === category[0].id) {
        setDisable2(2);
        setDisable3(3);
      } else {
        setDisable1(1);
        setDisable3(3);
      }
    } else {
      filteredProducts = [];
      setFilter(products);
      if (categoryId === category[0].id) {
        setDisable2(0);
        setDisable3(0);
      } else {
        setDisable1(0);
        setDisable3(0);
      }
    }
  };
  const onChange1 = (a, ifCheck) => {
    if (ifCheck) {
      filteredProducts = products.filter((el, index) =>
        el.delivery ? products[index] : null
      );
      setDisable1(1);
      setDisable2(2);
      setFilter(filteredProducts);
    } else {
      filteredProducts = [];
      setFilter(products);
      setDisable1(0);
      setDisable2(0);
    }
  };
  const onSelect = Arr => {
    if (category[0].id === Arr.id) {
      filteredProducts = products.filter((el, index) =>
        Arr.id === el.categoryId ? products[index] : null
      );
      setFilter(filteredProducts);
    } else {
      filteredProducts = products.filter((el, index) =>
        Arr.id === el.categoryId ? products[index] : null
      );
      setFilter(filteredProducts);
    }
  };
  const onSelectD = () => {
    filteredProducts = products.filter((el, index) =>
      el.delivery ? products[index] : null
    );
    setFilter(filteredProducts);
  };
  return (
    <>
      <div className="cart-icon">
        <Link to="/Checkout">
          <img src="./images/cart.png" alt="cart" />
          <p>{totalItem}</p>
        </Link>
      </div>
      <Dropdown1>
        <Dropdown icon={<Icon icon="filter" />} title="FILTER">
          <Dropdown.Item onSelect={() => setFilter(products)}>
            All Products
          </Dropdown.Item>
          <Dropdown.Item eventKey={category[0]} onSelect={onSelect}>
            Keyboard
          </Dropdown.Item>
          <Dropdown.Item eventKey={category[1]} onSelect={onSelect}>
            Headphone
          </Dropdown.Item>
          <Dropdown.Item onSelect={onSelectD}>Delivery</Dropdown.Item>
        </Dropdown>
      </Dropdown1>
      <Container>
        <Sidebar>
          <h2 style={{ marginTop: '20px' }}>Filter</h2>
          <SidebarBtn>
            <CheckboxGroup>
              {category[0] && (
                <Checkbox
                  key={category[0].id}
                  value={category[0].id}
                  onChange={onChange}
                  disabled={disable1 === 1}
                >
                  {' '}
                  {category[0].name}
                </Checkbox>
              )}
              {category[1] && (
                <Checkbox
                  key={category[1].id}
                  value={category[1].id}
                  onChange={onChange}
                  disabled={disable2 === 2}
                >
                  {' '}
                  {category[1].name}
                </Checkbox>
              )}
              <Checkbox onChange={onChange1} disabled={disable3 === 3}>
                {' '}
                Delivery
              </Checkbox>
            </CheckboxGroup>
          </SidebarBtn>
        </Sidebar>
        <Main>
          <div id="product">
            {filter.map(product => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </Main>
      </Container>
    </>
  );
};

export default Category;
