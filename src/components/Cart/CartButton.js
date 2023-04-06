import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { cartUIAction } from '../../store/cartUI';
import { useSelector } from 'react-redux';

const CartButton = (props) => {
  const badge = useSelector(state => state.cart.numberOfItems)
  const dispatch = useDispatch()
  function showCartHandler(){
    dispatch(cartUIAction.showCart())
  }
  return (
    <button onClick={showCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{badge}</span>
    </button>
  );
};

export default CartButton;
