import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { addCardItem, getCartList } from '../../apis/cart';
import { CartItemI } from '../../models/cart';

export const fetchCartList = createAsyncThunk<CartItemI[]>(
  'cart/fetchCartList',
  async () => {
    const response = await getCartList();
    return response.data;
  },
);

export const cartAdapter = createEntityAdapter<CartItemI>();

const initialState = cartAdapter.getInitialState();

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCartList.fulfilled, cartAdapter.setAll);
  },
});

export default cartSlice.reducer;
