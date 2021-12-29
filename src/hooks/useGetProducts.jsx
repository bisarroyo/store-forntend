import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetproducts = (API) => {
  const [products, setProducts] = useState([]);
  
  useEffect(async () =>{
    const response = await axios(API);
    setProducts(response.data);
  },[])
  return products;
}

export default useGetproducts;