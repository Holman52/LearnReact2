import { configureStore , createSlice} from '@reduxjs/toolkit'
import shopSlice from './redusers/reduser_1'

const initialState = [
    {
      url: '/img_a.jpg',
      id: 11,
      name: "Пицца плюс",
      time: 50,
      grade: 4.5,
      price: 900,
      count: 0,
  },
  {
      url: '/img_b.jpg',
      id: 22,
      name: "Тануки",
      time: 45,
      grade: 4.4,
      price: 600,
      count: 0,
  },
  {
      url: '/img_c.jpg',
      id: 33,
      name: "FoodBand",
      time: 50,
      grade: 4.6,
      price: 750,
      count: 0,
  },
  {
      url: '/img_d.jpg',
      id:44,
      name: "Жадина-пицца",
      time: 50,
      grade: 4.5,
      price: 900,
      count: 0,
  },
  {
      url: '/img_f.png',
      id:55,
      name: "Точка еды",
      time: 60,
      grade: 4.8,
      price: 1100,
      count: 0,
  },
  {
      url: '/img_g.png',
      id:66,
      name: "PizzaBurger",
      time: 40,
      grade: 4.3,
      price: 800,
      count: 0,
  },
]

const data = initialState.map((item)=> item.id)
console.log(data)

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    increment: (state, action) => {
      const product = state.find(p => p.id === action.payload);
      if (product) {
        product.count ++;
      }
    },
    decrement: (state, action) => {
      const product = state.find(p => p.id === action.payload);
      if (product && product.count>0) {
        product.count --

      }
    },
  },
});
console.log(initialState.id)
export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    productShop: shopSlice,
  }
})

export const { increment, decrement } = productSlice.actions;







// export const { increment, decrement } = productSlice.actions;
// export default productSlice.reducer;

// const initialState = { value: 0 }

// const valueReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(incrementAction, (state, action) => {
//       state.value++
//     })
//     // You can chain calls, or have separate `builder.addCase()` lines each time
//     .addCase(decrementAction, (state, action) => {
//       state.value--})
//      .addDefaultCase((state, action) => {})  
//     })

  // [incrementAction]: (state,action) => state + action.payload,
  // [decrementAction]: (state,action) => state - action.payload


