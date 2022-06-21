import React from 'react';
import ProductItem from './ProductItem';
import classes from './ProductList.module.css';

export default function ProductList(props) {
  return (
    <div >
      <ul className={classes.list}>
        {props.products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            image={product.image}
            productName={product.productName}
            price={product.price}
          />
        ))}
      </ul>
    </div>
  );
}
