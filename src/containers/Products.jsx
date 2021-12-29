import React from 'react';
import Item from '@components/item';
import ProductsStyle from '@styles/ProductsStyle'
import useGetproducts from '@hooks/useGetProducts';

const API = 'http://localhost:3000/api/products';

const Products = () => {
  const products = useGetproducts(API);
  console.log(products);
  return (
    <ProductsStyle>
      {products.map((product) => (
        <Item product={product} key={product.id} />
      ))}
    </ProductsStyle>
  );
}

export default Products;
