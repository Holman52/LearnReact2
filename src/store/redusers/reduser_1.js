import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const shopSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
      addProduct: (state, action) => {
        const product = state.find(p => p.id === action.payload);
        if (product) {
          product.count ++;
        }
      },
      removeProduct: (state, action) => {
        const product = state.find(p => p.id === action.payload);
        if (product && product.count>0) {
          product.count --
        }
      },
    },
  });

  export default shopSlice 