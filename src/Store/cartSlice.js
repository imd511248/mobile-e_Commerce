// cartSlice.js

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], total: 0 },
  reducers: {
    add(state, action) {
      const { id, title, price,thumbnail } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ id, title,thumbnail, price, quantity: 1 });
      }

      state.total += price;
    },
    removeItem(state, action) {
      const { id, price } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity -= 1;

        if (existingItem.quantity === 0) {
          state.items = state.items.filter((item) => item.id !== id);
        }

        state.total -= price;
      }
    },
  },
});

export const { add, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
