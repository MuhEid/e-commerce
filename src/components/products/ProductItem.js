import React from 'react';
import classes from "./ProductItem.module.css";

export default function ProductItem(props) {
  return (
    <li className={classes.productCard}>
      <div>
        <img src={`${process.env.PUBLIC_URL}/assets/table${props.id}.jpg`} alt={props.productName} />
      </div>
      <div className={classes.content}>
        <h3>{props.productName}</h3> 
        <p>{props.price}</p>
      </div>
      <div>
        <button className={classes.addCartBtn}>Add to cart</button>
      </div>
    </li>
  );
}
