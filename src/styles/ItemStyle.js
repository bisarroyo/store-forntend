import styled from 'styled-components';

const ItemStyle = styled.div`
  width: 155px;
  height: 215px;
  margin: 5px;
  border: 1px solid #00000011;
  box-shadow: 0px 0px 10px 0px #00000011;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .item-container__image {
    
    img {
      height: 120px;
      width: 120px;
      border-radius: 5px;
    }
  }

  .item-container__info {
    h4 {
      margin: 0px 5px;
    }
    p {
      margin: 5px;
    }
  }
`;

export default ItemStyle;