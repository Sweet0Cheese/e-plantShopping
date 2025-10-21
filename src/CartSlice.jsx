import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // initialize cart items
  },
  reducers: {
    // Add an item to the cart
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.name === item.name);

      if (existingItem) {
        // If item already exists, increase quantity
        existingItem.quantity += 1;
      } else {
        // Otherwise, add new item with quantity = 1
        state.items.push({ ...item, quantity: 1 });
      }
    },

    // Remove an item from the cart
    removeItem: (state, action) => {
      const nameToRemove = action.payload.name;
      state.items = state.items.filter(item => item.name !== nameToRemove);
    },

    // Update quantity of an existing item
    updateQuantity: (state, action) => {
      const { name, amount } = action.payload;
      const existingItem = state.items.find(i => i.name === name);

      if (existingItem) {
        existingItem.quantity = amount;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
