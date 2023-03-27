import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  // useState 역할
  name: "user",
  initialState: "kim",
});

let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
})

let cart = createSlice({
  name : 'cart',
  initialState : [
    { id: 1, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 }
  ],
})

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cart : cart.reducer,
  },
});
