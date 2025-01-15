import { configureStore, createAction, createReducer } from '@reduxjs/toolkit'

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

export const incrementAction = createAction('value/incrementAction')
export const decrementAction = createAction('value/decrementAction')

const initialState = { value: 0 }


const valueReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(incrementAction, (state, action) => {
      // action is inferred correctly here
      state.value++
    })
    // You can chain calls, or have separate `builder.addCase()` lines each time
    .addCase(decrementAction, (state, action) => {
      state.value--})
     .addDefaultCase((state, action) => {})  
    })

  // [incrementAction]: (state,action) => state + action.payload,
  // [decrementAction]: (state,action) => state - action.payload



export const store = configureStore({
  reducer: {
    value: valueReducer
  }
})
