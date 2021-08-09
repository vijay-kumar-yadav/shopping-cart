/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from 'react';
import { CartContext } from './Context';

const Item = ({ id, name, thumbnail, price, quantity, categoryId }) => {
  const { removeItem, increment, decrement, category } =
    useContext(CartContext);

  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={thumbnail} alt="iamge" />
        </div>

        <div className="title">
          <h2>{name}</h2>
          <p>
            {categoryId === category[0].id
              ? category[0].description
              : category[1].description}
          </p>
        </div>

        <div className="add-minus-quantity">
          <i className="fas fa-minus minus" onClick={() => decrement(id)} />
          <input type="text" placeholder={quantity} disabled />
          <i className="fas fa-plus add" onClick={() => increment(id)} />
        </div>

        <div className="price">
          <h3>${price}</h3>
        </div>

        <div className="remove-item">
          <i
            className="fas fa-trash-alt remove"
            onClick={() => removeItem(id)}
          />
        </div>
      </div>

      <hr />
    </>
  );
};

export default Item;
