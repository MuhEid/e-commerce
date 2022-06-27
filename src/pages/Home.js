import Intro from '../components/UI/Intro';
import ProductList from '../components/products/ProductList';
import classes from './Home.module.css';

import DUMMYY_DATA from './DATA.json';


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
