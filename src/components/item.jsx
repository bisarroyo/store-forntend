import React from 'react';
import ItemStyle from '@styles/ItemStyle';

const Item = ({product}) => {
  return (
    <ItemStyle>
      <div className="item-container__image">
        <img src={product.image} alt="item" />
      </div>
      <div className="item-container__info">
        <h4>{product.name}</h4>
        <p>{product.price}</p>
      </div>
    </ItemStyle>
  );
}

export default Item;
