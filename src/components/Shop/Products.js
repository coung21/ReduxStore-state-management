import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { ITEMS } from '../../utils/dummyData';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {ITEMS.map((item) => (
          <ProductItem
            key={item.title}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
