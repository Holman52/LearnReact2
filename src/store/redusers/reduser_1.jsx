import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
    name: 'productShop',
    initialState: {
    items:   []
  },
    reducers: {
      addProductShop: (state, action) => {
        // Проверяем, есть ли товар уже в корзине
        const existingItem = state.items.find(item => item.id === action.payload.id);
        if (existingItem) {
          // Если товар уже есть, увеличиваем его количество
          existingItem.count += action.payload.count;
          
        } else {
          // Если товара нет в корзине, добавляем его
          state.items.push({ ...action.payload, count: action.payload.count, isLocal: true})
          action.payload.isLocal = true
          localStorage.setItem('cart' , JSON.stringify(state.items));
        }
      },
      removeProductShop: (state, action) => {
        // Удаляем товар из корзины по ID
        state.items = state.items.filter(item => item.id !== action.payload.id)
  
        localStorage.removeItem('cart' , JSON.stringify(state.items))
      },
      addProductCount: (state, action) =>{
        const product = state.items.find(item => item.id === action.payload.id);
          if (product) {
            product.count ++;
          }
      },
      removeProductCount: (state, action) =>{
        const product = state.items.find(item => item.id === action.payload.id);
          if (product) {
            product.count --;
          }
      },
      loadCart: (state) => {
        const storedItems = localStorage.getItem('cart');
        if (storedItems) {
          state.items = JSON.parse(storedItems);
        }
      },
    },
  });
  ;

export default shopSlice.reducer
export const { addProductShop, removeProductShop,removeProductCount, addProductCount, loadCart } = shopSlice.actions