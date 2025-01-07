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
}

const reducer = (state = initialState,action: Action): State => {
  switch(action.type){
    case 'increment':
      return{
        value: state.value + 1
      };
    case 'decrement':
    return{
      value: state.value - 1
    };
    default:
      return state
  }
} 

export default configureStore({
  reducer: reducer,
})
