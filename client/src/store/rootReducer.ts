import { combineReducers } from 'redux';

import counterReducer from './counter/counterSlice';

export const rootReducer = combineReducers({
  counter: counterReducer,
});

// export const rootReducer: Reducer<RootState> = (state, action) => {
//   if (action.type === HYDRATE) {
//     const nextState = { ...state, ...action.payload };
//     if (typeof window !== 'undefined' && state?.router) {
//       nextState.router = state.router;
//     }
//     return nextState;
//   } else {
//     return reducer(state, action);
//   }
// };
