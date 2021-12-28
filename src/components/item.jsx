import React from 'react';
import ItemStyle from '@styles/ItemStyle';

const Item = () => {
  return (
    <ItemStyle>
      <div className="item-container__image">
        <img src="https://via.placeholder.com/150" alt="item" />
      </div>
      <div className="item-container__info">
        <h4>Item Name</h4>
        <p>Item Description</p>
        <p>Item Price</p>
      </div>
    </ItemStyle>
  );
}

export default Item;
