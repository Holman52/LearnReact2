import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
    name: 'productShop',
    initialState: {
    items: [
    ],
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
          state.items.push({ ...action.payload, count: action.payload.count });
        }
      },
      // removeProductShop: (state, action) => {
      //   // Удаляем товар из корзины по ID
      //   state.items = state.items.filter(item => item.id !== action.payload.id);
      // },
      // clearShop: (state) => {
      //   // Очищаем корзину
      //   state.items = [];
      // },
    },
  });
  ;

export default shopSlice.reducer
export const { addProductShop } = shopSlice.actions