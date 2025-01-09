import { configureStore } from '@reduxjs/toolkit'

type State = {
  value: number
};

export type IncrementAction = {
  type: 'increment'
};

export type DecrementAction = {
  type: 'decrement'
};

type Action = IncrementAction | DecrementAction

const initialState: State = {
  value: 1
};

const reducer = (State = initialState,action: Action): State => {
  switch(action.type){
    case 'increment':
      return{
        value: State.value + 1
      };
    case 'decrement':
    return{
      value: State.value - 1
    };
    default:
      return State
  }
};

const store = configureStore({
  reducer: reducer,
})
console.log(store)
export default store
