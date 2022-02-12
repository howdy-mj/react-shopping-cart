import { combineReducers } from 'redux';
import { EntityState } from '@reduxjs/toolkit';
import { productSlice, ProductState } from './product/productSlice';
import { CartItemI } from '../models/cart';
import { cartSlice } from './cart/cartSlice';
import { OrderDetailsI } from '../models/order';
import { orderSlice, OrderState } from './order/orderSlice';

export interface RootState {
  product: ProductState;
  cart: EntityState<CartItemI>;
  order: OrderState;
}

export const rootReducer = combineReducers({
  product: productSlice.reducer,
  cart: cartSlice.reducer,
  order: orderSlice.reducer,
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
