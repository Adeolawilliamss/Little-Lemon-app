import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    carts: [],
    totalQuantity: 0,
    totalAmount: 0
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.carts.find(cartItem => cartItem.id === item.id);
      
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.carts.push({ ...item, quantity: 1 });
      }
      
      state.totalQuantity++;
      state.totalAmount += item.price;
    },
    deleteFromCart: (state, action) => {
      const { id, removeOne } = action.payload;
      const existingItem = state.carts.find(cartItem => cartItem.id === id);

      if (existingItem) {
        if (removeOne) {
          if (existingItem.quantity > 1) {
            existingItem.quantity--;
            state.totalQuantity--;
            state.totalAmount -= existingItem.price;
          } else {
            state.carts = state.carts.filter(cartItem => cartItem.id !== id);
            state.totalQuantity -= existingItem.quantity;
            state.totalAmount -= existingItem.price * existingItem.quantity;
          }
        } else {
          state.carts = state.carts.filter(cartItem => cartItem.id !== id);
          state.totalQuantity -= existingItem.quantity;
          state.totalAmount -= existingItem.price * existingItem.quantity;
        }
      }
    },
    clearCart: (state) => {
      state.carts = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    }
  }
});

export const { addToCart, deleteFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
