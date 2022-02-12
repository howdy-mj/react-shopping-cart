import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  EntityAdapter,
  EntityState,
} from '@reduxjs/toolkit';
import { getProducts, getProductWithId } from '../../apis/product';
import { ProductI } from '../../models/product';

export const fetchProducts = createAsyncThunk<ProductI[]>(
  'product/fetchProducts',
  async () => {
    const response = await getProducts();
    return response.data;
  },
);

export const fetchProductById = createAsyncThunk<ProductI, string>(
  'product/fetchProductById',
  async (id: string) => {
    const response = await getProductWithId(id);
    return response.data;
  },
);

export interface ProductState extends EntityState<ProductI> {
  selectedProduct: ProductI;
}

export const productAdapter = createEntityAdapter<ProductI>();

const initialState = productAdapter.getInitialState({
  selectedProduct: {},
});

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, productAdapter.setAll);
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.selectedProduct = action.payload;
    });
  },
});

export default productSlice.reducer;
