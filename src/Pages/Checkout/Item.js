/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

export const Item = ({
  name,
  price,
  img,
  description,
  id,
  removeItem,
  increment,
  decrement,
  quantity,
}) => {
  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt={name} />
        </div>
        <div className="title">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <div className="add-minus-quantity">
          <i className="fas fa-minus minus" onClick={() => decrement(id)} />
          <input
            type="text "
            placeholder={quantity === 0 ? removeItem(id) : quantity}
          />
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
