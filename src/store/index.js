import { configureStore } from '@reduxjs/toolkit';
import cartUI from './cartUI';
import cart from './cart'

const store = configureStore({
  reducer: {cartUI: cartUI, cart: cart}
})


export default store