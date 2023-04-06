import { createSlice } from '@reduxjs/toolkit';

const initial_state = {
  items: [],
  numberOfItems: 0
}



const cartSlice = createSlice({
  name: 'cartitems',
  initialState: initial_state,
  reducers:{
    addItem(state, action){
      const newItem = action.payload
      const indexItem = state.items.findIndex(item => item.title === newItem.title)
      if(indexItem === -1){
        state.items.push({
          ...newItem,
          total: newItem.price * newItem.quantity,
        });
      } else {
        state.items[indexItem].quantity += 1;
        state.items[indexItem].total =
          state.items[indexItem].price * state.items[indexItem].quantity;
      }
      state.numberOfItems += 1
    },
    removeItem(state, action){
      const removeItem = action.payload
      const indexItem = state.items.findIndex(
        (item) => item.title === removeItem
      );
      if (indexItem !== -1 && state.items[indexItem].quantity > 1){
        state.items[indexItem].quantity -= 1
      } else if (indexItem !== -1 && state.items[indexItem].quantity <= 1) {
        state.items = state.items.filter(item => item.title !== removeItem)
      }
      state.numberOfItems -= 1
    }
  }
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer