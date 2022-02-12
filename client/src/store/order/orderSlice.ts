import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  EntityState,
} from '@reduxjs/toolkit';
import { addOrder, getOrderList, getOrderWithId } from '../../apis/order';
import { OrderDetailsI, OrderListI } from '../../models/order';

export const fetchOrderList = createAsyncThunk<OrderListI[]>(
  'order/fetchOrderList',
  async () => {
    const response = await getOrderList();
    return response.data;
  },
);

export const fetchOrderById = createAsyncThunk(
  'order/fetchOrderById',
  async (id: string) => {
    const response = await getOrderWithId(id);
    return response.data;
  },
);

export interface OrderState extends EntityState<OrderListI> {
  selectedOrder: OrderListI;
}

export const orderAdapter = createEntityAdapter<OrderListI>();

const initialState = orderAdapter.getInitialState({
  selectedOrder: {},
});

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrderList.fulfilled, orderAdapter.setAll);
    builder.addCase(fetchOrderById.fulfilled, (state, action) => {
      state.selectedOrder = action.payload;
    });
  },
});

export default orderSlice.reducer;
