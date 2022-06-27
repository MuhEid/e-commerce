import Intro from '../components/Intro';
import ProductList from '../components/products/ProductList';
import classes from './Home.module.css';

import DUMMYY_DATA from './DATA.json';
// const DUMMYY_DATA = [
//   {
//     id: 1,
//     productName: 'Walnut Dining Table',
//     price: '$1250',
//     type: 'table',
//     image: '',
//   },
//   {
//     id: 2,
//     productName: 'White oak Dining Table',
//     price: '$1500',
//     type: 'table',
//     image: './assets/table2.jpg',
//   },
//   {
//     id: 3,
//     productName: 'Indoor Dining Table',
//     price: '$1000',
//     type: 'table',
//     image: './assets/table3.jpg',
//   },
//   {
//     id: 4,
//     productName: 'Bohemian Style Table',
//     price: '$1250',
//     type: 'table',
//     image: './assets/table4.jpg',
//   },
// ];

export default function Home() {
  return (
    <div className={classes.container}>
      <Intro />
      <h1> Dining Tables </h1>

      <div className={classes.row}>
        <ProductList products={DUMMYY_DATA} />
      </div>
    </div>
  );
}
