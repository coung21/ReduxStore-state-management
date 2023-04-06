import { createSlice } from '@reduxjs/toolkit';

const initial_state = {
  isShowing: false,
};

const cartUISlice = createSlice({
  name: 'cartUI',
  initialState: initial_state,
  reducers: {
    showCart(state) {
      state.isShowing = !state.isShowing;
    },
  },
});

export const cartUIAction = cartUISlice.actions;
export default cartUISlice.reducer
