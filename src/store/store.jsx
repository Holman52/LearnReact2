import { configureStore, createAction, createReducer , createSlice} from '@reduxjs/toolkit'

// type State = {
//   value: number
// };

// export type IncrementAction = {
//   type: 'increment'
// };

// export type DecrementAction = {
//   type: 'decrement'
// };

// type Action = IncrementAction | DecrementAction

// const initialState: State = {
//   value: 1
// }

// const reducer = (state = initialState,action: Action): State => {
//   switch(action.type){
//     case 'increment':
//       return{
//         value: state.value + 1
//       };
//     case 'decrement':
//     return{
//       value: state.value - 1
//     };
//     default:
//       return state
//   }
// } 

// export default configureStore({
//   reducer: reducer,
// }
const initialState = {
 products:[{
      url: '/img_a.jpg',
      id:"c1",
      name: "Пицца плюс",
      time: 50,
      grade: 4.5,
      price: 900,
      count: 0,
  },
  {
      url: '/img_b.jpg',
      id:"c2",
      name: "Тануки",
      time: 45,
      grade: 4.4,
      price: 600,
      count: 0,
  },
  {
      url: '/img_c.jpg',
      id:"c3",
      name: "FoodBand",
      time: 50,
      grade: 4.6,
      price: 750,
      count: 0,
  },
  {
      url: '/img_d.jpg',
      id:"c4",
      name: "Жадина-пицца",
      time: 50,
      grade: 4.5,
      price: 900,
      count: 0,
  },
  {
      url: '/img_f.png',
      id:"c5",
      name: "Точка еды",
      time: 60,
      grade: 4.8,
      price: 1100,
      count: 0,
  },
  {
      url: '/img_g.png',
      id:"c6",
      name: "PizzaBurger",
      time: 40,
      grade: 4.3,
      price: 800,
      count: 0,
  },
  ]
}

// export const incrementAction = createAction('value/incrementAction')
// export const decrementAction = createAction('value/decrementAction')


const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    increment: (state, action) => {
      const product = state.products.find(p => p.id === action.payload);
      if (product) {
        product.count += 1;
      }
    },
    decrement: (state, action) => {
      const product = state.products.find(p => p.id === action.payload);
      if (product && product.count > 0) {
        product.count -= 1;
      }
    },
  },
});


export const store = configureStore({
  reducer: {
    products: productSlice
  }
})

export const { increment, decrement } = productSlice.actions;
export default productSlice.reducer;






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


