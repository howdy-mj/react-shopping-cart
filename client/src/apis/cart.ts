import { api } from './index';
import { CartItemI } from '../models/cart';

export const getCartList = () => {
  return api.get('/carts');
};

export const addCardItem = (item: CartItemI) => {
  return api.post('/carts', item);
};

export const deleteCardItem = (id: number) => {
  return api.delete(`/carts/${id}`);
};
