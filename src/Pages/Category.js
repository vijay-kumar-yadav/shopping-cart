import React, { useEffect, useState } from 'react';
import { Checkbox, CheckboxGroup, Dropdown } from 'rsuite';

import { CategoryProvider, ProductProvider } from '../Context/Context';
import { Container, Main, Sidebar, SidebarBtn } from './Category.Styled';

import './Home.css';

const Category = () => {
  const category = CategoryProvider();
  const products = ProductProvider();
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

  return (
    <>
      <Dropdown title="FILTER">
        <Dropdown.Item onSelect={onChange}>Keyboard</Dropdown.Item>
        <Dropdown.Item>Headphone</Dropdown.Item>
        <Dropdown.Item>Delivery</Dropdown.Item>
      </Dropdown>
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
              <>
                <div className="card" key={product.id}>
                  {/* <Link to={`/product/${product.id}`}> */}
                  <img src={product.thumbnail} alt={`${product.name}`} />
                  {/* </Link> */}
                  <div className="content">
                    <h3>
                      {/* <Link to={`/product/${product.id}`}> */}
                      {product.name}
                      {/* </Link> */}
                    </h3>
                    <span>${product.price}</span>
                    <span style={{ marginLeft: 'calc(100% - 150px)' }}>
                      {product.inStock ? 'In Stock!' : 'Out of stock'}
                    </span>
                    <button type="button">Add to Cart</button>
                  </div>
                </div>
              </>
            ))}
          </div>
        </Main>
      </Container>
    </>
  );
};

export default Category;
