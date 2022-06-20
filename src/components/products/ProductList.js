import React from 'react';
import ProductItem from './ProductItem';
import classes from './ProductItem.module.css';

export default function ProductList(props) {
  return (
    <ul className={classes.list}>
      {props.products.map((product) => (
        <ProductItem key={product.id} id={product.id} image={product.image} productName={product.productName} price={product.price}/>
      ))}
    </ul>
  );
}
