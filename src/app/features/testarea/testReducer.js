import { createReducer } from '../../common/util/reducerUtil';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./testConstants";

const initalState = {
  data: 44
}

export const incrementCounter = (state, payload) => {
  return { ...state, data: state.data + 1 }
}

export const decrementCounter = (state, payload) => {
  return { ...state, data: state.data - 1 }
}


export default createReducer(initalState, {
  [INCREMENT_COUNTER]: incrementCounter,
  [DECREMENT_COUNTER]: decrementCounter
});