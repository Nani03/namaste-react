import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart1",
  initialState: {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0,
  },
  reducers : {
    addItem:(state, action) => {
        state.cartItems.push(action.payload);
        state.totalQuantity += 1;
    },
    removeItem:(state, action) => {
        const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
        if (itemIndex >= 0) {
            state.cartItems.splice(itemIndex, 1);
            state.totalQuantity -= 1;
        }
    },
    clearCart:(state) => {
        state.cartItems = [];
        state.totalQuantity = 0;
    },
  }
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;  
export default cartSlice.reducer;  