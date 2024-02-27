/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
   
    addToCart: (state, action) => {
      return state = [...state,action.payload]
    },
    deleteCartAllData: (state) => {
      return (state = []);
    },
    deleteSingleData: (state, action) => {
      const remainingData = state?.filter(
        (data) => data?.id !== action?.payload
      );
      return (state = remainingData);
    },
  },
});

export const { addToCart, deleteCartAllData, deleteSingleData } =
  cartSlice.actions;

export default cartSlice.reducer;
